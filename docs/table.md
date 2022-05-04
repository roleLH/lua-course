### table
lua 中仅有的*数据结构*, 就是 **table**
```lua
local languages = {}
languages[1] = "c"
languages[2] = "cpp"
languages[3] = "java"
table.insert(languages, "lua")
table.insert(languages, 2, "javascript")
for k, v in ipairs(languages) do 
  print(k ,v);
end 
table.remove(languages)
table.remove(languages, 1)
for k, v in ipairs(languages) do 
  print(k ,v);
end 

local l = languages[2]
```
最简单的, 就是把**table**当作**数组(List)**来使用, 就像示例那样. 与其他语言不同的是,
lua中**table**当数组来使用时，第一个元素的下标是 1, 而其他语言中的数组第一个元素下标是 0.
还可以把**table**当作**映射表(Map)**来使用.
```lua
local prefab = {
  id = 12345,
  name = "wilson",
  components = {},
  events = {},
  -- ....
}
local id = prefab.id
table.insert(prefab.components, "health")
local events = prefab.events
events.say = function() print("hello world") end
events.say() -- events["say"]()
```
你可以使用形如 `tbl.xxx` 这样的形式来访表`tbl`中`xxx`键对应的值. 如果访问一个不存在的`xxx`键时, 将返回 `nil`, 当然, 你也可以对其赋值.
```lua
local anim_info = {}
anim_info.name = "run_loop"
anim_info.loop_time = 222
anim_info["is_loop"] = true
```
`tbl.xxx` 只是 `tbl["xxx"]` 的简写. 注意, 只有**字符串**形式的键才可以简写为`tbl.xxx`这种形式!
```lua
local lst = {1, 2, 3}
local fn = function(a, b) 
  return a + b
end
local map = {
  size = 36,
  [89] = "some string",
}
map[lst] = true
map[fn] = {6, 94}

for k, v in pairs(map) do 
  if type(k) == "function" then 
      print(k(v[1], v[2]))
  end
end

```
最后, table的key可以是任意的非**nil**值. 
PS: 你可以打开任意一个配置生成的config2里的lua文件, 然后尝试去读一读, 这应该是最顺手而且简单的例子. 

