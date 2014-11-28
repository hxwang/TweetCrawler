## Code 

|Name| Function|
|:----|:-------|
|[init-auth.js](./init-auth.js)| get authorization from user, output: authorization code|
|[get-token.js](./get-token.js)| get token using code from output of [init-auth.js]()|
|[getTweets.js](./getTweets.js)| get user tweets (can only get current logged-in users' tweets due to the restrction of sina API)|


### How to run
- Step 1: launch python server `python -m SimpleHTTPServer`
- Step 2: `node init-auth.js`
- Step 3: `node get-token.js`
- Step 4: `node getTweets.js`
