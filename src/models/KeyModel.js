import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection'

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
