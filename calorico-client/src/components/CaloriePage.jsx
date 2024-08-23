import { useQuery } from "@tanstack/react-query";
import { fetchCaloriesByUserId, fetchWeightsByUserId } from "../api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const CaloriePage = () => {

    const { id } = useParams();

    const { data: user, isLoading: userLoading, isError: userError, error: userFetchError } = useQuery({
        queryKey: ['user', id],
        queryFn: () => fetchCaloriesByUserId(id),
      });

    
    if (userLoading) return <div>Loading...</div>;

    if (userError) return <div>Error: {userFetchError?.message}</div>;
    
    return (
        <>
        <Link to={`/calories/${id}/add`}><button className="btn btn-wide">Add Calorie Reading</button></Link>
        <p>This is the Calorie Page</p>
        </>
    )
}

export default CaloriePage