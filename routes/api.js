const express = require ('express');
const router = express.Router();
const Item = require('../models/item');

router.get('/item', (req, res, next) => {
    Item.find({}, 'action')
    .then(data => res.json(data))
    .catch(next)
});


router.post('/list', (req, res, next) => {
    if(req.body.action){
        Item.create(req.body)
          .then(data => res.json(data))
          .catch(next)
      }else {
        res.json({
          error: "The input field is empty"
        })
      }
});


router.delete('/list/:id', (req, res, next) => {
    Item.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})
module.exports = router;