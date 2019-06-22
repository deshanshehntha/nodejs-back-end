const express = require('express');
const Router = express.Router();

let User = require('../models/user.model');

//get all users
Router.route('/').get(function(req,res){
    User.find(function(err,users){
        if(err){
            console.log(err);
        }else{
            res.json(users);
        }
    });
});

Router.get("/instructors", (req, res, next) => {

    User.find().exec().then(docs => {

        //res.json(docs);

        const instructors = [];

        docs.forEach(user => {

            if (user.role == 'Instructor') {
                instructors.push(user);
            }

        });

        res.status(200).json({
            instructors: instructors
        })

    }).catch(err => {

        res.status(500).json({
            error: err
        });

    });

});

//get a specific user 
Router.route('/:id').get(function(req,res){
    let id = req.params.id;
    User.findById(id,function(err,user){
        res.json(user);
    });
});

//add user
Router.route('/add').post(function(req,res){

    let user = new User(req.body);
    user.save()
        .then(user=>{
            res.status(200).json({'message':'user added successfully',
                                   'user':user
                                });
        })
        .catch(err=>{
            res.status(400).send({'message':'adding new todo failed'});
        });

});

//update a user as json object
Router.route('/update/:id').post(function(req,res){
    User.findById(req.params.id,function(err,user){
        if(!user)
            res.status(404).send('data is not found');
        else
            user.regNo = req.body.regNo;
            user.fname =req.body.fname;
            user.lname = req.body.lname;
            user.role = req.body.role;
            user.email = req.body.email;
            user.password = req.body.password;

            user.save().then(user =>{
                res.json({'message':'User updated successfully',
                'user':user
             });
            }).catch(err=>{
                res.status(400).send("Update not possible");
            });
    });
});

module.exports = Router;
