###仿网易严选的基于react全家桶的SPA应用
####项目描述
  1)	此项目为一个前后台分离的电商的SPA, 前端应用
  2)	包括首页、首页导航子菜单页、识物页、分类页、购物车页、个人中心页、登录/注册页等模块
  3)	前端: 使用React全家桶+ES6+Webpack等技术
  4)	采用模块化、组件化、工程化的模式开发
####项目功能界面
####技术选型
  1.前台数据展现/交互/组件化:react react-router-dom redux
  2.前后台交互:ajax请求，axios async/await
  3.模拟数据：mockjs
  4.模块化：ES6 babel
  5.项目构建/工程化：webpack  react-create-app  eslint
    css使用的是styl,所以得修改webpack配置
        1.先弹射出webpack所有配置(!!!PS: 此操作是不可逆的)
        ```js
        ／／ 使用npm的方式
        npm run eject
        // 使用yarn的方式
        yarn run eject
        // react-cli会询问你是否执行操作，并提示你这个操作是不可逆的
        * 2.在弹射出来的config文件夹下找到webpack.config.dev.js
        // 在module rules里面添加stylus-loader的规则
         module: {
            strictExportPresence: true,
            rules: [
                ...
                 oneOf: [
                    ...
                    {
                    test: /\.styl$/,
                    loaders: ['style-loader', 'css-loader', 'stylus-loader']
                  },
                 ]
            ]
            ...
          }
        * 3.在file-loader添加对.styl文件的解析
        ```js
        // 在oneOf的最底部找到file-loader
          {
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.styl$/], // 添加styl文件的解析
            loader: require.resolve('file-loader'),
            options: {
                name: 'static/media/[name].[hash:8].[ext]',
            },
          },
  6.轮播图：swiper
  7.滚动：better-scroll
####前端路由
  1.主界面包括：(Main.jsx)
      主页面：Home
      识物页、
      分类页、
      购物车页、
      个人中心、
      搜索页、
      头部导航的子菜单页
  2.登录/注册(Login)
    2.1 用户名密码登录(子路由)
    2.2 手机短信登录(子路由)
