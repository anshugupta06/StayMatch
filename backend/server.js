const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const User = require("./models/User");
const Feedback = require("./models/feedback");

const app = express();

/* --------- CORS --------- */
app.use(cors());

/* --------- BODY PARSER --------- */
app.use(express.json());

/* --------- DATABASE --------- */
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

/* --------- ROUTES --------- */

// Auth routes (already present)
app.use("/api/auth", require("./routes/authRoutes"));

/* --------- NEW: USERS API (FOR MATCHING) --------- */
app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find();

        // send only needed fields
        const formatted = users.map(u => ({
            name: u.name,
            sleep: u.preferences.sleep,
            clean: u.preferences.clean,
            noise: u.preferences.noise,
            study: u.preferences.study,
            social: u.preferences.social,
            smoking: u.preferences.smoking,
            pets: 1 // default (you can later add in schema)
        }));

        res.json(formatted);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/* --------- NEW: FEEDBACK API --------- */
app.post("/api/feedback", async (req, res) => {
    try {
        const feedback = new Feedback(req.body);
        await feedback.save();
        res.json({ message: "Feedback saved" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/* --------- ROOT --------- */
app.get("/", (req,res)=>{
    res.send("StayMatch Backend Running");
});

/* --------- SERVER --------- */
app.listen(5000,()=>{
    console.log("Server running on port 5000");
});