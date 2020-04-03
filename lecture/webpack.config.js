const path = require('path')

module.exports = {
 name:'word-relay-setting',
 mode:'development',//실서비스 production   
 devtool:'eval',
 resolve:{
     extensions:['.js','.jsx'] //웹팩이 알아서 해당 ext 찾아 합쳐줌
 },

 //제일 중요!
 entry:{ //입력
    app:['./client']
 },

 module:{
    rules:[{
        test: /\.jsx?/, //js, jsx 파일을
        loader: 'babel-loader', //옛날 브라우저에서 돌아가게,
        options:{
            presets:['@babel/preset-env','@babel/preset-react'],
            plugins:['@babel/plugin-proposal-class-properties']
        }
    }],
 },

 output:{//출력
    path: path.join(__dirname,'dist'),
    filename:'app.js'
 }

}