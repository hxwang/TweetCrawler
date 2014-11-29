//get configured weibo API,
//note in weiboapi.js, the appkey is configured
var Weibo = require('./weiboapi.js');



//request parameters: 
//note: see sina API for the meaning of the parameters http://open.weibo.com/wiki/%E5%BE%AE%E5%8D%9AAPI
var para = {
   "source": Weibo.appKey.appKey,
   "screen_name": 'CS小吃货',
   "access_token": '2.007PQfjF5BbcAD1015be62680rnSn1'
   };

console.log(para);



//get user weibo
//para: parameters
//function(data){}: call back function
Weibo.Statuses.user_timeline(para, function(data){
	console.log(data);
	getWeibo(data.statuses);
});

//output tweets
function getWeibo(statuses){
	//console.log(statuses.length)
	for (var i = statuses.length - 1; i >= 0; i--) {
		console.log(i, statuses[i]);
	};
}