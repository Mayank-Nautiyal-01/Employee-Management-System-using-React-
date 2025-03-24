import { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserdata] = useState({
    employees: [],
    admin: null,
  });

  // Load data from localStorage on mount
  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setUserdata({ employees, admin });
  }, []);

  // Update localStorage whenever userData changes
  useEffect(() => {
    setLocalStorage(userData);
  }, [userData]);

  // Function to update employees (For task assignment)
  const updateEmployees = (updatedEmployees) => {
    setUserdata((prev) => ({
      ...prev,
      employees: updatedEmployees,
    }));
  };

  // Function to assign a task
  const assignTaskToEmployee = (employeeId, task) => {
    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.id === employeeId) {
        return {
          ...emp,
          tasks: [...(emp.tasks || []), task],
        };
      }
      return emp;
    });

    updateEmployees(updatedEmployees);
  };

  return (
    <AuthContext.Provider value={{ ...userData, assignTaskToEmployee }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
