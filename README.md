# 前端脚手架
## 项目期望达到的程度
- 支持三大框架模板（个性可配置化模板）
- 支持pc，移动端
- 配套有不同环境的组件

## 文件目录
```
    ├── bin
    │   ├── main.js     入口文件
    │   ├── template.js 模板文件集合
    │
    ├── lib
    │   ├── utils       工具处理文件夹
    │   ├── temp        模板文件
    │   ├── create.js 
    │
    ├── package.json    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
```

### package.json说明
``` js
    "bin": {
        "K": "bin/main.js"
    }

    // 当我输入K命令的时候，就会去查找bin目录下的main.js文件

    "dependencies": {
        // chalk改变输出文字的颜色
        "chalk": "^3.0.0",
        "semver": "^7.1.2",
        // commander可以解析用户输入的命令
        "commander": "^4.1.0",
        // 拉取github上的文件
        "download-git-repo": "^3.0.2"
    }
```

### bin/main.js
``` js
    /*
        使用Node开发命令行工具所执行的js脚本必须在顶部加入：#!/usr/bin/env node
    */
```
- 本地调试，使用(macOS环境)sudo cnpm link，然后输入K即可运行