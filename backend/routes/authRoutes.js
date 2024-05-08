const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const authKeys = require("../lib/authKeys");

const User = require("../db/User");
const JobApplicant = require("../db/JobApplicant");
const Recruiter = require("../db/Recruiter");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const data = req.body;
  try {
    const user = new User({
      email: data.email,
      password: data.password,
      type: data.type,
    });

    await user.save();

    let userDetails;
    if (user.type === "recruiter") {
      userDetails = new Recruiter({
        userId: user._id,
        name: data.name,
        contactNumber: data.contactNumber,
        bio: data.bio,
      });
    } else {
      userDetails = new JobApplicant({
        userId: user._id,
        name: data.name,
        education: data.education,
        skills: data.skills,
        rating: data.rating,
        resume: data.resume,
        profile: data.profile,
        dob: data.dob,
      });
    }

    await userDetails.save();

    const token = jwt.sign({ _id: user._id }, authKeys.jwtSecretKey);

    res.json({
      token: token,
      type: user.type,
      name: userDetails.name,
      dob: userDetails.dob,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/login", async (req, res, next) => {
  passport.authenticate(
    "local",
    { session: false },
    async function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        res.status(401).json(info);
        return;
      }
      // Token
      const token = jwt.sign({ _id: user._id }, authKeys.jwtSecretKey);

      try {
        let userDetails;
        // Fetch additional user data based on user type
        if (user.type === "recruiter") {
          userDetails = await Recruiter.findOne({ userId: user._id });
        } else {
          userDetails = await JobApplicant.findOne({ userId: user._id });
        }

        if (!userDetails) {
          throw new Error("User data not found");
        }

        // Return the user data along with token
        res.json({
          token: token,
          type: user.type,
          name: userDetails.name,
          dob: userDetails.dob,
        });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    }
  )(req, res, next);
});



module.exports = router;
