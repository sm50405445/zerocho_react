const path = require('path')
const webpack = require('webpack')

module.exports = {
    name:'speed-webpack',
    mode:'development', //실서비스 production
    devtool:'eval', //실서비스 hidden-source-map
    resolve:{
        extensions:['.js','.jsx']
    },

    entry:{
        app:['./client']
    },
    module:{
        rules:[{
            test: /\.jsx?$/, //js, jsx 파일을
            loader: 'babel-loader', //옛날 브라우저에서 돌아가게,
            options:{
                presets:[
                    //자동으로 옛날브라우저 지원
                    ['@babel/preset-env',{
                        targets:{
                            browsers:['> 5% in KR'/*한국에서 5% 이상 점유 브라우저 */,'last 2 chrome versions'], //마지막 2개 버전만 호환
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'],
                plugins:[
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel',
                ]
            }
        }],
     },
     //plugin rules 하나씩 빼가면서 알아보는게 중요!
    plugins:[
        new webpack.LoaderOptionsPlugin({debug:true})
    ],
    output:{
        path:path.join(__dirname,'dist'),
        filename:'app.js',
        publicPath:'/dist/',
    }
}