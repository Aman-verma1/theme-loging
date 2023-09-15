const nexts = require('../Models/schema')



const Adduser = async( req , res)=>{
const {name , email ,password } =  req.body;

try {
    if(!name || !email || !password){
        res.status(400).json(console.log("fill the detais"));

    }else{
        const Add =  await new nexts({name , email, password})

        await Add.save()
        res.status(201).json(Add);
        
    }
    
    
} catch (error) {
    res.status(400).json(console.log("error while adding data"));

};
};

////////////////////// login api//////////

const CheckUser= async (req , res)=>{

    const {email , password} = req.body;

    const userExist = await nexts.findOne({email }).then((userExist)=>{

        if(!userExist){
            
            res.status(400).json({ msg: "User not exist" });
        }

        else if(userExist.email == email && userExist.password == password){
            return  res.json({ message: 'Login successful', userExist });

        }else {
            return res.status(401).json({ msg: "Invalid credencial" });
          };
    });

};





module.exports = {Adduser , CheckUser} ;



// const db = require('../db/db')

// const Adduser = (req , res)=>{
//     const {name , email ,password } =  req.body;
//     const sql = `insert into product(name , email , password) values(? ,? ,? )`;
//     db.query(sql , [name , email , password], (error , result)=>{

//         if (error) {
//             res.status(400)
//           } else {
//             res.status(201).send(result , 'Record created');
//           }
//     })



// }
// module.exports=  Adduser;