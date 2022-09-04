const express = require("express");
const userController = require("../../controllers/user.controller");

const router = express.Router();

router.route("/all").get(userController.getAllUser);
router.route("/random").get(userController.getRandomUser);
router.route("/save").post(userController.saveAUser);
router.route("/bulkUpdate").put(userController.multipleUpdate);

router
  .route("/:id")
  .put(userController.updateAUser)
  .delete(userController.deleteAUser);

module.exports = router;
