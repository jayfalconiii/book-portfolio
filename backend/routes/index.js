const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

const auth = require("../auth/auth");

/* GET home page. */
router.get("/", (req, res) => {
    res.send("<h1>Welcome to Jay's Portfolio Backend!</h1>");
});

router.post("/contactme", async (req, res) => {
    const body = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth,
    });

    const options = {
        from: body.email,
        to: "bienvenido.falconiii@gmail.com",
        subject: `Message from ${body.name} <${body.email}>: Book Portfolio Message`,
        text: body.message,
    };

    try {
        const data = await transporter.sendMail(options);

        if (body.sendCopy) {
            const copy = await transporter.sendMail({
                ...options,
                to: body.email,
                subject: `[Copy] Message from ${body.name} <${body.email}>: Book Portfolio Message`,
            });
            res.json({
                data,
                copy,
            });
            return;
        }

        res.json(data);
    } catch (err) {
        res.send(err);
        return;
    }
});

module.exports = router;
