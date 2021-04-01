const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', (req, res) => {
    if(req.body.password.length<6){
        res.send({'message': 'Password too short'})
        return
    }
    let user = new User(req.body);
    User.findOne({ 'username': `${req.body.username}` }, function (err, finded) {
        
        if (finded==null) {
            user.save()
                .then(createdUser => {
                    console.log(createdUser);
                    res.status(201).json({ _id: createdUser._id });
                });
                
        }
        else {
            res.send({"message" : 'Username allready registered'})
        }
        
    })




});

router.post('/login', (req, res, next) => {
    const { username, password } = req.body;

    User.where({ username, password })
        .findOne()
        .then(user => {
            let token = jwt.sign({
                _id: user._id,
                username: user.username,
            }, 'MARGARITAPRODANOVA', { expiresIn: '1h' });

            res.status(200).json({
                _id: user._id,
                username: user.username,
                token
            })
        })
        .catch(err => {
            next({ status: 404, message: 'No such user or password!', type: 'ERROR' })
        })
});

module.exports = router;