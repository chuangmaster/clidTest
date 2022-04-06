module.exports = {
    filenameHashing: false,
    //用於 dist 產生出來的html
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
    pages:{
      demo:{
        entry:`./src/components/pages/Demo/demo.js`,
        template:`./public/index.html`,
       },
      home:{
        entry:`./src/components/pages/Home/main.js`,
        template:`./src/components/pages/Demo/home.html`,
      }
    }
  }
  