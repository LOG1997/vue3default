exports.test=(req,res)=>{
    console.log("test",req.method);
    if(req.method=="POST"){
        return res.json({msg:"POST请求成功"})
    }
    if(req.method=="GET"){
        return res.json({msg:"GET请求成功"})
    }
}