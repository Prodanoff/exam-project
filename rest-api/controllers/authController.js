const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', (req, res) => {
  
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
            console.log('Username allready registered')
            res.send({"message" : 'Username allready registered'})
        }

    })




});

router.post('/login', (req, res, next) => {
    const { login: username, password } = req.body;

    User.where({ username, password })
        .findOne()
        .then(user => {
            let token = jwt.sign({
                _id: user._id,
                username: user.username,
            }, 'SOMESUPERSECRET', { expiresIn: '1h' });

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