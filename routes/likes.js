var graph = require('fbgraph');
var arr = [];
exports.view = function(req, res){
  
  graph.get('/me/likes', function(err, data) {
  	console.log(data.data);
    for(var i = 0; i < data.data.length; i++){
      var page = data.data[i];
      arr.push({"category": page.category,
  				"name": page.name});
    }
   console.log(arr);
   res.render('pics', {likes: arr});
  });
    
};