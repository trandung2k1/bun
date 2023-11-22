import { Express } from "express"
import router from "./router"
const routes = (app: Express) => {
    app.use("/api", router)
}

export default routes