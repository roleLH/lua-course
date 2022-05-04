### if
```lua
if health <= 10 then 
  say(player, "help me!")
end

if is_boss(prefab) then 
  add_max_health(prefab, 50)
  add_tag(prefab, "boss")
else 
  add_tag(prefab, "not_boss")
end

if season == "summer" and need_show_boss1 then 
  show_boss1()
elseif season == "spring" and need_show_boss2 then 
  show_boss2()
end


```
**if** 语句的基本格式如下:
```lua
if cond then 
  block
end
```
只有当条件 *cond* 满足的时候, *block* 里的内容才会执行.  
当然, 也可以加一个 **else**, 表示不满足的时候执行某些其他内容.  
**elseif** 提供了一种可以连续判断的手段. 比如  
```lua
--[[
  90-100 打印A
  80-89  打印B
  70-79  打印C
  0-69   打印D
]]--
  if score >= 90 then 
    print("A")
  elseif score >= 80 then 
    print("B")
  elseif score >= 70 then
    print("C")
  else
    print("D")
  end
```

