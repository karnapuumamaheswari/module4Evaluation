import supabase from "../config/supabse";
export const createVehicle = async (req,res)=>{
    const{
        name,
        registration_number,
        allowed_passengers,
        rate_per_km,
        owner_id,
    } = req.body();

    const {data,error} = await supabase
    .from('vehicles')
    .insert([{
        name,
        registration_number,
        allowed_passengers,
        rate_per_km,
        owner_id,
        is_available:true
    }]);
    if(error) return res.status(400).json({error:error.message});
    res.json(data);
};

export const getVehicles = async (req,res) =>
{
    const {data,error} = await supabase
    .from('vehicles').select("*");
    if(error) return res.status(400).json({error:error.message});
    res.json(data);
};