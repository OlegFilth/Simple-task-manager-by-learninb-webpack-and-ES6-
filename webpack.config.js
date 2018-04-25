const path = require('path');

module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_nodules/,
            use: {
                loader: 'babel-loader',
                options: {presets: ['env']}
            }
        }
        ]
    }
}