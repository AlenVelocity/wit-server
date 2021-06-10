import EventEmitter from 'events'
import express from 'express'
import Detector from './Detector'
import APIRouer from './Routes/api'

export default class Server extends EventEmitter {

    app = express()

    API: APIRouer

    constructor(detector: Detector, private PORT: number) {
        super()
        this.API = new APIRouer(detector)
    }

    load = async (): Promise<void> => {
        if (!this.PORT) this.PORT = 4000
        this.app.listen(this.PORT, () => this.emit('ready', this.PORT))
    }
}