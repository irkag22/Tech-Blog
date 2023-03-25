const router = require("express").Router();
const { User, Post, Comment } = require("../models");

const withAuth = require("../utils/auth");

// GET all posts for homepage
router.get("/", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: Post,
          attributes: ["title", "body"],
        },
      ],
    });

    const users = dbPostData.map((posts) => posts.get({ plain: true }));

    res.render("homepage", {
      Post,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
