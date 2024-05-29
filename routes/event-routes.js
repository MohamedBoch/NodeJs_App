const express = require("express")
const router = express.Router()

// router to home events
router.get('/', (req,res)=>{

    res.render('event/indexv')
})

// show signal evenet
router.get('/:id', (req,res)=>{

    res.render('event/show')
})



module.exports = router