import { Router } from "express"
import battleSchema from "../schemas/battleSchema";
import  validateSchema  from "../middlewares/validateSchema"
import { postBattle } from "../controllers/battleController";

const clientsRouter = Router();

clientsRouter.post("/battle", validateSchema(battleSchema), postBattle);


export default clientsRouter;