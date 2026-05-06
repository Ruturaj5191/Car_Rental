const router = require("express").Router();
const adminAuthController = require("../../controllers/admin/admin.auth.controller");
const jwtUtils = require("../../utils/jwt");

// ✅ Open for now: allow creating new admins
router.post("/register", adminAuthController.register);
router.post("/login", adminAuthController.login);

module.exports = router;