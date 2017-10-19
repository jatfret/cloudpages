const fs = require('fs')
const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production')
  ? require('./webpack.product.config')
  : require('./webpack.dev.config')

const port = process.env.PORT || config.dev.port
const autoOpenBrowser = !!config.dev.autoOpenBrowser
const proxyTable = config.dev.proxyTable

const app = express()
const compiler = webpack(webpackConfig)
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: false,
  stats: {
    colors: true
  }
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
app.use(hotMiddleware)

Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  // app.use(proxyMiddleware(options.filter || context, options))
})

app.use(devMiddleware)
app.use((req, res, next)=>{
  const _path = compiler.outputPath
  console.log('path:',_path)
  next()
})
// 路由
app.get('/:appName', function(req, res, next) {
  console.log('appName', req.params.appName)
  var filepath = path.join(webpackConfig.output.path, req.params.appName) + '/index.html';
  console.log('filepath', filepath)
  // 使用webpack提供的outputFileSystem
  compiler.outputFileSystem.readFileSync(compiler.outputPath, function(err, result) {
      if (err) {
          // something error
          return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
  });
});
app.get('/api/cards', functions(req, res){
  res.sendFile('../src/demo/constants/cards.json')
})

const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

const uri = 'http://localhost:' + port

var _resolve
var _reject
var readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve
  _reject = reject
})

var server
var portfinder = require('portfinder')
portfinder.basePort = port

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  portfinder.getPort((err, port) => {
    if (err) {
      _reject(err)
    }
    process.env.PORT = port
    var uri = 'http://localhost:' + port
    console.log('> Listening at ' + uri + '\n')
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      // opn(uri)
    }
    server = app.listen(port)
    _resolve()
  })
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
