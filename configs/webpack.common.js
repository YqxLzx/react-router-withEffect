const path = require('path');
module.exports = {
    context: path.resolve(__dirname),
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    compilerOptions: {
                        noEmit: false,
                    },
                }
            }
        ]
    }, 

}