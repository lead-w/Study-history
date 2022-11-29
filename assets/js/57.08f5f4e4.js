(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{223:function(e,a,r){"use strict";r.r(a);var t=r(0),_=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"webpack-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webpack-总结","aria-hidden":"true"}},[e._v("#")]),e._v(" webpack 总结")]),e._v(" "),r("h2",{attrs:{id:"base"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#base","aria-hidden":"true"}},[e._v("#")]),e._v(" base")]),e._v(" "),r("h3",{attrs:{id:"webpack是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webpack是什么","aria-hidden":"true"}},[e._v("#")]),e._v(" webpack是什么")]),e._v(" "),r("ul",[r("li",[e._v("webpack是一个打包工具,它做的事情是就是,分析代码结构,找到js模块以及其他不能被浏览器识别的语法,打包成合适的合适供浏览器使用")])]),e._v(" "),r("h3",{attrs:{id:"webpack打包流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包流程","aria-hidden":"true"}},[e._v("#")]),e._v(" webpack打包流程")]),e._v(" "),r("ul",[r("li",[e._v("分位6步骤(配置,插件,run,make,seal,emitAssets)")]),e._v(" "),r("li",[e._v("1、执行npx webpack的时候 他会解析shell脚本和webpack配置")]),e._v(" "),r("li",[e._v("2、初始化内部和webpack配置的插件")]),e._v(" "),r("li",[e._v("3、run阶段 在compiler类内执行run方法 开始编译代码  他会初始化Compilation,他负责了整个编译过程,内部初始化一堆钩子,收集 entries,modules,chunks,assets\n"),r("ul",[r("li",[e._v("解释 entries就是入口文件,modules 每次require 的编译文件存放到modules中,chunks 指的是一个入口文件编译的所有资源,assets 是解析之后资源(chunks+模板组合) 用来输出到output中")])])]),e._v(" "),r("li",[e._v("4、make阶段 他通过工厂模式创建代码块 通过ast对源码进行解析,遇到"),r("code",[e._v("require")]),e._v("语法的时候 会替换成 "),r("code",[e._v("__webpack_require__")]),e._v(",(webpack内部实现了一套commonjs),同时会加入到依赖项,通过工厂模式再次创建")]),e._v(" "),r("li",[e._v("5、seal 封包  通过 chunks 和 module 创建代码块资源,通过模板,把chunk处理成"),r("code",[e._v("webpack_require()")]),e._v("需要格式,最终生成的代码")]),e._v(" "),r("li",[e._v("6、emit 把 assets 输出到 output中")])]),e._v(" "),r("h3",{attrs:{id:"懒加载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#懒加载","aria-hidden":"true"}},[e._v("#")]),e._v(" 懒加载")]),e._v(" "),r("ul",[r("li",[e._v("分2步骤 第一个是代码分割,第二个是jsonp加载数据")]),e._v(" "),r("li",[e._v("1、在ast语法解析,遇到"),r("code",[e._v("Import('xx')")]),e._v("的时候 webpack会将他替换成"),r("code",[e._v("__webpack_require__.e(chunkId).then(__webpack_require__.t.bind(xxxxx))")])]),e._v(" "),r("li",[e._v("2、"),r("code",[e._v("__webpack_require__.e")]),e._v("实现了jsonp的数据加载,内部会把加载过来的数据循环遍历注入到当前的modules(保存在require切割的代码带资源),"),r("code",[e._v("__webpack_require__.t")]),e._v("实际上是再次触发"),r("code",[e._v("__webpack_require__")]),e._v("加载数据到页面中")])]),e._v(" "),r("h3",{attrs:{id:"热更新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#热更新","aria-hidden":"true"}},[e._v("#")]),e._v(" 热更新")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("首先有server和client,平常我们配置的那个热更新插件,其实就是client")])]),e._v(" "),r("li",[r("p",[e._v("server 他会创建一个socket.io 将所有的client存储起来 每次编译完成的时候 会遍历所有的client 告诉他们当前编译的hash,同时将compiler中文件输出修改为内存修改")])]),e._v(" "),r("li",[r("p",[e._v("client")]),e._v(" "),r("ul",[r("li",[e._v("1、也会创建一个socket.io 他监控server发送过来的hash,第一次会保存hash,第二次才能hot逻辑")]),e._v(" "),r("li",[e._v("2、在更新的时候,他会发送一个请求 hash.hot-update.json 去问服务器有哪些代码块chunk变化了,服务器会返回一个对象 h是当前的hash值, c 是变化的chunk")]),e._v(" "),r("li",[e._v("3、遍历c 获取到变化的chunkId 通过JSONP 请求变化的数据 chunkID.hash.hot-update.js ,client实现这个方法 webpackHotUpdate方法 加载有的数据")])])]),e._v(" "),r("li",[r("p",[e._v("动态加载一般是运行时加载，静态加载是编译时加载")])])]),e._v(" "),r("h3",{attrs:{id:"es6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#es6","aria-hidden":"true"}},[e._v("#")]),e._v(" es6")]),e._v(" "),r("ul",[r("li",[e._v("原理 利用es6 静态加载,分析依赖")]),e._v(" "),r("li",[e._v("特点1、只能作为模块顶层语句出现(不能放在{}内)")]),e._v(" "),r("li",[e._v("2、import的模块名只能是字符串常量")])]),e._v(" "),r("h3",{attrs:{id:"loader"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#loader","aria-hidden":"true"}},[e._v("#")]),e._v(" loader")]),e._v(" "),r("ul",[r("li",[e._v("通过loader webpack把不同文件转换成js")]),e._v(" "),r("li",[e._v("loader分为 normal/pitch,normal 接收的是源码 字符串 返回的是处理过后的字符串,同步用return,异步用this.async 回调,内部通过"),r("code",[e._v("loader-utils")]),e._v("获取loader的配置选项")]),e._v(" "),r("li",[e._v("['L1','L2','L3'] 执行顺序L1.pitch=>L2.pitch=>L1.pitch=>L1.normal=>L2.normal=>L3.normal")]),e._v(" "),r("li",[e._v("css-loader 作用将 处理@import和url外部资源")]),e._v(" "),r("li",[e._v("css-loader的原理 解析css 语法 找到 url 个 @import 将他们替换成 require 语法,将处理的数据 返回给 style-loader 处理")])]),e._v(" "),r("h3",{attrs:{id:"插件-tapable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#插件-tapable","aria-hidden":"true"}},[e._v("#")]),e._v(" 插件/tapable")]),e._v(" "),r("ul",[r("li",[e._v("plugin 贯穿了整个webpack,插件的实现机制是要是: 创建各种钩子,插件注入到钩子中,webpack在执行的过程中,会触发对应的钩子执行函数")]),e._v(" "),r("li",[e._v("钩子就是table实现的,Hook 分同步和异步，异步又分并行和串行")])]),e._v(" "),r("h3",{attrs:{id:"devtool-打包调试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#devtool-打包调试","aria-hidden":"true"}},[e._v("#")]),e._v(" devtool 打包调试")]),e._v(" "),r("ul",[r("li",[e._v("sourcemap性能最差 能定位到行和列")]),e._v(" "),r("li",[e._v("eval 最能最好,最能映射到打包后的代码")])]),e._v(" "),r("h3",{attrs:{id:"hash"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hash","aria-hidden":"true"}},[e._v("#")]),e._v(" hash")]),e._v(" "),r("ul",[r("li",[e._v("作用是缓存,每次打包的时候 文件变动了,hash会变化,浏览器会重新请求")]),e._v(" "),r("li",[e._v("3类hash\n"),r("ul",[r("li",[e._v("hash 代表的每一次的编译(hash都会变)")]),e._v(" "),r("li",[e._v("chunkhash 代码块里面的内容变化了(chunkhash才会变)")]),e._v(" "),r("li",[e._v("contenthash 单个文件内容变化 他才变化")])])])]),e._v(" "),r("h3",{attrs:{id:"resolve"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resolve","aria-hidden":"true"}},[e._v("#")]),e._v(" resolve")]),e._v(" "),r("ul",[r("li",[e._v("配置文件的插件规则、别名等")])]),e._v(" "),r("h3",{attrs:{id:"resolveloader"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resolveloader","aria-hidden":"true"}},[e._v("#")]),e._v(" resolveLoader")]),e._v(" "),r("ul",[r("li",[e._v("配置loader的插件规则")])]),e._v(" "),r("h3",{attrs:{id:"noparse"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#noparse","aria-hidden":"true"}},[e._v("#")]),e._v(" noParse")]),e._v(" "),r("ul",[r("li",[e._v("可以用于配置哪些模块文件的内容不需要进行解析,提高构建速度")])]),e._v(" "),r("h3",{attrs:{id:"配置环境变量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置环境变量","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置环境变量")]),e._v(" "),r("ul",[r("li",[e._v("cross-env")])])])}],!1,null,null,null);a.default=_.exports}}]);