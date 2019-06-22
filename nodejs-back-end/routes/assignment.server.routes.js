const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const assignments = require('../models/assignment.model');

/*
Get all assignments
 */
router.get("/all", function (req,res) {

    console.log(req);
    assignments.find()
        .populate("")
        .exec()
        .then(assignments=>{
            res.status(200).json(assignments)
        })
        .catch(err=>{
            res.status(500).json(err);
        })
});

/*
Get the submission by submission id
 */
router.get("/find/:assignmentId",function (req,res) {
    const id = req.params.assignmentId;
    console.log(req);
    assignments.find({_id : id })
        .populate("assignment")
        .exec()
        .then(assignment =>{
            if( assignment ){
                res.status(200).json(assignment);
            }else{
                res.status(404).json({"message": "not found"});
            }

        })
        .catch(err=>{
            res.status(500).json(err);
        })
});
//
// /*
// Delete a submission
//  */
// router.delete("/delete/:submissionId",function (req,res) {
//
//     const id = req.params.submissionId;
//
//     Submission.findByIdAndRemove({_id: id})
//         .exec()
//         .then(result=>{
//             res.status(200).json(result);
//         })
//         .catch(err=>{
//             res.status(500).json(err);
//         })
// });

module.exports = router;