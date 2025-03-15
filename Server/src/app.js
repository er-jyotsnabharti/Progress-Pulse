// Importing neccessary Files and Folders
import express from "express";
import registeredUserRoutes from "../routes/User-routes/registeredUser.routes.js";
import nodemailer from "nodemailer";

const app = express()

// using builtin MiddleWares
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});


// Routes
// ------------
// Registered User Routes
app.use("/api/v1/users/registered", registeredUserRoutes)

// LoggedIn User Routes

export default app