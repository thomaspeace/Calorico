export const fetchUsers = async () => {
    const response = await fetch('http://localhost:8080/users');
    if (!response.ok) {
      throw new Error('Error fetching users');
    }
    return response.json();
};

export const fetchWeights = async () => {
    const response = await fetch('http://localhost:8080/weights');
    if (!response.ok) {
      throw new Error('Error fetching weights');
    }
    return response.json();
};

export const fetchCalories = async () => {
    const response = await fetch('http://localhost:8080/calories');
    if (!response.ok) {
      throw new Error('Error fetching calories');
    }
    return response.json();
};