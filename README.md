# 云崽日漫人物识别

## 简介
云崽(Yunzai-Bot)的日漫人物识别插件,提供简单的日漫(动漫)的人物识别和galgame游戏角色识别。
<br>
<br>
如果您在使用过程中有更好的建议，或者是功能反馈可添加以下群聊(也可能会发布奇妙の插件哦~)
```
1061385377
```

### 爱发电
如果你喜欢这个项目, 请不妨点个 Star🌟, 这是对开发者最大的动力, 当然, 你可以对我们进行爱发电赞助~
<br>
注：发电只作用作者创作，与网站和项目无关，请慎重赞助。

* [书辞千楪](https://afdian.net/a/0906-12)  [微信](https://img1.imgtp.com/2023/02/16/MdDza14P.png)&[支付宝](https://img1.imgtp.com/2023/02/16/luH0pKxj.jpg)

## 食用方法
### #日漫识别
![](5501.jpg)


### #游戏识别
![](5502.jpg)


## 当前问题
![](5503.jpg)

此问题由于开发者懒所导致的
<br>
1.没有与指令一起发送图片，将不会回复
<br>
2.所发送的图片并没有识别到人脸，将不会回复
<br>
3.以上问题开发者将在以后版本进行修复

## 注意事项
1.本识别并不是万能的，可能会识别错误
<br>
2.提供的识别图片尽量提供人物正脸
<br>
3.galgame识别暂不支持R18内容识别

## 安装教程

### 第一步
本插件需要axios的支持，如果您已安装axios可跳过本步骤，如果您未安装，请执行一下指令安装axios。
<br>
pnpm可能会掉依赖，希望你不要中奖
``` 
pnpm add axios form-data -w
```
npm可能连不上
```
npm install axios form-data
```
cnpm需要提前安装(指令已经在下面了可以直接复制一键执行)
```
pnpm install -g cnpm -registry=https://registry.npm.taobao.org
cnpm install axios form-data
```
### 第二步

```
下载压缩包解压将js放到Yunzai-Bot\plugins\example重启即可
```

## 特别鸣谢
1.[AnimeTrace](https://ai.animedb.cn/)网站提供的人物识别功能
<br>
2.[@地球生物](https://gitee.com/jiang-zhitao-1)提供的开发