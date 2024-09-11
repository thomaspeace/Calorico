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
      throw new Error('Error fetching calories data');
    }  
    const data = await response.json();
    return data.sort((a, b) => new Date(b.dateConsumed) - new Date(a.dateConsumed));
  };
  
  export const fetchWeightsByUserId = async (id) => {
    const response = await fetch(`http://localhost:8080/weights/user/${id}`);
    if (!response.ok) {
      throw new Error('Error fetching weights data');
    } 
    const data = await response.json();
    return data.sort((a, b) => new Date(b.dateWeighed) - new Date(a.dateWeighed));
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

export const fetchUserMaintenanceCalories = async (id) => {
  const response = await fetch(`http://localhost:8080/users/${id}/maintenanceCalories`);
  if (!response.ok) {
    throw new Error('Error fetching users maintenance calories');
  }
  return response.json();
};

export const updateWeight = async (weightId, weightData) => {
  const response = await fetch(`http://localhost:8080/weights/update/${weightId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(weightData),
  });
  if (!response.ok) {
    throw new Error('Error updating weight reading');
  }
  return response.json();
};

export const updateCalorie = async (calorieId, calorieData) => {
  const response = await fetch(`http://localhost:8080/calories/update/${calorieId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(calorieData),
  });
  if (!response.ok) {
    throw new Error('Error updating calorie reading');
  }
  return response.json();
};

const fetchPaginatedCaloriesByUserId = async (userId, page, size) => {
  const response = await fetch(`/calories/paginated/user/${userId}?page=${page}&size=${size}`);
  if (!response.ok) {
      throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log('Fetched Data:', data);
  return data;
};


const fetchPaginatedWeightsByUserId = async (userId, page, size) => {
  const response = await fetch(`/weights/paginated/user/${userId}?page=${page}&size=${size}`);
  if (!response.ok) {
      throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log('Fetched Data:', data);
  return data;
};