const express = require("express");
const router = express.Router();
const carController = require("../controller/car");

router.get("/", carController.messageCars);
router.get("/cars/", carController.getCars);
router.get("/cars/:id", carController.getCar);
router.post("/cars/", carController.addCars);
router.put("/cars/:id", carController.putCar);
router.delete("/cars/:id", carController.delCar);

module.exports = router;
