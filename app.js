import express from 'express';
const app = express();
const port = process.env.PORT || 3001;
import web from './routes/web.js';
// app.use('/', web);

//Database connection
import connectdb from './db/connectdb';
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017';
connectdb(DATABASE_URL);

//static file
import {join} from 'path';

app.use('/student', web);
app.use('/',express.static(join(process.cwd(), 'public')));
app.use('/student',express.static(join(process.cwd(), 'public')));
app.use('/student/edit',express.static(join(process.cwd(), 'public')));

//Loading middleware(urlencoded) which is used to parse incomming requests
// app.use(express.urlencoded({ extended: false} ));

//Setting up engine
app.set('view engine', 'ejs');


app.listen(port, ()=>{
    console.log("Listening to port",port);
})


import cookieParser from 'cookie-parser';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
});
