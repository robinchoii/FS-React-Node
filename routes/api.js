var express = require('express');
var router = express.Router();
var ZoneController = require('../controllers/ZoneController');

router.get('/:resource', function(req, res, next) {

    var resource = req.params.resource;

    if(resource == 'zone') {

        ZoneController.find(req.query, function(err, results) {

            if(err) {

                res.json( {

                    confirmation: 'fail',

                    message: err

                })
                return


            }

            res.json({

                confirmation: 'success',

                results: results

            })

        })

    }
    // res.json( {

    //     confirmation: 'success',

    //     resource: resource
    // })


});

router.get('/:resource/:id', function(req, res, next) {
    var resource = req.params.resource;
    var id = req.params.id

    if(resource == 'zone') {

        ZoneController.findById(id, function(err, result) {

            if(err) {

                res.json({

                    confirmation: 'fail',

                    message: 'Not Found'

                })
                return
            }

            res.json({

                confirmation: 'success',

                result: result
            })

        })

    }

})

router.post('/:resource', function(req, res, next) {

    var resource = req.params.resource
    console.log(resource)

    if(resource == 'zone') {

        ZoneController.create(req.body, function(err, result) {

            if(err) {

                res.json( {

                    confirmation: 'fail',

                    message: err
                })

                return

            }

            res.json({

                confirmation: 'success',

                result: result
            })

        })

    }

})

module.exports = router
