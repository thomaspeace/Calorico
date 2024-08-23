import { useQuery } from "@tanstack/react-query";
import { fetchWeightsByUserId } from "../api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const WeightPage = () => {

    const { id } = useParams();

    const { data: user, isLoading: userLoading, isError: userError, error: userFetchError } = useQuery({
        queryKey: ['user', id],
        queryFn: () => fetchWeightsByUserId(id),
      });

    
    if (userLoading) return <div>Loading...</div>;

    if (userError) return <div>Error: {userFetchError?.message}</div>;
    
    return (
        <>
        <Link to={`/weights/${id}/add`}><button className="btn btn-wide">Add Weight Reading</button></Link>
        <p>This is the Weight Page</p>
        </>
    )
}

export default WeightPage