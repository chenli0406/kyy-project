
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
https://blog.csdn.net/yanical/article/details/7213289
# ✨ 新增「茉莉浏览器」页面
yarn gen YourPageName
## 6、内置命令

|  命令 | 描述  | 备注 |
|---|---|---|
| `yarn start`  | 开启服务(server)和监听(watch)  | 附魔[多步优化](https://nice.lovejade.cn/zh/article/quickapp-boilerplate-template.html#%E6%94%B9%E8%BF%9B%E4%BC%98%E5%8A%BF)，一键开启开发|
| `yarn server`  | 开启服务(server)  | 如不嫌麻烦，可使用，不推荐 |
| `yarn watch`  | 开启监听(watch)  | 如不嫌麻烦，可使用，不推荐 |
| `yarn build ` | 编译打包，生成 `rpk`包  | 对内置 `hap build` 命令的转接 |
| `yarn release ` | 生成 `rpk`包并增加签名  | 对内置 `hap release` 命令的转接  |
| `yarn gen `  | 新增「茉莉浏览器」页面 | 助你高效生成页面，模版可自定义，推荐 ✓|
| `yarn prettier`  | 一键美化代码(js/css/less/ux)  | 实在是团队开发好帮手，推荐 ✓ |
| `yarn prettier-watch`  | 对变化代码文件格式、实时美化 | 极大提升代码编写效率，强烈推荐 ✔️|

