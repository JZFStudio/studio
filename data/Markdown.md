# Markdown语法学习

### 标题

Setext 形式是用底线的形式，利用 = （最高阶标题）和 - （第二阶标题）;
Atx 形式在行首插入 1 到 6 个 # ，对应到标题 1 到 6 阶。

### 区块

区块引用则使用 email 形式的（ > ）角括号。

### 强调

使用星号和下划线来标记需要强调的区段，意思等同。

### 无序

无序列表使用星号、加号和减号来做为列表的项目标记，这些符号是都可以使用的

### 有序

有序的列表则是使用一般的数字接着一个英文句点作为项目标记。

### 换行

Space + Space + Enter

### 段落

如果在项目之间插入空行，那项目的内容会用 \<p> 包起来，你也可以在一个项目内放上多个段落，只要在它前面缩排 4 个空白或 1 个 tab 。

### 链接
Markdown有两种形式的链接语法：行内和参考两种形式，两种都是使用角括号来把文字转成链接。

###### 行内形式是直接在后面用括号直接接上链接，也可以加上标题:

```
This is an [example link](http://example.com/ "With a Title").
```

###### 参考形式的链接让你可以为链接定一个名称，之后你可以在文件的其他地方定义该链接的内容:

```
I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

[1]: http://google.com/ "Google"
[2]: http://search.yahoo.com/ "Yahoo Search"
[3]: http://search.msn.com/ "MSN Search"
```

参考链接：

[Markdown 语法说明 (简体中文版)](http://www.appinn.com/markdown/)

[认识与入门 Markdown](http://sspai.com/25137/)