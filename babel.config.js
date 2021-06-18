module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    //模块化导入ant-design-vue 的js和css
    [
      "import",
      {libraryName: 'ant-design-vue', libraryDirectory: 'es', style: 'css'}
    ]
  ]
}
