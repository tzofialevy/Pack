const express = require("express");
const router =express.Router();
const TripBl=require("../Bl/TripBl")

router.route('/')
.get(async function(req,res){   
   let data=await TripBl.getAllTrips();
   return res.json(data)
})
router.route('/:id')
.get(async function(req,res){
   let id=req.params.id;   
   let data=await TripBl.getTripByID(id);
   return res.json(data)
})
router.route('/')
.post(async function(req,res){
   let body=req.body
   let data=await TripBl.createTrip(body);
   return res.json(data)
})
router.route('/:id')
.put(async function(req,res){
   let id=req.params.id;
   let body=req.body;
   let data=await TripBl.updateTrip(id,body);
   return res.json(data)
})
router.route('/:id')
.delete(async function(req,res){
   let id=req.params.id;
   let data=await TripBl.deleteTrip(id);
   return res.json(data)
})

module.exports=router