# multi-terminal-multi-page

## 多端多页面应用
多端多页面应用，遵循一个端多个页面原则创建文件，创建文件的规则写在配置文件夹 config 里。
* 在 config/fileName 文件新增端和文件名；
* 在 config/create 文件夹下新增端文件；
* 在根目录创建进程文件，规定当前进程对象(eg:.env.gov .env.govDev)；
* 在 package.json 文件创建 script 脚本命令，包括启动命令和打包命令 (eg:”vue-cli-service serve –open –mode govDev)；
* 在 config/template 创建模板文件；
* 运行 npm run new gov 创建某个端的多页面文件；

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run govDev // 政务端运行
npm run entDev // 企业端运行
npm run h5Dev // 移动端运行
```

### Compiles and minifies for production
```
npm run gov // 政务端打包
npm run ent // 企业端打包
npm run h5 // 移动端打包
npm run all // 全部打包
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
