import { Router } from "express"
import battleSchema from "../schemas/battleSchema";
import  validateSchema  from "../middlewares/validateSchema"
import { getRanking } from "../controllers/rankingController";

const clientsRouter = Router();

clientsRouter.post("/ranking", validateSchema(battleSchema), getRanking);


export default clientsRouter;