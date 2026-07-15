import express from 'express'
import { criarItem } from './item.controller.js'

const itemRota = express.Router()

itemRota.post('/', criarItem)

export { itemRota }