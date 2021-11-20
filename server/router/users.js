const express = require("express");
const axios = require("axios");
const router = express.Router();

const asyncMiddleware = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

const getUsers = async (req, res) => {
  try {
    const getUser = await axios
      .get(`${process.env.API_URL}/users`)
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        return err;
      });

    return res.json({
      users: getUser,
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

const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    await axios
      .get(`${process.env.API_URL}/users/${id}`)
      .then((result) => {
        return res.status(result.status).json({
          user: result.data,
        });
      })
      .catch((err) => {
        return res.status(err.response.status).json({
          error: err.response.statusText,
          status: err.response.status,
        });
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

const getPostByUserId = async (req, res) => {
  const id = req.params.id;
  try {
    await axios
      .get(`${process.env.API_URL}/users/${id}/posts`)
      .then((result) => {
        return res.status(result.status).json({
          posts: result.data,
        });
      })
      .catch((err) => {
        return res.status(err.response.status).json({
          error: err.response.statusText,
          status: err.response.status,
        });
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

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const params = {
      name: data.name,
      username: data.username,
      email: data.email,
      address: {
        street: data.street,
        suite: data.suite,
        city: data.city,
        zipcode: data.zipcode,
        geo: {
          lat: data.lat,
          lng: data.lng,
        },
      },
      phone: data.phone,
      website: data.website,
      company: {
        name: data.company,
        catchPhrase: data.catchPhrase,
        bs: data.bs,
      },
    };

    await axios
      .post(`${process.env.API_URL}/users`, params, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((result) => {
        return res.status(result.status).json({
          users: result.data,
        });
      })
      .catch((err) => {
        return res.status(err.response.status).json({
          error: err.response.statusText,
          status: err.response.status,
        });
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

const updateUser = async (req, res) => {
  try {
    const data = req.body;
    const params = {
      id: data.id,
      phone: data.phone,
      email: data.email      
    };

    await axios
      .put(`${process.env.API_URL}/users/${data.id}`, params, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((result) => {
        return res.status(result.status).json({
          users: result.data,
        });
      })
      .catch((err) => {
        return res.status(err.response.status).json({
          error: err.response.statusText,
          status: err.response.status,
        });
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

const deleteUser = async (req, res) => {
  try {
    const id = req.id;
    await axios
      .delete(`${process.env.API_URL}/users/${id}`)
      .then((result) => {
        return res.status(result.status).json({
          message: "Success",
          status: 200,
        });
      })
      .catch((err) => {
        return res.status(err.response.status).json({
          error: err.response.statusText,
          status: err.response.status,
        });
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

router.get("/", asyncMiddleware(getUsers));
router.get("/:id/posts",asyncMiddleware(getPostByUserId));
router.get("/id/:id", asyncMiddleware(getUserById));
router.post("/create", asyncMiddleware(createUser));
router.put("/update/:id", asyncMiddleware(updateUser));

router.delete("/delete/:id", asyncMiddleware(deleteUser));

module.exports = router;
