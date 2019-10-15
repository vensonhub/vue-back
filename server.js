let http = require('http');
let users = [
  {id:1,name:'data12'},
  {id:2,name:'data23'},
  {id:3,name:'data34'},
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