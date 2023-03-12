import express from 'express'
import 'dotenv/config'

const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(process.env.PORT || 5000, () => {
  console.log('App listening on: ', process.env.PORT || 3000)
})
