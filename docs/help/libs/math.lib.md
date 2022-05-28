<a id = "help" href = "help/lib.md">index</a>  


### math
常用
#### math.abs(x) 返回x的绝对值
#### math.ceil(x) 返回不小于x的最小整数
#### math.floor(x) 返回不大于x的最大整数
#### math.max(x, ...) 返回参数中最大的值
#### math.min(x, ...) 返回参数中最小的值
#### math.random([m], [n])
```lua
local r = math.random() -- r 属于 [0 ,1) 浮点数
r = math.random(1, 10) -- r 属于 [1, 10] 整数
r = math.random(10) -- 等价于 math.random(1, 10)
```
#### math.randomseed(x) 把x设置为随机数的种子.
关于[随机数种子](https://www.jianshu.com/p/df1c6d3c153a)
不太常用
#### math.sin(x) 正弦值 (x弧度表示 下同)
#### math.cos(x) 余弦值
#### math.tan(x) 正切值
#### math.acos(x) 反余弦值 
#### math.asin(x) 反正弦值
#### math.atan(y, [x]) 反正切值
#### math.deg(x) 将角 x 从弧度转换为角度
#### math.rad(x) 将角 x 从角度转换为弧度
#### math.exp(x) 返回 e^x (e自然对数)
#### math.log(x, [base]) 
返回以指定底的 x 的对数。 默认的 base 是 e (因此此函数返回 x 的自然对数）
#### math.sqrt(x) 返回x的平方根
几个常量
#### math.pi 3.1415926
#### math.maxinteger 最大值的整数
#### math.mininteger 最小值的整数

完全没用过
有几个完全没用过, 忽略之. 感兴趣可以参考[math](https://www.runoob.com/manual/lua53doc/manual.html#6.7)