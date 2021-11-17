### npm账户
登录
`npm login`

npm登录时用国内源
`npm login --registry https://registry.npmjs.org`

账户信息：
username:`hzp201314`
password:`a92646089`
E-mail:`nicolascaesarhan@gmail.com`

发布
`npm publish`

### 镜像仓库操作
显示当前的镜像网址:
```bash
npm get registry
```

更换淘宝的镜像网址：
```bash
npm config set registry http://registry.npm.taobao.org
```

更换默认镜像网址：
```bash
npm config set registry https://registry.npmjs.org
```

使用cnpm
```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### 初始化项目

```bash
mkdir hzp-cli-dev
cd hzp-cli-dev
npm init -y
```



### 全局安装

全局安装库
```bash
npm i -g xxx
```
移除全局库
```bash
npm remove -g xxxx
```
### 项目安装
项目安装依赖库
```bash
npm i -S xxx
```
项目安装所有库
```bash
npm i
```
项目移除库
```bash
npm remove -S xxxx
```

### 链接与取消链接
链接本地脚手架：
```bash
cd your-cli-dir
npm link
```
取消链接
```bash
npm unlink xxx
```


### 脚手架链接本地库文件
```bash
# 首先链接本地库文件
cd your-lib-dir
npm link
# 然后在要使用的项目连接本地库文件
cd your-cli-dir
npm link your-xxx-lib
```

### 取消链接本地库文件
```bash
cd your-lib-dir
npm unlink
cd your-cli-dir
npm unlink your-xxx-lib
```

### 链接远程库
1.单个安装
```bash
npm i -S xxx
```
2.多个安装
2.1配置项目中的package.json文件，手动添加依赖
```bash
"dependencies": {
    "hzp-test-lib": "^1.0.0"
  }
```
2.2然后安装远程库 

```bash
npm i
```
注意：如果切换本地和远程库文件晕头转向了，可以直接删除node_modules文件夹`rm -rf node_modules`，然后`npm install` 远程库。

![image-20211117145120049](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211117145120049.png)


# lerna 
## 简介

![image-20211117162412517](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211117162412517.png)

![image-20211117162501940](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211117162501940.png)

![image-20211117162534981](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211117162534981.png)

![image-20211117162656191](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211117162656191.png)

![image-20211117162724114](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211117162724114.png)

![image-20211117162824817](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211117162824817.png)

![image-20211117162855144](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211117162855144.png)

![image-20211117162916114](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211117162916114.png)

# 搭建自己的脚手架

### 新建项目

```bash
mkdir hzp-cli-dev
cd hzp-cli-dev
mkdir hzp-cli-dev
cd hzp-cli-dev
npm init -y
```



### 安装lerna

`cnpm i -D lerna`

`cnpm i -g lerna`





## 源码分析
