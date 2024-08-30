import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addCalorieToUser } from "../api";

const CalorieAddModal = ( { userId } ) => {


    const [dateConsumed, setDateConsumed] = useState('');
    const [caloriesConsumed, setCaloriesConsumed] = useState('');

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: addCalorieToUser,
        onSuccess: () => {
            setDateConsumed('');
            setCaloriesConsumed('');
            queryClient.invalidateQueries(['calories']);
            document.getElementById('calorie_add_modal').close()
        },
        onError: (error) => {
            alert(`Error: ${error.message}`);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({
            userId: parseInt(userId),
            dateConsumed,
            caloriesConsumed: parseInt(caloriesConsumed)
        });
    };

    return(
        <>
            <button className="btn" onClick={ () => document.getElementById('calorie_add_modal').showModal()}>Add New Calorie Reading</button>
            <dialog id="calorie_add_modal" className="modal">
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">New Calorie Reading:</h3>
                {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
                <form onSubmit={handleSubmit}>
                    <input
                            type="date"
                            value={dateConsumed}
                            onChange={(e) => setDateConsumed(e.target.value)}
                            required
                        />
                        <input 
                            type="number" 
                            value={caloriesConsumed} 
                            onChange={(e) => setCaloriesConsumed(e.target.value)} 
                            placeholder="Calories"
                            required 
                        />
                    <button className='btn' type="submit" disabled={mutation.isLoading}>
                        Add Calories
                    </button>
                </form>
            </div>
            </dialog>
        </>
    )
} 

export default CalorieAddModal