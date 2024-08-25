import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { addWeightToUser } from "../api";

const WeightForm = () => {

    const navigate = useNavigate();

    const { id } = useParams();
        
    const [dateWeighed, setDateWeighed] = useState('');
    const [weightMetric, setWeightMetric] = useState('');

    const mutation = useMutation({
        mutationFn: addWeightToUser,
        onSuccess: () => {
            setDateWeighed('');
            setWeightMetric('');
            navigate(`/weights/${id}`)
        },
        onError: (error) => {
            alert(`Error: ${error.message}`);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ 
            userId: parseInt(id),
            dateWeighed, 
            weightMetric: parseFloat(weightMetric) 
        });
    };

    return (
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
      )
}


export default WeightForm