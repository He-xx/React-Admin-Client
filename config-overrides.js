/*
 * @作用:
 * @Author: xufanghe
 * @Date: 2019-12-04 18:31:46
 * @LastEditors: xufanghe
 * @LastEditTime: 2019-12-05 16:09:36
 */
const { override, fixBabelImports, addLessLoader } = require('customize-cra')
//针对antd实现按需打包；根据import来打包(使用babel-plugin-import)
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectoty: 'es',
    style: true //自动打包相关的样式
  }),
  //使用less-loader对源码中的less的变量进行重新指定
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' } //全局主题色
  })
)
