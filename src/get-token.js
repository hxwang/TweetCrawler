var Weibo = require('../../node-weibo');



/*
+--------------------------------------------------
例2：需要获取access_token
(1)阅读微博开放平台API
   如：http://open.weibo.com/wiki/OAuth2/access_token，
   将必要的参数写进jsonParas对象。
(2)在回调中打印出获取的数据
(3)code是您浏览器窗口获得的code。
(4)注意：如运行本例子，请注释掉第1个例子，且code职能调用一次，
		会随着认证不断更新。一个用户一个access_token。
+---------------------------------------------------
*/


var jsonParas = {
	code:"501c5831fe12ddcb92f90f99b4490966",
	grant_type:"authorization_code"
};

Weibo.OAuth2.access_token(jsonParas,function(data){
	console.log(data);
});


/*
{ access_token: '2.007PQfjF5BbcAD1015be62680rnSn1',
  remind_in: '161405',
  expires_in: 161405,
  uid: '5255433188' }
  */

  