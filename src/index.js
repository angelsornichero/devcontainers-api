import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import 'dotenv/config'
import './db/db.js'
import router from './routes/routes.js'

const app = express()

// App middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// App config
app.set('port', process.env.PORT || 3000)
const PORT = app.get('port')

// App routes
app.use(router)

app.listen(PORT, () => {
  console.log('App listening on: ', PORT)
})
