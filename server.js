let http = require('http');
let users = [
  {id:11,name:'data11'},
  {id:22,name:'data22'},
  {id:33,name:'data33'},
];
let server = http.createServer((req, res)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if(req.url === '/api/users') {
    res.end(JSON.stringify(users));
  } else {
    res.end('Not Found');
  }
  if(req.method.toLowerCase() === 'options') {
    res.end();
  }
});
server.listen(3000,()=>{
  console.log('server start at port 3000');
});