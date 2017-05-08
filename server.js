const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || process.argv[2] || 3000

let app = express()


app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.listen(PORT, () => { console.log('CHOO CHOO! SHITS RUNNIN ON PORT', PORT) })

// ROUTES

const indexRoute = require('./routes/index');
const imageRoute = require('./routes/image')
// const searchRoute = require('./routes/search')
// const authRouter = require('./routes/auth');
// const usersRouter = require('./routes/users');

app.use('/', indexRoute);
app.use('/image', imageRoute)
// app.use('/auth', authRouter);
// app.use('/users', usersRouter);
// app.use('/search', searchRoute)
