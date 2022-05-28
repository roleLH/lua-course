### for
```lua
local sum = 0
for i = 1, 20, 1 do 
  sum = sum + i
end

sum = 0
for i = 1, 20, 3 do 
  sum = sum + i
end

sum = 0
for i = 1, 20 do 
  sum = sum + i
end
```
一般形式的`for`循环就像上述示例那样, 
`i`从第一个值开始, 每次增加第三个值, 如果超过第二个值便结束循环.
如果省略第三个值, 那么每次增加1.
```lua
local attributes = {
  health = 100,
  sanity = 100,
  hunger = 100,
}
for key, value in pairs(attributes) do 
  print(key, value)
end

local list = {1, 3, 5, 7, 9}
for idx, value in ipairs(list) do 
  print(idx, value)
end
```
当你需要遍历一个`table`时, 固定用法就像示例这样
```lua
for k, v in pairs(your_table) do  
  -- do something
end
```
其中 `k` 为`table`中的一个键, `v`表示该键所对应的值.
或者当你需要按照顺序遍历一个数组形式的`table`时, 
```lua
for idx, value in ipairs(your_list) do 
  -- do something
end
```
`pairs`可以遍历所有的`table`, 只是无法保证遍历的顺序,   
`ipairs`只能用来遍历数组形式的`table`, 是可以保证顺序的.
