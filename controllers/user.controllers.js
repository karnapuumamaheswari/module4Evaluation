import supabase from "../config/supabse";

export const createUser = async (req,res)=>{
    const {name,email,password,role} = req.body;
    const {data,error} = await supabase
    .from('users')
    .insert([{name,email,password,role}]);

    if(error) return res.status(400).json({error:error.message});
    res.json(data);
}

export const getUsers = async (req,res)=>{
    const {data,error} = await supabase
    .from('users').select("*");

    if(error) return res.status(400).json({error:error.message});
    res.json(data);
}