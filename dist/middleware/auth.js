"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const validateToken = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.json("You need to Login");
            return res.redirect("http://localhost:3000/Login");
        }
        next();
    }
    catch (error) {
        console.log(error.message);
    }
};
exports.validateToken = validateToken;
