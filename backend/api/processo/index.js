import express from 'express'
import {criarProcesso} from './processo.controller.js'

export const processoRota = express.Router()

processoRota.post('/', criarProcesso)