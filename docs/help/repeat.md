### repeat
```lua
local sum = 0
local i = 0
repeat 
  sum = sum + i
  i = i + 1
until(i > 20)
```
不要用这种形式的循环, 因为根本用不到!
这种形式的循环完全可以用`while`代替.