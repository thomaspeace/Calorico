import { useQuery } from "@tanstack/react-query";
import { fetchCaloriesByUserId, fetchWeightsByUserId } from "../api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CalorieChart from "./CalorieChart";
import CalorieAddModal from "./CalorieAddModal";
import CalorieEditModal from "./CalorieEditModal";

const CaloriePage = () => {

    const { id } = useParams();

    const { data: calories, isLoading: caloriesLoading, isError: caloriesError, error: caloriesFetchError } = useQuery({
        queryKey: ['calories', id],
        queryFn: () => fetchCaloriesByUserId(id),
      });

    if (caloriesLoading) return <div>Loading...</div>;

    if (caloriesError) return <div>Error: {caloriesFetchError?.message}</div>;
    
    return (
        <>
            <CalorieChart calories={calories} />
            <CalorieAddModal userId={id} />
            <section className="flex justify-center">
                <ul className="p-4">
                    {calories.map((calorie) => (
                        <div key={calorie.id} className="grid grid-cols-3 items-center p-2  rounded-lg ">
                            <p className="text-center mx-5 px-4">{calorie.dateConsumed}</p>
                            <p className="text-center mx-5 text-xl px-4" >{calorie.caloriesConsumed} kcal</p>
                            <CalorieEditModal calorie={calorie} />
                        </div>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default CaloriePage