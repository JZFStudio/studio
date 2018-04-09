# Encryption

### 常用加密方式

* Hash 算法加密：
  创建一个 nodejs 文件 hash.js ，内容如下：
  ```
  var crypto = require('crypto');
  console.log(crypto.getHashes); //打印支持的 hash 算法
  ```
  在 nodejs 中使用需要的加密方式：
  ```
  var content = 'password'; //需要加密的明文
  var md5 = crypto.createHash('md5'); //加密的方式，上面 hash 算法的任意一种
  md5.update(content);
  var d = md5.digest('hex'); //加密后的值 d
  ```

* Hmac 算法加密：
    HMAC 是密钥相关的哈希运算消息认证码（Hash-based Message Authentication Code）,HMAC运算利用哈希算法，以一个密钥和一个消息为输入，生成一个消息摘要作为输出。HMAC可以有效防止一些类似md5的彩虹表等攻击，比如一些常见的密码直接MD5存入数据库的，可能被反向破解。

    定义 HMAC 需要一个加密用散列函数（表示为H，可以是MD5或者SHA-1）和一个密钥K。我们用B来表示数据块的字节数。（以上所提到的散列函数的分割数据块字长B=64），用L来表示散列函数的输出数据字节数（MD5中L=16,SHA-1中L=20）。鉴别密钥的长度可以是小于等于数据块字长的任何正整数值。应用程序中使用的密钥长度若是比B大，则首先用使用散列函数H作用于它，然后用H输出的L长度字符串作为在HMAC中实际使用的密钥。一般情况下，推荐的最小密钥K长度是L个字节。

 下面是 Hmac 加密(采用 sha1 方式)：（由于密钥会通过随机生成的16位数进行加密后再对明文加密，每次生成的新密钥(token)都不同,所以最后生成的密文也不会相同，这种加密不可逆，即使为md5方式，也难以通过彩虹表来攻击）

 ```
 /********hmac-sha1加密***************/
     var content = 'password';//加密的明文；
     var token1='miyue';//加密的密钥；
     var buf = crypto.randomBytes(16);
     token1 = buf.toString('hex');//密钥加密；
     console.log("生成的token(用于加密的密钥):"+token1);
     var SecrectKey=token1;//秘钥；
     var Signture = crypto.createHmac('sha1', SecrectKey);//定义加密方式
     Signture.update(content);
     var miwen=Signture.digest().toString('base64');//生成的密文后将再次作为明文再通过pbkdf2算法迭代加密；
     console.log("加密的结果f："+miwen);
 ```