const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const smartphoneControllers = require("./controllers/smartphoneControllers");
const brandControllers = require("./controllers/brandController");
const storageControllers = require("./controllers/storageController");
const ramControllers = require("./controllers/ramController");
const modelControllers = require("./controllers/modelController");
const verifyPassword = require("./middlewares/verifyPassword");

router.get("/users", userControllers.getAllUsers);
router.get("/users/:id", userControllers.getUserById);
router.post("login/", verifyPassword);

router.get("/smartphones", smartphoneControllers.getAllSmartphones);
router.get("/smartphones/brands", smartphoneControllers.getSmartphonesbyBrand);
router.get("/smartphones/models", smartphoneControllers.getSmartphonesbyModel);

router.get("/brands", brandControllers.getAllBrands);

router.get("/storages", storageControllers.getAllStorages);

router.get("/rams", ramControllers.getAllRams);

router.get("/models", modelControllers.getAllModels);

router.get("/models/:brandId", modelControllers.getAllByBrand);

module.exports = router;
