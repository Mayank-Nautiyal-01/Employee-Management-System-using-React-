import { useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeDashboard from "./components/Dashboard/EmployeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import { setLocalStorage } from "./utils/localStorage"; // Only this function is needed

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // useEffect(() => {
  //   setLocalStorage(); // Initialize local storage data if not set
  //   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    
  //   if (loggedInUser) {
  //     setUser(loggedInUser.role);
      
  //     if (loggedInUser.role === "employee") {
  //       const employees = JSON.parse(localStorage.getItem("employees")) || [];
  //       const employee = employees.find((e) => e.email === loggedInUser.email);
  //       setLoggedInUserData(employee || null);
  //     }
  //   }
  // }, []);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
    if(loggedInUser){
      const userData=loggedInUser;
      setUser(userData.role)
      setLoggedInUserData(userData.data);
    }
  },[])

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else {
      const employees = JSON.parse(localStorage.getItem("employees")) || [];
      const employee = employees.find((e) => e.email === email && e.password === password);
      
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", email: employee.email ,data:employee}));
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : (
        <EmployeDashboard data={loggedInUserData} changeUser={setUser} />
      )}
    </>
  );
}

export default App;
