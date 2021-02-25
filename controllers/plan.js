const plan = require("../models/recharge")
const plans = async(req,res)=>{
    try{
    console.log(req.body)
    const data = await plan.create(req.body);
    const update = await data.save();
    setInterval(async()=>{
        try{
            const up = await plan.findById({_id:update._id})
            console.log(up);
            up.expires_at = up.expires_at-1;
            up.data_left = up.data_left-1;
            const change = await up.save()
            console.log(change);
        }
            catch(err){
                console.log(err)}
             } ,7000)
    
    res.sendStatus(200).send({
        "status":200,
        "message":"successfully created"
    })
}
catch(err){
    console.log("error"+err)
}
}
module.exports=plans;
