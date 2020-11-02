# 快应用 汽车模版

## 1、文件结构

```
├── sign                # 存储 rpk 包签名模块;
│   ├── debug           # 调试环境证书/私钥文件
│   └── release         # 正式环境证书/私钥文件
└── src
│   ├── assets          # 公用的资源(images/styles/字体...)
│   │   ├──images       # 存储 png/jpg/svg 等公共图片资源
│   │   └──styles       # 存放 less/css/sass 等公共样式资源
│   │   └──js           # 存储公共 javaScript 代码资源
│   │   └──iconfont     # 存放图标字体
│   ├── helper          # 项目自定义辅助各类工具
│   │   ├──apis         # 存储与后台请求接口相关(已封装好)
│   │   ├──ajax.js      # 对系统提供的 fetch api 进行链式封装
│   │   └──utils        # 存放项目所封装的工具类方法
│   ├── pages           # 统一存放项目页面级代码
│   ├── app.ux          # 应用程序代码的人口文件
│   ├── manifest.json   # 配置快应用基本信息
│   └── components      # 组件
└── package.json        # 定义项目需要的各种模块及配置信息
```

## 2、如果需要轻粒子统计功能服务

首先需要前往轻粒子官网注册, 在创建应用之后可以获得app_key，
然后需要在 ``quickapp-automobile-template/src/assets/js/statistics.config.js`` 文件中配置好自己的app_key。

## 3、模版说明

本项目为快应用。

`main`页面：
- 首页：
    - 点击搜索栏，进入`search`页面。
    - 滑动tabs，切换文章列表，点击文章列表项，进入`article`页面。
- 选车：
    - 点击条件/品牌，进入`car-condition`页面。
    - 品牌列表通过字母分类，滚动到品牌列表时，右边展示快速定位的字母列表，点击字母则页面滚动到对应位置。
- 论坛：
    - 点击“主题”图标，进入`theme-list`页面。
    - 点击论坛文章列表项，进入`article`页面。
- 我：
    - 点击“浏览历史”图标，进入`history`页面。
    - 点击“我的收藏”图标，进入`collection`页面。
    - 点击“我的消息”图标，进入`message`页面。
    - 未登录时，点击“登录/注册”，进入`login`页面。
    - 登录时，点击“退出”并确认，清除登录状态。

`search`页面：
- 输入框：填写内容后，展示文章列表，点击文章列表项，进入`article`页面。
- 取消按键：返回上一页。

`article`页面：
- 最新评论：点击消息图标，进入`comment-reply`页面。
- 发表评论：点击发表评论，进入`comment`页面。点击右侧消息图标，文章滚动到最新评论。
- 搜索栏：点击右侧菜单，有“保存桌面”、“返回首页”、“取消”。点击“返回首页”，可以快速返回`main`页面。

`comment`页面、`comment-reply`页面：
- 填写评论或回复。

`car-condition`页面、`History`页面：
- 汽车列表：点击汽车列表项，进入`car-detail`页面。
- 差异：`car-condition`页面有过滤条件。

`car-detail`页面：
- 汽车简介和型号列表。

`theme-list`页面：
- 主题论坛列表，点击列表项，进入`forum-list`页面。

`forum-list`页面：
- 论坛文章列表，点击列表项，进入`article`页面。

`login`页面：
- 登陆/注册页，点击确定按键，进入`main`页面，同时清除router，保存登录状态。


## 4、如何使用

### 4.1 快应用开发工具调试(推荐 ✅✅)
推荐下载[快应用开发工具](https://www.quickapp.cn/docCenter/post/95)，可以进行扫码调试/usb调试，还有web预览、语法提示等功能。使用方法，请参见[快应用开发工具文档](https://doc.quickapp.cn/tutorial/ide/overview.html)。

### 4.2 命令行调试
```bash
cd quickapp-automobile-template && yarn
yarn start # 推荐 ✅✅

# 或者运行以下命令
yarn server & yarn watch

# 或者在终端一 Tab 下运行：
yarn server
# 在终端另一 Tab 下运行：
yarn watch

# ✨ 新增「快应用」页面
yarn gen YourPageName
```

用一台 `Android` 手机，下载安装[「快应用」调试器](https://www.quickapp.cn/docCenter/post/69)，打开后操作`扫码安装`，扫描如上命令生成的二维码，即可看到效果；更多讯息，请参见[快应用环境搭建](https://nice.lovejade.cn/zh/article/develop-quick-app-experience-notes.html#环境搭建)。


## 5、Tips:

-  **更优雅的处理数据请求**；采用 `Promise` 对系统内置请求 `@system.fetch` 进行封装，并抛出至全局，使得可以极简的进行链式调用，并能够使用  `finally`；

-  **内置样式处理方案**；「快应用」支持 `less`, `sass` 的预编译；这里采取 `less` 方案，并内置了部分变量，以及常用混合方法，使得可以轻松开启样式编写、复用、修改等；

-  **封装常用方法**；在 `helper/utils` 路径下，有对日期、字符串、系统等常用方法，分别进行封装，统一暴露给 `global.$utils`，使得维护方式更加合理且健壮，同时又可以便捷的使用，高效开发；当然，你也可以根据需要自行增删、抑或扩展；

- **简化开始开发流程**； 注入 [Concurrently](https://github.com/kimmobrunfeldt/concurrently) 插件，使可以运行 `yarn start` 即可开始开发，而无需更多命令，从而简洁开发流程；

-  **添加新增页面命令脚本**；如果需要新建页面，只需运行：`yarn gen YourPageName` ，当然，也可以根据需要，自行定定制模板：*/command/gen/template.ux*；

-  **集成 [Prettier](https://prettier.io/) & [Eslint](https://eslint.org/)**；在检测代码中潜在问题的同时，统一团队代码规范、风格（`js`，`less`，`scss`等），从而促使写出高质量代码，以提升工作效率(尤其针对团队开发)；

-  **新增文件监听命令**：引入 [onchange](https://github.com/Qard/onchange) 依赖来监听文件变化；开发时，运行 `yarn prettier-watch` 命令，即可对所修改的 `*.ux` `*.js` 等文件，进行 **Prettier** 格式化，从而大幅度提升编写效率；

-  **优化本地开发端口设定**；「快应用」默认端口为 `12306`，可自定义端口，但使用体验却不够友好；此处参考 `creat-react-app` 设定，对本地开发地址端口使用进行优化：如果指定端口(默认: `8080`)被占用，则向上递增寻找新的可用端口(如：8081 / 8082 / … )；

-  **浏览器打开调试主页二维码**；运行 `yarn start`，会启动 HTTP 调试服务器，并将该地址在**命令行终端**显示，手机用快应用调试器扫码，即可下载并运行 rpk 包；当终端积累的信息流多了，就造成扫码不便，故增设在浏览器打开调试主页二维码；如想不使用此功能，在 _command/server.js_ 文件中，将 `autoOpenBrowser` 设置为 `false` 即可；

## 6、内置命令

|  命令 | 描述  | 备注 |
|---|---|---|
| `yarn start`  | 开启服务(server)和监听(watch)  | 附魔[多步优化](https://nice.lovejade.cn/zh/article/quickapp-boilerplate-template.html#%E6%94%B9%E8%BF%9B%E4%BC%98%E5%8A%BF)，一键开启开发|
| `yarn server`  | 开启服务(server)  | 如不嫌麻烦，可使用，不推荐 |
| `yarn watch`  | 开启监听(watch)  | 如不嫌麻烦，可使用，不推荐 |
| `yarn build ` | 编译打包，生成 `rpk`包  | 对内置 `hap build` 命令的转接 |
| `yarn release ` | 生成 `rpk`包并增加签名  | 对内置 `hap release` 命令的转接  |
| `yarn gen `  | 新增「快应用」页面 | 助你高效生成页面，模版可自定义，推荐 ✓|
| `yarn prettier`  | 一键美化代码(js/css/less/ux)  | 实在是团队开发好帮手，推荐 ✓ |
| `yarn prettier-watch`  | 对变化代码文件格式、实时美化 | 极大提升代码编写效率，强烈推荐 ✔️|

