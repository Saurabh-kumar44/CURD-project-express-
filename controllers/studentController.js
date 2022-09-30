// var studentController = (req,res)=> {
//     res.render('index',{Title:"Home"});
// }

import { name } from "ejs";
import studentModel  from "../models/student";
class studentController {
    static createDoc = async (req,res)=>{
        // console.log("Create Doc Post");
        // console.log(req.body);//To use this we have to use a middleware(urlencoded)
        try{
            const{name,age,fees}= req.body;//Destructuring
             const doc = new studentModel({
                name: name,
                age: age,
                fees: fees
            })
        //  saving Document
            const result = await doc.save();
            res.redirect("/student");
        }catch(err){
            console.log(err);
        }
    } 

    static getAllDoc = async (req,res)=> {
        try{
            const result = await studentModel.find();
            res.render('index',{data:result});
            // console.log(result);
        }catch(err){
            console.log(err);
        } 
    }
    static editDoc = async(req,res)=>{
        // console.log(req.params.id);
        try{
            const result = await studentModel.findById(req.params.id);
            // console.log(result);
            res.render("edit",{Title:"Edit",data:result});

        }catch(err){
            console.log(error);
        }
    } 
    static updateDocById = async(req,res)=>{
        // console.log(req.params.id);
        // console.log(req.body);
        try{
            const result = await studentModel.findByIdAndUpdate(req.params.id, req.body);
            // console.log(result);
            res.redirect("/student");
        }catch(err){
            console.log(error);
        }
    } 
    static deleteDocById = async(req,res)=>{
        // console.log(req.params.id);
        try{
            const result = await studentModel.findByIdAndDelete(req.params.id);
            res.redirect("/student");
        }catch(err){
            console.log(error);
        }
    } 

}

export {studentController};
