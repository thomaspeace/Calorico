import { useQuery } from "@tanstack/react-query";
import { fetchWeightsByUserId } from "../api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const WeightPage = () => {

    const { id } = useParams();

    const { data: weights, isLoading: loading, isError: error, error: fetchError } = useQuery({
        queryKey: ['weights', id],
        queryFn: () => fetchWeightsByUserId(id),
      });

    
    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {fetchError?.message}</div>;
    
    return (
        <>
            <Link to={`/weights/${id}/add`}>
                <button className="btn btn-wide">Add Weight Reading</button>
            </Link>
            <div>
                {weights.map((weight) => (
                    <p key={weight.id}>{weight.weightMetric} kg - {weight.dateWeighed}</p>
                ))}
            </div>
        </>
    )
}

export default WeightPage