const express = require("express")
const router = express.Router()

router.get('/', (req,res)=>{

    res.render('event/indexv')
})


module.exports = router