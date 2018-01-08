var OscClientClass = require('osc-client').OscClient;
 
var domain = '169.254.152.63';
var port = '7001';
var client = new OscClientClass(domain, port);
var sessionId;
 
client.startSession().then(function(res){
    sessionId = res.body.results.sessionId;
    return client.takePicture(sessionId);
})
.then(function (res) {
    var pictureUri = res.body.results.fileUri;
    return client.getImage(pictureUri);
})
.then(function(res){
    var imgData = res.body; //<Buffer ff d8 ff ...> 
    return client.closeSession(sessionId);
})
.catch(console.error)
