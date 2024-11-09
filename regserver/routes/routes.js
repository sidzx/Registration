const express=require('express')

const userController=require('../controller/usercontroller')
const multerConfig=require('../middleware/userMiddleware')

const router=express.Router()

router.post("/reg",multerConfig.single("profile"),userController.register)
router.post("/login",userController.login)
router.put("/edit/:uid",multerConfig.single('profile'),userController.edit)
router.get('/get/:id',userController.update)

module.exports=router