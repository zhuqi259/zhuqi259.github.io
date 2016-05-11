var webpack = require('webpack');

var productionPlugin = new webpack.DefinePlugin({
    "process.env": {
        NODE_ENV: JSON.stringify("production")
    }
});

const path = require('path');
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        publicPath: '/',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: PATHS.app,
            loader: 'babel',
            query: {
                cacheDirectory: true,
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            include: PATHS.app,
            loaders: ['style', 'css']
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        contentBase: PATHS.build,
        hot: true
    },
    plugins: [productionPlugin, new webpack.HotModuleReplacementPlugin()]
}
