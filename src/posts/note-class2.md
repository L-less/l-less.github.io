---
title: 笔记-class2
author: l-less
tag: 
  - note
  - css
  - html
category: 
  - note
icon: pen-to-square
---
元素选择器 \
1.类选择器
```css
<head>
<sytle>
   .test{
      ...
   }
</style>
</head>
<p class="test">Test</p>
```
2.id选择器
```css
<head>
<sytle>
   #test{
      ...
   }
</style>
</head>
<p id="test">Test</p>
```
3.标签选择器
```css
<head>
<sytle>
   p{
      ...
   }
</style>
</head>
<p>Test</p>
```
css语法：\
`display:inline`\
> 转换为行内元素

`display:block`\
> 转换为块级元素

```css
width:200px
height:200px
```
> 设置宽高
```css
background-color:blue
```
> 设置背景色

css定位：\
设置positions属性\
静态定位：static（position默认值）\
相对位置：relative\
绝对位置：absolute\
固定位置：fixed
