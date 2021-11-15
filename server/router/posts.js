const express = require("express");
const axios = require("axios");
const router = express.Router();

const asyncMiddleware = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

const getPosts = async (req, res) => {
  try {
    const getPosts = await axios
      .get(`${process.env.API_URL}/posts`)
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        return err;
      });

    return res.json({
      posts: getPosts,
    });
  } catch (error) {
    return res
      .json({
        message: error.message,
        error: 500,
      })
      .status(500);
  }
};

const getPostById = async (req, res) => {
  const id = req.params.id;
  try {
    const getPost = await axios
      .get(`${process.env.API_URL}/posts/${id}`)
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        return err;
      });

    return res.json({
      post: getPost,
    });
  } catch (error) {
    return res
      .json({
        message: error.message,
        error: 500,
      })
      .status(500);
  }
};


router.get("/", asyncMiddleware(getPosts));
router.get("/:id", asyncMiddleware(getPostById));

router.get("/:id", (req, res) => {
  return res.json("helloo test" + req.params.id);
});

module.exports = router;
