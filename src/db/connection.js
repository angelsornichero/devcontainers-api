import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD, {
    host: process.env.DOCKER_MYSQL_CONTAINER,
    port: process.env.MYSQL_PORT,
    protocol: 'tcp',
    dialect: 'mysql',
    logging: false
  }
)
