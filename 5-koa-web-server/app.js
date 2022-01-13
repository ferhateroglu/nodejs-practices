const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  if(ctx.url === '/'){
    ctx.body = '<h1>index page</h1>';
  }else if(ctx.url === '/about'){
    ctx.body = '<h1>about page</h1>';
  }else if(ctx.url === '/conctact'){
    ctx.body = '<h1>conctact page</h1>';
  }else{
    ctx.body = '<h1>404 page not found</h1>';
  }
});

app.listen(3000);