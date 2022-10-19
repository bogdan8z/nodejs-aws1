var express = require('express');
var router = express.Router();

var tweets = [];

router.get('/', (req, res) => {
    res.send('Welcome to my Twitter')
})

router.post('/send', express.json(), (req,res) => {
    if(req.body && req.body.tweet){
        tweets.push(req.body.tweet)
        res.send({status: "ok", message: "Tweet received"})
        //res.status(200).send("Tweet received")
    } else {
        // no tweet?
        res.send({status:"nok", message: "No tweet received"})
        // res.status(204).send("No tweet received")
    }
})

router.get('/tweets', (req, res) => {
    res.send(tweets)
})


module.exports = router;