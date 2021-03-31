const router = require('express').Router();
const Work = require('../models/Work');
const { isAuth } = require('../middlewares/auth');

router.get('/', (req, res) => {
    Work.find()
        .then(works => {
            res.json(works);
        });
});

router.get('/:category', (req, res) => {
    let searchedCategory  =req.params.category
    Work.find({"category": `${searchedCategory}`})
        .then(works => {
            res.json(works);
        });
});
router.get('/details/:id', (req, res) => {
    Work.findOne({_id: req.params.id})
        .then(work => {
            res.json(work);
            
        });
});
router.delete('/delete/:id' , (req, res) =>{
    Work.findByIdAndDelete(req.params.id, (err, docs) => {
        if (err) {
          console.log(err);
        } else {
          //console.log('Deleted : ', docs);
          res.status(200).json(docs)
        }
      });
})
router.put('/:id' , (req, res) => {
    console.log(req.body)
    Work.findByIdAndUpdate(req.params.id , req.body )
    .then(res=> console.log(res))
})


router.post('/', (req, res) => {
    let work = new Work(req.body);
    work.save()
        .then(createdWork => {
            res.status(201).json({_id: createdWork._id});
        });
});

module.exports = router;