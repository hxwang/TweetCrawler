## Develop Procedure


### Develop environment
- [sublime Text](http://www.sublimetext.com/)

### Environment set-up
1. install [nodejs](http://nodejs.org/download/)
  - you may come across the error "nodejs/windows Error: ENOENT, stat 'C:\Users\RT\AppData\Roaming\npm'", see [solution](http://stackoverflow.com/questions/25093276/nodejs-windows-error-enoent-stat-c-users-rt-appdata-roaming-npm)

2. install [nodeweibo](https://www.npmjs.org/package/nodeweibo) package
  - `npm install nodeweibo`

3. launch python server in local machine
  - `python -m SimpleHTTPServer`

### Authorization
- Create Weibo APP to get appkey and appsecret
  - apply for app, [guidance](http://open.weibo.com/wiki/%E6%96%B0%E6%89%8B%E6%8C%87%E5%8D%97)
  - remember to setup the authorization call-back, i.e., 应用信息>高级信息>授权回调页
- Change `node-weibo/lib/config/setting.json`
  - modify the "appKey","appSecret","redirectUrl", here redirectUrl means 授权回调页
  - 
 
