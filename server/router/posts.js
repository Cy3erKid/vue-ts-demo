const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get("/",(req,res) => {
    return res.json({message: 'Hello'})
})

router.get("/id/:id",(req,res) => {
    return res.json('helloo test' + req.params.id)
})


module.exports = router;