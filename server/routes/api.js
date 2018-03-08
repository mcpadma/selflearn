const express = require('express');
const router = express.Router();

// router.get('/', function(req,res){
//     res.send('api works');
// });
const mongoose = require('mongoose');
const data = require('../models/data');
// const userdata = require('../models/users');

//using remote mongodb
// const db = "mongodb://test:test@ds239128.mlab.com:39128/selflearn";
//using local mongodb
const db = "mongodb://localhost/selflearn";

mongoose.Promise = global.Promise;//to avoid any warnings thrown by mongoose

mongoose.connect(db,function(err){
    if(err){
        console.log("Error" +err);
    }
});



router.get('/datas',function(req,res){
    console.log('get request for all datas');
    data.find({}).exec(function(err, data){
        if(err){
            console.log("Error retrieving data");
        }else{
            res.json(data);
        }
    })
    //res.send("api works");
});

router.get('/datas/:id',function(req,res){
    console.log('get request for a single data');
    data.findById(req.params.id).exec(function(err,data){
        if(err){
            console.log("Error retrieving videos");
        }else{
            res.json(data);
        }
    })
    // res.send('api works');
});

router.post('/data', function(req,res){
    console.log("post a data");
    var newData = new data();
    newData.origin = req.body.origin;
    newData.destination = req.body.destination;
    newData.startDate = req.body.startDate;
    newData.returnDate = req.body.returnDate;
    newData.save(function(err,insertedData){
        if(err){
            console.log("error saving data");
        }else{
            res.json(insertedData);
        }
    });
});

router.put('/data/:id',function(req, res){
    // console.log("update a video");
    data.findByIdAndUpdate(req.params.id,
    {
        $set: {origin: req.body.origin, destination: req.body.destination, startDate: req.body.startDate, returnDate: req.body.returnDate}
    },
    {
        new: true
    },
    function(err,updatedData){
        if(err){
            console.log("error updating video");
        }else{console.log("update a video");
            res.json(updatedData);
        }
    });
});

router.delete('/data/:id',function(req,res){
    data.findByIdAndRemove(req.params.id,function(err,deletedData){
        if(err){
            res.send("error deleting video");
        }else{
            res.json(deletedData);
        }
    });
});





module.exports = router;