import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect, useRef } from "react";
import { updateCalorie } from "../api";

const CalorieEditModal = ({ calorie }) => {
    const [dateConsumed, setDateConsumed] = useState('');
    const [caloriesConsumed, setCaloriesConsumed] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const queryClient = useQueryClient();
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen && calorie) {
            setDateConsumed(calorie.dateConsumed || '');
            setCaloriesConsumed(calorie.caloriesConsumed || '');
        }
    }, [isOpen, calorie]);

    const handleModalOpen = () => {
        setIsOpen(true);
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    const handleModalClose = () => {
        setIsOpen(false);
        setDateConsumed('');
        setCaloriesConsumed('');
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    const mutation = useMutation({
        mutationFn: ({ calorieId, calorieData }) => updateCalorie(calorieId, calorieData),
        onSuccess: () => {
            queryClient.invalidateQueries(['calories']);
            handleModalClose();
        },
        onError: (error) => {
            alert(`Error: ${error.message}`);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({
            calorieId: calorie.id,
            calorieData: {
                dateConsumed,
                caloriesConsumed: parseFloat(caloriesConsumed),
            },
        });
    };

    return (
        <>
            <button className="btn btn-sm mx-5" onClick={handleModalOpen}>
                Edit
            </button>
            <dialog id="calorie_edit_modal" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <form method="dialog" onSubmit={(e) => e.preventDefault()}>
                        <button 
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={handleModalClose}
                        >
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg">Edit Calorie Reading:</h3>
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
                            placeholder="Weight"
                            step={0.1}
                            required
                        />
                        <button className="btn btn-sm mx-5" type="submit" disabled={mutation.isLoading}>
                            Submit Changes
                        </button>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default CalorieEditModal;
