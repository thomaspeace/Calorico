import { useQuery } from "@tanstack/react-query";
import { fetchCaloriesByUserId, fetchWeightsByUserId } from "../api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const CaloriePage = () => {

    const { id } = useParams();

    const { data: calories, isLoading: loading, isError: error, error: fetchError } = useQuery({
        queryKey: ['calories', id],
        queryFn: () => fetchCaloriesByUserId(id),
      });

    
    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {fetchError?.message}</div>;
    
    return (
        <>
            <section className="flex justify-center">
                <Link to={`/calories/${id}/add`}>
                    <button className="btn">Add Calorie Reading</button>
                </Link>
            </section>
            <section className="flex justify-center">
                <ul className="p-4">
                    {calories.map((calorie) => (
                        <div className="grid grid-cols-3 items-center p-2  rounded-lg ">
                            <p className="text-center mx-5 px-4">{calorie.dateConsumed}</p>
                            <p className="text-center mx-5 text-xl px-4" >{calorie.caloriesConsumed} kcal</p>
                            <button className="btn btn-sm mx-5 ">Edit</button>
                        </div>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default CaloriePage