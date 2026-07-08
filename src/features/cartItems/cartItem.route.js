import  express from 'express'
import cartItemcontroller from './cartItems.controller.js'


const router = express.Router();

const cartController = new cartItemcontroller();

router.post('/',cartController.add)
router.get('/',cartController.get)

export default router;