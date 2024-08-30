import { useQuery } from "@tanstack/react-query";
import { fetchWeightsByUserId } from "../api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import WeightChart from "./WeightChart";

const WeightPage = () => {

    const { id } = useParams();

    const { data: weights, isLoading: weightsLoading, isError: weightsError, error: weightsFetchError } = useQuery({
        queryKey: ['weights', id],
        queryFn: () => fetchWeightsByUserId(id),
    });

    if (weightsLoading) return <div>Loading...</div>;

    if (weightsError) return <div>Error: {weightsFetchError?.message}</div>;
    
    return (
        <>
            <WeightChart weights={weights} />
            <section className="flex justify-center">
                <Link to={`/weights/${id}/add`}>
                    <button className="btn ">Add Weight Reading</button>
                </Link>
            </section>
            <section className="flex justify-center">
                <ul className="p-4">
                    {weights.map((weight) => (
                        <div key={weight.id} className="grid grid-cols-3 items-center p-2  rounded-lg ">
                            <p className="text-center mx-5 px-4">{weight.dateWeighed}</p>
                            <p className="text-center mx-5 text-xl px-4" >{weight.weightMetric} kg</p>
                            <button className="btn btn-sm mx-5 ">Edit</button>
                        </div>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default WeightPage