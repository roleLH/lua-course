### function
```lua
local test_fn = function() 
  print("test")
end
test_fn()

local say = function(msg) 
  print(msg)
end
say("hello world")

local add = function(a, b) 
  return a + b
end
add(1, 2)

local return_two_val = function() 
  return 1, 3
end
local a, b = return_two_val()

```
就像示例那样, 一个函数的定义由一个关键字`function`开始, 一个关键字`end`结束.
`( )` 括号中的称为参数列表, 参数列表都是该函数中的局部变量, 你可以根据需要定义任意多个你想要的参数.
函数可以在任何地方使用`return`退出, `return`后面的表达式或者值称为该函数的`返回值`.   
想要调用某个函数时, 使用`函数名(参数表)`这种方式调用: `test_fn()`, `add(1, 2)`, `return_two_val()`等等   
```lua
local fib = nil
fib = function(num) 
  if num <= 0 then return 1 end
  if num == 1 then return 1 end
  return fib(num - 1) + fib(num - 2)
end
fib(10)
```
像上面函数直接或者间接自己调用自己, 这样的方式称为`递归`. `递归`是诸多编程技巧中的其中一种.   
这里不详述, 感兴趣的可以看一下参考链接.
```lua
local function test_fn() 
  print("test_fn")
end
```
你也可以使用上述方式定义函数, 它仅仅是开头示例中的一种简写方式.  
当然, 所有上述函数全部都是局部函数(参考局部变量), 去掉`local`关键字就是全局函数.

### 参考
[全面理解递归](https://zhuanlan.zhihu.com/p/150562212)
[如何写递归](https://leetcode-cn.com/circle/article/koSrVI/)