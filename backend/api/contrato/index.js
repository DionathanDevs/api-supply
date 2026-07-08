import express from 'express'
import { contratoControllerCreate } from './contrato.controller.js'

export const contratoRota = express.Router()

contratoRota.post('/', contratoControllerCreate)


