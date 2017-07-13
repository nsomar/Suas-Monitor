
module.exports = {

    watch: true,

    target: 'electron',

    entry: './app/src/index.js',

    output: {
        filename: './app/build/bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['react']
                }
            },
            { 
                test: /\.css$/, loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    }
}