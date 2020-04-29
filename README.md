# SmartPlug_WebApp

Control the Smart Plug([HS105](https://amzn.to/3eVmjTj)) with Web Application.

## Description

<img src="https://user-images.githubusercontent.com/13119897/80563892-602ad980-8a27-11ea-8f93-95e7d11d685e.jpg" with="500" >

## Demo

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">スマートプラグをごにょごにょして web アプリでも on/off してみた <a href="https://t.co/1vrYpZBmya">pic.twitter.com/1vrYpZBmya</a></p>&mdash; みやかわ (@momijinn_aka) <a href="https://twitter.com/momijinn_aka/status/1254293989252935680?ref_src=twsrc%5Etfw">April 26, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Usage

<span style="color: red; "> ※ Before start a Web App, Connect a Smart Plug([HS105](https://amzn.to/3eVmjTj)) to Network and Set the [IFTTT](https://ifttt.com).  
(c.f.) https://www.autumn-color.com/?p=2420
</span>  

1. Rewrite WebHooks API in the config.js to your WebHooks API.
```JavaScript
const config = {
  API: "YOUR_WEBHOOKS_API" // Please rewrite.
}

module.exports = config;
```
2. Rewrite two post url(on/off) in webpack.config.js.
```JavaScript
proxy: {
  "/plug_on": {
    target: 'https://maker.ifttt.com/trigger/smartPlug_ON/with/key/' + config.API, // Please rewrite {smartPlug_ON}
    pathRewrite: { '^/plug_on': '' },
    secure: false,
    changeOrigin: true
  },
  "/plug_off": {
    target: 'https://maker.ifttt.com/trigger/smartPlug_OFF/with/key/' + config.API, // Please rewrite {smartPlug_OFF}
    pathRewrite: { '^/plug_off': '' },
    secure: false,
    changeOrigin: true
  },
```

3. yarn install
4. yarn start
<img src="https://user-images.githubusercontent.com/13119897/80578658-c7ef1d80-8a43-11ea-877b-6167f1f4dc94.png" with="500" >