### 面向对象
#### 前言
**面向对象**是一个很庞大的话题, 在网络上, 用 *面向对象* 或是 *oop* 为关键字搜索, 会有大量的信息供你参考.    
不过有很多解释的缺点就是有大量繁杂的概念和定义而缺乏实际对应的例子. 什么**抽象**, **继承**, **封装**..., 用来考试的确不错, 但是对初学者可能并不太适用.  
考虑用什么来帮助理解, 最好的方式就是用一个实际的例子, 抽丝剥茧, 一点点地解释什么是**面向对象**.  
比较遗憾的是, lua语言本身并不支持面向对象, 需要采用元表来模拟一种面向对象的方式. 不想到处去找, 这里就直接使用**饥荒**中`class.lua`的实现方式吧. 
```lua
local ClassDefine = Class(base, ctor, props)
```
这里的函数最多支持3个参数, 第一个参数是**基类**或者是一个**构造函数**, 当第一个参数是**基类**时, 第二个参数是**构造函数**, 第三个参数是属性, 这里不需要, 忽略之.
好, 有了这个定义**类**的函数, 我们便可以开始了.  



#### 参考
- [面向对象程序设计](https://baike.baidu.com/item/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/24792)  
- [oop](https://simple.wikipedia.org/wiki/Object-oriented_programming)
- [什么是面向对象](https://www.jianshu.com/p/7a5b0043b035)
- [面向对象编程的弊端是什么](https://www.zhihu.com/question/20275578)