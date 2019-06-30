import 'babel-polyfill'
import express, { Router, Request, Response } from 'express'

import router from './routers' 

class App {
  public app: express.Application

  constructor() {
    this.app = express()
    this.mountRoutes()
 }
  
  private configure(): void {

  }

  private mountRoutes(): void {
    this.app.use(router)
  }
}

export default new App().app