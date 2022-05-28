**逻辑运算符**

## `not` 
`not E`  
如果not后的表达式 **E** 为真，那么 `not E` 返回 `false`；反之，  
如果not后的表达式 **E** 为假，那么 `not E` 返回 `true`

Example
```lua
not false -- true
not nil   -- true
not true  -- false
not not 1 -- true
```

## `and`
`Ea and Eb`  
如果 表达式 **Ea** 为假，那么 `Ea and Eb` 返回 `Ea`, 否则,`Ea and Eb` 返回 `Eb`

Example  
```lua
1 and 2   -- 2
nil and 3 -- nil
"" and 3  -- 3
```

## `or`
`Ea or Eb`  
如果 表达式 **Ea** 为真，那么 `Ea or Eb` 返回 `Ea`, 否则，`Ea or Eb` 返回 `Eb`

Example
```lua
1 or 2 -- 1
nil or 3 -- 3
"" or 3 -- ""
```

<details>
<summary>Tip 1</summary>
<pre>and 和 or 都遵循短路规则,也就是说，第二个表达式只在需要的时候去求值.   
比如 1 or a() 返回 1，而后面的 a() 不会执行，因为第一个表达式足以产生结果，所以第二个表达式就不再执行。</pre>
</details>
<details>
<summary>Tip 2</summary>
<pre>虽然and和or的描述有点复杂，但是其基本用法就是普通的逻辑运算：
and : 如果两个值同时为真 则返回 真， 否则返回假；
or  : 如果两个值同时为假 则返回 假， 否则返回真。</pre>
</details>
<details>
<summary>Tip 3</summary>
<pre>
1.你可以用这种方式给变量赋值：
local var = value or 0 
这样可以避免在某些情况下给var赋一个nil值
后面的0表示一个默认值，也可以是任何你想要的其他任何值
2. lcoal var = condition and Ea or Eb
这是一个三目运算符的替代，等价于
local var
if condition then
  var = Ea
else 
  var = Eb
end
</pre>
</details>