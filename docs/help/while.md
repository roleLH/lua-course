### while
```lua
local count = 10
local sum = 0
while count > 0 do 
  sum = sum + count
  count = count - 1
end
print(sum)

local power_two = 1
while true do 
  power_two = power_two * 2
  if power_two > 4096 then 
    break
  end
end
```
while循环的基本格式如下:
```lua
while cond do 
  block
end
```
只要条件*cond*满足, 就会一遍又一遍执行*block*里的内容.  
或者你可以使用**break**关键字来跳出循环.   
当存在多层循环时, break只用于跳出最内层的循环.   
```lua
local x = 0
while x < 10 do 
  local y = 0
  while y < 10 do 
    if y > x then 
      break
    end
    print(x, y)
    y = y + 1
  end
  x = x + 1
end
```