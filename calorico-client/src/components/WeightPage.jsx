import { useQuery } from "@tanstack/react-query";
import { fetchWeightsByUserId } from "../api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import WeightChart from "./WeightChart";
import WeightAddModal from "./WeightAddModal";
import WeightEditModal from "./WeightEditModal";

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
            <section className="w-full md:w-1/3 lg:w-1/3 mx-auto">
                <WeightChart weights={weights} />
            </section>
            <WeightAddModal userId={id} />
            <section className="flex justify-center">
                <ul className="p-4">
                    {weights.map((weight) => (
                        <div key={weight.id} className="grid grid-cols-3 items-center p-2  rounded-lg ">
                            <p className="text-center mx-5 px-4">{weight.dateWeighed}</p>
                            <p className="text-center mx-5 text-xl px-4" >{weight.weightMetric} kg</p>
                            <WeightEditModal weight={weight}/>
                        </div>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default WeightPage