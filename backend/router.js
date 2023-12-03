const router = require("express").Router();
const userModel = require("./src/Database/Models/userModel");
const USER_MODEL = require("./src/Database/Models/userModel")
const BLOG_MODEL = require("./src/Database/Models/userBlog");
const { ObjectId } = require("mongodb");
router.post("/signup", async (req, res) => {
 try {
  const {
    userName,
    designation,
    firstName,
    lastName,
    domain,
    course,
    gender,
    dob,
    password
  } = req.body
  const response= await USER_MODEL.findOneAndUpdate({
    userName:userName
   }, {
    $set:{
      designation,
      firstName,
      lastName,
      domain,
      course,
      dob,
      password,
      gender
    }
   });

    res.send({success:true, response: "user successfully saved" }).status(200);
 }catch(error){
  console.log("this is error ",error)
  res.send({success:false, response: "error while saving data" }).status(400);

 }
  });


  router.post("/login", async (req, res) => {
    try {
     const {
       userName,
       password
     } = req.body
      console.log(userName,password)
     const response=await USER_MODEL.find({userName: userName,password:password});
     console.log("data is ",response)
     if(!response || response.length===0)
     {
     return res.send({success:false,response:"failed! no data found"}).status(200)
     }
     
       res.send({ success:true, data:response[0] }).status(200);
    }catch(error){
     console.log("this is error ",error)
     res.send({ response: "error while saving data" }).status(400);
   
    }
     });


     router.post("/verify", async (req, res) => {
      try {
       const {
         userName,
         branch,
         year,email,contact
       } = req.body
        
       console.log(userName,branch,year,email,contact)
       
       const response2=await USER_MODEL.find({
        userName:userName,
        branch:branch,
        year:year,
        email:email
       });
    //    console.log("thsi is respose 2 ",response2)
       if(!response2 || response2.length===0)
     {
     return res.send({success:false,response:"failed! no data found"}).status(200)
     }
     const response= await USER_MODEL.findOneAndUpdate({
        userName:userName
       }, {
        $set:{
          contact:contact 
        }
       }); 
       
         res.send({ success:true, response: "verified" }).status(200);
      }catch(error){
       console.log("this is error ",error)
       res.send({ response: "error while saving data" }).status(400);
     
      }
       });


       router.post("/addBlog", async (req, res) => {
        try {

         const saveUser = new BLOG_MODEL(req.body);
         const response =await saveUser.save();
             console.log("this is response ",response)
           console.log("login page has been called")
           res.send({ success:true,response: "user successfully saved" }).status(200);
        }catch(error){
         console.log("this is error ",error)
         res.send({ response: "error while saving data" }).status(400);
       
        }
         });
       

         router.get("/getBlogs", async (req, res) => {
          try {
  
           const response = await BLOG_MODEL.find();
           //console.log("response is ",response)
             res.send({ success:true,response: response }).status(200);
          }catch(error){
           console.log("this is error ",error)
           res.send({ response: "error while saving data" }).status(400);
         
          }
           });


           router.get("/getBlog/:id", async (req, res) => {
            try {
                console.log("rq params ",req.params)
             const response = await BLOG_MODEL.findById(new ObjectId(req.params.id));
             console.log("response is ",response)
               res.send({ success:true,response: response }).status(200);
            }catch(error){
             console.log("this is error ",error)
             res.send({ response: "error while saving data" }).status(400);
           
            }
             });


             router.post("/like/:id", async (req, res) => {
              try {
                const {userName} = req.body
               const response = await BLOG_MODEL.findById(new ObjectId(req.params.id));

               let isPresent = response.ldata.findIndex(currId => currId ===userName);
               let xx =[...response.ldata] 

               console.log("this is ispresend ",isPresent)
               if(isPresent ==-1){
                   xx= [...response.ldata,userName]
                }
                else xx.splice(isPresent,1)
               if(isPresent != -1)
               {
                const response2= await BLOG_MODEL.findOneAndUpdate({
                  _id: new ObjectId(req.params.id)
                 }, {
                  $set:{
                    likes : response.likes-1,
                    ldata:xx
                  }
                 });
               }
               else{
                const response2= await BLOG_MODEL.findOneAndUpdate({
                  _id: new ObjectId(req.params.id)
                 }, {
                  $set:{
                    likes : response.likes+1,
                    ldata: xx
                  }
                 });
               }
                 res.send({ success:true,response: response }).status(200);
              }catch(error){
               console.log("this is error ",error)
               res.send({ response: "error while saving data" }).status(400);
             
              }
               });


               router.get("/getUser", async (req, res) => {
                try {
        
                 const response = await USER_MODEL.find();
                 //console.log("response is ",response)
                   res.send({ success:true,response: response }).status(200);
                }catch(error){
                 console.log("this is error ",error)
                 res.send({ response: "error while saving data" }).status(400);
               
                }
                 });
  module.exports = router;