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

export const fetchUserById = async (id) => {
    const response = await fetch(`http://localhost:8080/users/${id}`);
    if (!response.ok) {
      throw new Error('Error fetching user');
    }
    return response.json();
  };

export const fetchCaloriesByUserId = async (id) => {
    const response = await fetch(`http://localhost:8080/calories/user/${id}`);
    if (!response.ok) {
      throw new Error('Error fetching user');
    }
    return response.json();
  };

export const fetchWeightsByUserId = async (id) => {
    const response = await fetch(`http://localhost:8080/weights/user/${id}`);
    if (!response.ok) {
      throw new Error('Error fetching user');
    }
    return response.json();
  };
  
export const fetchUserBMI = async (id) => {
  const response = await fetch(`http://localhost:8080/users/${id}/bmi`);
  if (!response.ok) {
    throw new Error('Error fetching users BMI');
  }
  return response.json();
};

export const addCalorieToUser = async (calorieData) => {
  const response = await fetch(`http://localhost:8080/calories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(calorieData),
  });

  if (!response.ok) {
    throw new Error('Error adding calorie reading');
  }

  return response.json();
};

export const addWeightToUser = async (weightData) => {
  const response = await fetch(`http://localhost:8080/weights`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(weightData),
  });

  if (!response.ok) {
    throw new Error('Error adding weight reading');
  }

  return response.json();
};