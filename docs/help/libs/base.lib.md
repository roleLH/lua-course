
<a id = "help" href = "help/lib.md">index</a>  

#### base
常用
#### ipairs(t)

## `ipairs(t) -> itorFunction, t, 0`  
函数参数是一个表t  
返回三个值: 一个迭代函数, 表t自身, 0.



## `next(table [, index]) -> tableKey, tableValue`  
第一个参数是要遍历的表, 第二个参数是表中的某个键.  
返回该键的下一个键及其关联的值. 
如果用 nil 作为第二个参数调用 next, 将返回初始键及其关联值.  
当以最后一个键去调用, 或是以 nil 调用一张空表时,next 返回 nil.  
如果不提供第二个参数, 将认为它就是 nil.

Example
```lua
local tbl = {
  id = 12138;
  name = "luax";
}
next(tbl)
next(tbl, "id")
next(tbl, "name")
next({})
```
