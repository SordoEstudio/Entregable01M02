import {Router} from 'express'
const router = Router()
import {login, logout, visit, infoSession,register} from '../controllers/userController.js'
import {validateLogin} from '../middlewares/validateLogin.js'

router.post('/login', login)

router.post('/register', register)
router.get('/info',validateLogin,infoSession)
router.get('/secretEndpoint', validateLogin, visit )
router.get('/logout', logout)

export default router