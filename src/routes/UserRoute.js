
import router from 'express'

const routers = router.Router()

import verifyToken from '../helpers/checkToken.js'

import userControllers from '../controllers/UserControllers.js'
const register = userControllers.register
const login = userControllers.login
const checkUser = userControllers.checkUser
const updateUser = userControllers.updateUser
const ola = userControllers.ola

routers.post('/register', register)
routers.post('/login', login)
routers.get('/checkUser', checkUser)
routers.get('/teste', ola)
routers.patch('/edit', verifyToken, updateUser)

export default routers
