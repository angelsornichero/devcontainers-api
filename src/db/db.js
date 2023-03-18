import { sequelize } from './connection.js'
import '../models/KeyModel.js'

(async () => {
  try {
    await sequelize.sync({ force: false })
    console.log('[*] Database connected ')
  } catch (e) {
    console.error(e)
  }
})()
