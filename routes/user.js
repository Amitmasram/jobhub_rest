const router = require("express").Router();
const userController = require("../controllers/userController");
const { verifyAndAuthorization, verifyToken, verifyAndAdmin } = require("../middleware/verifyToken");


// Update User 
router.put("/", verifyAndAuthorization, userController.updateUser);


// DELETE USER
router.delete("/", verifyAndAuthorization, userController.deleteUser);


// GET USER
router.get("/", verifyAndAuthorization, userController.getUser);


// GET  AllUSER
router.get("/", verifyAndAdmin, userController.getAllUser);






module.exports = router