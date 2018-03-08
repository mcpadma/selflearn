const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const userdata = require('../models/users');

const db = "mongodb://localhost/selflearn";

mongoose.Promise = global.Promise;//to avoid any warnings thrown by mongoose

mongoose.connect(db,function(err){
    if(err){
        console.log("Error" +err);
    }
});

router.get('/userdatas',function(req,res){
    console.log('get request for all datas');
    userdata.find({}).exec(function(err, userdata){
        if(err){
            console.log("Error retrieving data");
        }else{
            res.json(userdata);
        }
    })
    //res.send("api works");
});

router.get('/userdatas/:id',function(req,res){
    console.log('get request for a single data');
    userdata.findById(req.params.id).exec(function(err,userdata){
        if(err){
            console.log("Error retrieving videos");
        }else{
            res.json(userdata);
        }
    })
    // res.send('api works');
});

router.post('/userdata', function(req,res){
    console.log("post a data");
    var newUserData = new userdata();
    newUserData.name = req.body.name;
    newUserData.Email = req.body.Email;
    newUserData.password = req.body.password;
    newUserData.mobile = req.body.mobile;
    newUserData.save(function(err,insertedUserData){
        if(err){
            console.log("error saving data");
        }else{
            res.json(insertedUserData);
        }
    });
});

router.delete('/userdata/:id',function(req,res){
    userdata.findByIdAndRemove(req.params.id,function(err,deletedData){
        if(err){
            res.send("error deleting video");
        }else{
            res.json(deletedData);
        }
    });
});

module.exports = router;