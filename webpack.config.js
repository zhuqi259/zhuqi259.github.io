var webpack = require('webpack');

var productionPlugin = new webpack.DefinePlugin({
    "process.env": {
        NODE_ENV: JSON.stringify("production")
    }
});

module.exports = {
    entry: {
        app: "./src/index.jsx"
    },
    output: {
        path: 'dist',
        publicPath: '/',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [productionPlugin, new webpack.HotModuleReplacementPlugin()]
}
