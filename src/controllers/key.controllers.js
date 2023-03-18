import { KeyModel } from '../models/KeyModel.js'
import { v4 as uuidv4 } from 'uuid'

export const createKey = async (req, res) => {
  const { name } = req.body
  const keysfound = await KeyModel.findAll({
    where: {
      name
    }
  })

  // Case 1: key already exists
  if (keysfound.legth === 0) return res.json({ succes: 'false', message: '[!] Key already exits' }).status(400)

  // Main case

  const key = uuidv4()

  try {
    await KeyModel.create({
      name,
      key
    })
    res.json({ success: true, message: '[*] Key created succesfully', key })
  } catch {
    return res.json({ succes: false, message: '[!] Error on create the key' })
  }
}

export const getKeys = async (req, res) => {
  try {
    const keysfound = await KeyModel.findAll()
    res.json({ success: true, keys: keysfound })
  } catch {
    res.json({ succes: false, message: '[!] Error finding the keys' })
  }
}

export const deleteKey = async (req, res) => {
  const name = req.params.key
  try {
    await KeyModel.destroy({
      where: {
        name
      }
    })
    res.json({ success: true, message: '[*] Key correctly removed' })
  } catch {
    res.json({ success: false, message: '[*] Error on deleting the key' })
  }
}
