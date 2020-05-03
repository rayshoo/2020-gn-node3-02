const express = require('express')
const app = express();
const path = require('path')

/* 서버구동 */
app.listen(3000, ()=>{
    console.log('http://127.0.0.1:3000');
})

/* View Engine 세팅 */
app.set('views', path.join(__dirname, '/views')); // prefix
app.set('view engine', 'pug'); //suffix
app.locals.pretty = true; // pug 에서만 가능 > 페이지 소스 이쁘게

/* 미들웨어 */
app.use(express.json());
app.use(express.urlencoded({extended:false}));

/* 라우터 */
app.use('/', express.static(path.join(__dirname, './public')));
app.use('/uploads', express.static(path.join(__dirname, './storages'))); // 정적폴더 > 보안을 위해 실제 경로와 다르게 설정

const navis = [
  {id : 1, title : 'About', link:'/about'},
  {id : 2, title : 'Board', link:'/board'},
  {id : 3, title : 'Gallery', link:'/gallery'}
];
app.get('/', (req, res, next)=>{
    
    const title = 'index.html';
    const headTitle = 'PUG 페이지';
    res.render('index', {navis, title, headTitle}); //ES6 문법으로 이름 같아서 자동으로 map처럼 전달됨 {user : user, title : title, ...}
});
app.get('/about', (req, res, next)=>{
    
    const title = 'about.html';
    const headTitle = 'PUG 페이지';
    res.render('about', {navis, title, headTitle}); //ES6 문법으로 이름 같아서 자동으로 map처럼 전달됨 {user : user, title : title, ...}
});
app.get('/board', (req, res, next)=>{
    
    const title = 'board.html';
    const headTitle = 'PUG 페이지';
    res.render('board', {navis, title, headTitle}); //ES6 문법으로 이름 같아서 자동으로 map처럼 전달됨 {user : user, title : title, ...}
});
app.get('/gallery', (req, res, next)=>{
    
    const title = 'gallery.html';
    const headTitle = 'PUG 페이지';
    res.render('gallery', {navis, title, headTitle}); //ES6 문법으로 이름 같아서 자동으로 map처럼 전달됨 {user : user, title : title, ...}
});
