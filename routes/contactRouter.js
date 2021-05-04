const express = require("express");
const contactRouter = express.Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    email: "hasnaat19982021@outlook.com",
    password: "Hasnat@1998",
  },
});

contactRouter.post("/", (req, res) => {
  const { name, from, msg } = req.body;

  const email = {
    from: "hasnaat19982021@outlook.com",
    to: "hasnaat19982021@outlook.com",
    subject: "Message From: " + name,
    text: from + "<br/>" + msg,
  };

  transporter.sendMail(email, (error, info) => {
    if (error) {
      res.status(422).json({
        error: "Sending Failed",
      });
    } else {
      res.json({
        message: "Email Sent Successfully",
      });
    }
  });
});

module.exports = contactRouter;
