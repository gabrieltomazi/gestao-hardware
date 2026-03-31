import { HardwareController } from "../controllers/HardwareController.js"
import { Router } from "express"

const routes = Router()


routes.get('/', HardwareController.list)
routes.post('/', HardwareController.create)
routes.put('/:id', HardwareController.update)
routes.delete('/:id', HardwareController.delete)


export default routes