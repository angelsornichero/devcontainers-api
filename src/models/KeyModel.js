import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'

export const KeyModel = sequelize.define('key', {
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  key: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
