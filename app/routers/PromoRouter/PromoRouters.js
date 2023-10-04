const express = require("express");
const router = express.Router();

const { getPromo, getPromoById, savePromo, updatePromo, deletePromo } = require("../../controller/PromoController");

router.get("/Promo", getPromo);
router.get("/Promo/:id", getPromoById);
router.post("/Promo", savePromo);
router.patch("/Promo/:id", updatePromo);
router.delete("/Promo/:id", deletePromo);

module.exports = router;
