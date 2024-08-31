import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect, useRef } from "react";
import { updateWeight } from "../api";

const WeightEditModal = ({ weight }) => {
    const [dateWeighed, setDateWeighed] = useState('');
    const [weightMetric, setWeightMetric] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const queryClient = useQueryClient();
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen && weight) {
            setDateWeighed(weight.dateWeighed || '');
            setWeightMetric(weight.weightMetric || '');
        }
    }, [isOpen, weight]);

    const handleModalOpen = () => {
        setIsOpen(true);
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    const handleModalClose = () => {
        setIsOpen(false);
        setDateWeighed('');
        setWeightMetric('');
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    const mutation = useMutation({
        mutationFn: ({ weightId, weightData }) => updateWeight(weightId, weightData),
        onSuccess: () => {
            queryClient.invalidateQueries(['weights']);
            handleModalClose();
        },
        onError: (error) => {
            alert(`Error: ${error.message}`);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({
            weightId: weight.id,
            weightData: {
                dateWeighed,
                weightMetric: parseFloat(weightMetric),
            },
        });
    };

    return (
        <>
            <button className="btn btn-sm mx-5" onClick={handleModalOpen}>
                Edit
            </button>
            <dialog id="weight_edit_modal" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <form method="dialog" onSubmit={(e) => e.preventDefault()}>
                        <button 
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={handleModalClose}
                        >
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg">Edit Weight Reading:</h3>
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
                        <button className='btn' type="submit" disabled={mutation.isLoading}>
                            Submit Changes
                        </button>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default WeightEditModal;
