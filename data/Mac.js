export default `# Mac 使用中问题

### git 中出现 'permission to user_A denied to user_B

解决方案：

* [第一种](http://stackoverflow.com/questions/5335197/gits-famous-error-permission-to-git-denied-to-user)：
        打开 'Keychain Access.app' (可通过Spotlight或LaunchPad中进入)；
        在类别中选择'所有项目'；
        搜索 'git'；
        删除异常项目后再次尝试推送


* [第二种](http://www.jianshu.com/p/12badb7e6c10)：
        新建一个公钥，通过配置 config 文件用于不同项目

* 第三种：弄一台新电脑，通过该电脑连接项目库

### 外接存储设备时里面的文件灰色不能进行操作

[解决方案](http://www.jianshu.com/p/3782d73cb3e8)：

在当前目录下通过终端输入

> xattr -c \\*.\\*

第一个是文件名，第二个 \\* 可以是某一个类型的后缀名

### 顶部快捷键和 F + 数字键功能切换

设置 - 键盘 - 键盘 - 勾选（将 F1、F2等键以使用印在各个按键上的特殊功能）

### caps lock 键不能锁定大写

设置 - 键盘 - 输入法 - 勾选（使用大写锁定键切换"ABC"输入模式）

### 设置右键文件夹出现新建位于文件夹位置的终端窗口

设置 - 键盘 - 快捷键 - 服务 - 勾选（新建位于文件夹位置的终端窗口）

### 最简单的翻墙方式

自动代理配置 url为： https://raw.githubusercontent.com/bannedbook/fanqiang/master/ios/ios.pac

### 查看IP地址

* 在终端中输入 ifconfig 查看

* 设置 - 网络 - 高级 - 　TCP/IP

### Mac 访问windows共享文件夹

* 打开 finder，然后 command + K 打开连接服务器对话框，服务器地址：smb:// + IP地址，后续可能需要输入用户名及密码来登录进去

* 以后可以通过网络窗口找到之前添加过的windows资源，然后用组合键 shift + command + K 打开该窗口即可。

### Mac 上建立并使用 mongodb 数据库

1. 去官网下载[压缩包](https://www.mongodb.com/download-center?jmp=nav#community)
2. 将下载好的压缩包解压（位置随意）
3. 创建存放数据的文件夹（位置随意）并设置权限，也可以在终端中输入命令来实现：

    > sudo mkdir -p /data/db (存放数据的目录，可随意设置)
      sudo chown -R username /data
4. 在终端中进入到第二步解压好的文件夹的 bin 目录下，输入:

    > ./mongod --dbpath 数据存放路径

    > 注意：在windows下，破解版 MongoVUE 1.6.9 不能正常显示3.2及以上版本 mongodb 数据库的 collection，这是因为3.2版本之后默认引擎启动的是 wiredTiger 引擎，此时需要重启 MongoDB 服务器，用到的命令是：mongod -storageEngine mmapv1 -dbpath 数据存储路径，这样在用 MongoVUE 连接数据库即可

    如果看到 waiting for connections on port 27017 时，可以打开浏览器输入： localhost:27017，如果看到 It looks like you are trying to access MongoDB over HTTP on the native driver port 说明连接成功
5. 新建一个终端并进入到 bin 目录下，输入 ./mongo 即可连接到数据库进行操作
6. mongodb 数据库的基本操作
    * show dbs -- 查询所有的数据库
    * show collections -- 查询当前数据库下的所有数据表
    * use myDbs -- 建立一个名为 myDbs 的数据库，当这个库存在时则是切换到这个数据库中
    * db.dropDatabase() -- 删除当前所在的数据库
    * db.myDbs.insert／create(data) -- 新增数据
    * db.myDbs.update(查找条件，替换的数据) -- 更新数据
    * db.myDbs.remove(data) -- 删除数据
    * db.myDbs.find(查找条件) -- 查询数据，条件可不填
    * db.myDbs.find().sort(排序条件) -- 根据条件进行查找并排序
    * db.myDbs.find().count() -- 限制查找的条件
    [其余命令](http://www.cnblogs.com/liyonghui/p/mongodb.html)

### Mac 显示隐藏文件

早期的OS X（10.6~10.8）系统可以使用如下两条命令来开始或者关闭系统隐藏文件的显示：
  
\`\`\`
defaults write com.apple.Finder AppleShowAllFiles Yes && killall Finder //显示隐藏文件
defaults write com.apple.Finder AppleShowAllFiles No && killall Finder //不显示隐藏文件
\`\`\`
  
当升级到OS X 10.9 Mavericks版本之后，这两条命令需要做一些修改，变成了如下命令：
  
\`\`\`
defaults write com.apple.finder AppleShowAllFiles Yes && killall Finder //显示隐藏文件
defaults write com.apple.finder AppleShowAllFiles No && killall Finder //不显示隐藏文件
\`\`\`
  
> OS X 10.9 Mavericks需要将Finder修改成“finder”才行，第一个字母换成小写的“f”
    
### 通过终端发送 get／post 请求

* get : 

    > curl url + 末尾可以加上传递的参数
 
* post : 

    > curl -d 传递的参数 url    
    
* post ( json ):

    > curl -l -H "Content-type:application/json" -X POST -d 'json数据' url
    
  
    

`