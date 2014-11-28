var Weibo = require('../../node-weibo');

var para = {
   "source": Weibo.appKey.appKey,
   "screen_name": 'CS小吃货',
   "access_token": '2.007PQfjF5BbcAD1015be62680rnSn1'
   };

console.log(para);


// Weibo.Statuses.public_timeline(para, function(data){
//    console.log(data);
// });

Weibo.Statuses.user_timeline(para, function(data){
	console.log(data);
	getWeibo(data.statuses);
});

function getWeibo(statuses){
	//console.log(statuses.length)
	for (var i = statuses.length - 1; i >= 0; i--) {
		console.log(i, statuses[i]);
	};
}