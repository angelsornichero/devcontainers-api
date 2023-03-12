import express from 'express'
import 'dotenv/config'

const app = express()

app.listen(process.env.PORT || 5000, () => {
  console.log('App listening on: ', process.env.PORT || 3000)
})
