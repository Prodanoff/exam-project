const router = require('express').Router();
const Work = require('../models/Work');
const { isAuth } = require('../middlewares/auth');

router.get('/', (req, res) => {
    
    Work.find()
        .then(works => {
            res.json(works);
        });
});

router.post('/', (req, res) => {
    let work = new Work(req.body);

    work.save()
        .then(createdWork => {
            res.status(201).json({_id: createdWork._id});
        });
});

module.exports = router;