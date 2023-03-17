import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import 'dotenv/config'
import './db/db.js'

const app = express()

// App middlewares
app.use(cors)
app.use(morgan('dev'))

// App config
app.set('port', process.env.PORT || 3000)
const PORT = app.get('port')

app.listen(PORT, () => {
  console.log('App listening on: ', PORT)
})
