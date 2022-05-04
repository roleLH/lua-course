
#### 变量
```lua
a = 10
b = "hello"
c = false
```
一个名字就可以称作一个变量, 比如示例中的`a b c`, 就是三个变量.
你可以给变量起 `health`, 也可以给变量起 `ccm_tnnd`... 
如果不给变量赋值, 那么这个变量就是一个`nil`值.
示例中 `a = 10` 表示 给 变量`a`赋值 `10`, 
此时，你就可以将 变量`a` 当 `10` 使用
```lua
ccm_tnnd = a + 235 -- 此时 ccm_tnnd 为 245
ccm_tnnd = b       -- 此时 ccm_tnnd 为 "hello"
ccm_tnnd = c       -- 此时 ccm_tnnd 为 false
```
像上面的不加任何限定的称为 **全局变量**, 也就是说, 这个变量可以在程序的任何地方访问.
还有另外一种变量, 称作 **局部变量**. 
```lua
local health = 150
local season = "autumn"
local sum = a + 555
```
局部变量只可以在声明该变量的**作用域**中访问, 作用域外是无法访问到该变量的值的. 
```lua
local season = "autumn"
if season == "autumn" then 
  local sum = 0
  local list = {1, 2, 3, 4, 5}
  for k, v in pairs(list) do 
      sum = sum + v    --循环5次, 依次将list中的值加到sum中
  end
  print(sum) -- 15
end
print(sum) -- nil
```
示例中在`if`语句内定义了局部变量`sum`, 然后在`for`语句内使用,最后打印出该值`15`.
但是在`if`语句外访问不到该变量, 所以就打印出了`nil`.
函数也是同理, 在函数内部定义的**局部变量**在函数外部访问不到.
```lua
-- 定义一个函数, 参数只有一个list 返回值是一个数字
function sum(list) 
  local sum = 0
  for k, v in pairs(list) do 
    sum = sum + v
  end
  test = "test"
  return sum
end
print(sum)    -- nil
print(test)   -- nil
local l = {1, 2, 3, 4, 5}
local result = sum(l)
print(result) -- 15
print(test)   -- test
```
```lua
local a, b, c = 2       -- a = 2 b = nil c = nil
local a, b, c = 2, 5, 6 -- a = 2 b = 5 c = 6
local a       = 2, 5, 6 -- a = 2
```
像上面这种方式可以同时给多个变量赋值.   
如果`=`右边多于左边, 右边多余的值将会被忽略;
如果`=`左边多于右边, 左边多余的变量将会被赋空值`nil`。




