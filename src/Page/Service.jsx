import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import ServiceCard from "./ServiceCard";

const Service = () => {
const axios=useAxios()
const getService=async()=>{
    const res=await axios.get('service')
    return res;
}


 const {data:services,isError,isLoading,error}=useQuery({
    queryKey:["service"],
    queryFn:getService
 })

 if(isLoading){
    return <p>Loading....</p>
 }

 if(isError){
    return <p>some thing went wrong ..... {error}</p>
 }

//  console.log(services.data);

    return (
        <div className="grid grid-cols-3 gap-6">
            {
            services?.data.map(service=><ServiceCard key={service} service={service}></ServiceCard>)
            
            }
        </div>
    );
};

export default Service;