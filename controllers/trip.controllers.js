import supabase from "../config/supabse";

export const createTrip = async (req,res)=>{
    const{
        customer_id,
        vehicle_id,
        start_date,
        end_date,
        location,
        distance_km,
        passengers
    } = req.body();

    const {data,error} = await supabase
    .from("trips").insert([{
        customer_id,
        vehicle_id,
        start_date,
        end_date,
        location,
        distance_km,
        passengers,
        is_completed:true
    }]);

    if(error) return res.status(400).json({error:error.message});
    res.json(data);
};


export const getTrips = async (req,res) =>{
    const {data,error} = await supabase.from("trips").select("*");
    if(error) return res.status(400).json({error:error.message});
    res.json(data);


};

export const endTrip = async (req,res) => {
    const {id} = req.params;
    const {trip_cost} = req.body;

    const {data,error} = await supabase
    .from("trips")
    .update({is_completed:true,trip_cost})
    .eq("id",id);

    if(error) return res.status(400).json({error:error.message});
    res.json(data);
};