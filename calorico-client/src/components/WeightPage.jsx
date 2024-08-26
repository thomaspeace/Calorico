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
            <section className="flex justify-center">
                <Link to={`/weights/${id}/add`}>
                    <button className="btn ">Add Weight Reading</button>
                </Link>
            </section>
            <section className="flex justify-center">
                <ul className="p-4">
                    {weights.map((weight) => (
                        <div className="grid grid-cols-3 items-center p-2  rounded-lg ">
                            <p className="text-center mx-5">{weight.dateWeighed}</p>
                            <p className="text-center mx-5 text-xl" >{weight.weightMetric} kg</p>
                            <button className="btn btn-sm mx-5">Edit</button>
                        </div>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default WeightPage