import { app } from './index.js'
import { contratoRota } from './api/contrato/index.js'


const port = 8080;

app.listen(port, () => {
    console.log('Server rodando')
})

app.use('/api/contrato', contratoRota)