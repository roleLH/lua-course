function Class(...) end
local mt = {
  __index = function(t, k) 
    print(k)
    return function(...) 
      print(...)
    end
  end
}
local system = {}
setmetatable(system, mt)

local Rect = Class

local Entity = Class(function(self) 
  self.id = 0
end)


local Plane = Class(function(self) 

end)