import { sequelize } from './connection.js'

(async () => {
  try {
    await sequelize.sync({ force: false })
    console.log('[*] Database connected ')
  } catch (e) {
    console.error(e)
  }
})()
