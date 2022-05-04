### table
常用
#### table.insert(list, [pos], value)
在 list 的位置 pos 处插入元素 value, pos 的默认值为 数组最后一个位置.
```lua
local tbl = {}
table.insert(tbl, "a") -- {"a"}
table.insert(tbl, "b", 1) -- {"b", "a"}
table.insert(tbl, "c") -- {"b", "a", "c"}
```
#### table.remove(list, [pos])
移除 list 中 pos 位置上的元素, 并返回这个被移除的值. 如果不加pos参数, 默认移除 list 最后一个元素
```lua
local tbl = {1, 2, 3, 4, 5, 6}
table.remove(tbl) -- {1, 2, 3, 4, 5}
table.remove(tbl, 1) -- {2, 3, 4, 5}
```
#### table.sort(list, [comp])
对 list 排序, 如果没有提供 comp 函数, 将对 list 进行升序排序.
```lua
local tbl = {3, 8, 4, 5, 2}
table.sort(tbl) -- tbl = {2, 3, 4, 5, 8}
local _comp = function(a, b) 
  return a > b
end
table.sort(tbl, _comp) -- tbl = {8, 5, 4, 3, 2}
```
不常用
#### table.concat(list, [sep], [start], [end])
提供一个列表(数组), 其所有元素都是字符串或数字, 返回字符串 list[i]..sep..list[i+1] ··· sep..list[j]. sep 的默认值是空串, start 的默认值是 1, end 的默认值是 #list, 如果 start 比 end 大，返回空串.
```lua
table.concat({1,"op","_ty"}) -- 1op_ty
table.concat({1,2,3}, "w") -- 1w2w3
table.concat({1,2,3,4,5}, "w", 2) -- 2w3w4w5
table.concat({1,2,3,4,5}, "w", 2, 4) -- 2w3w4
```
#### table.pack (···)
返回所有参数构成的table, 并设置域"n" 为 参数个数. 注意, 此时table不一定是个数组, 需要按照普通table来处理
```lua
local ret = table.pack(1, 3, 5, 7, 9) -- ret = {1, 3, 5, 7, 9, "n" = 5}
ret = table.pack(1, nil, 5, nil, 9) -- ret = {[1] = 1, [3] = 5, [5] = 9, "n" = 5}
```
#### table.unpack (list, [start], [end])
返回 list 中 start 至 end 的元素. start 默认1 end 默认 #list
```lua
local a, b, c = table.unpack({1, 2, 3}) -- a = 1 b = 2 c = 3
```
#### table.move (list1, f, e, t, [list2]) 
将list1中[f,e]中的元素拷贝至list2 t 开始的位置. list2 默认是list1
```lua
-- list1 = {1, 2, 3, 4, 5, 6}
--            [f     e]
--                          t
--- list2 = {7, 8, 1, 2, 4, 2, 3, 4 }
list1 = {1, 2, 3, 4, 5, 6}
list2 = {7, 8, 1, 2, 4}
table.move(list1, 2, 4, 6, list2) -- {7, 8, 1, 2, 4, 2, 3, 4 }
```