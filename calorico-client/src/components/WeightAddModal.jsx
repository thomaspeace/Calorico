import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { addWeightToUser } from "../api";

const WeightAddModal = ( { userId } ) => {


    const [dateWeighed, setDateWeighed] = useState('');
    const [weightMetric, setWeightMetric] = useState('');

    const mutation = useMutation({
        mutationFn: addWeightToUser,
        onSuccess: () => {
            setDateWeighed('');
            setWeightMetric('');
        },
        onError: (error) => {
            alert(`Error: ${error.message}`);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ 
            userId: parseInt(userId),
            dateWeighed, 
            weightMetric: parseFloat(weightMetric) 
        });
    };

    return(
        <>
            <button className="btn" onClick={ () => document.getElementById('weight_add_modal').showModal()}>Add Weights Reading</button>
            <dialog id="weight_add_modal" className="modal">
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
                <form onSubmit={handleSubmit}>
                    <input 
                        type="date" 
                        value={dateWeighed} 
                        onChange={(e) => setDateWeighed(e.target.value)} 
                        required 
                    />
                    <input 
                        type="number" 
                        value={weightMetric} 
                        onChange={(e) => setWeightMetric(e.target.value)} 
                        placeholder="Weight"
                        step={0.1} 
                        required 
                    />
                    <button type="submit" disabled={mutation.isLoading}>
                        Add Weight
                    </button>
                </form>
            </div>
            </dialog>
        </>
    )
} 

export default WeightAddModal