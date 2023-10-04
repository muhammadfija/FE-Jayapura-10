const express = require("express");
const PromoRouter = require("./PromoRouter/PromoRouters");
const ProgramRouter = require("./ProgramRouter/ProgramRouter");

const router = express.Router();

router.use("/", PromoRouter);
router.use("/", ProgramRouter);

module.exports = router;
