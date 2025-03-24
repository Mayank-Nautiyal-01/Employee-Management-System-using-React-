const employees = [
  {
    "id": 1,
    "name": "Amit",
    "email": "emp1@example.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Design Homepage",
        "taskDescription": "Create a responsive homepage layout.",
        "taskDate": "2025-03-06",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix Navbar Bug",
        "taskDescription": "Resolve alignment issue in the navbar.",
        "taskDate": "2025-03-07",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Optimize Images",
        "taskDescription": "Reduce image sizes for faster loading.",
        "taskDate": "2025-03-08",
        "category": "Performance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "name": "Priya",
    "email": "emp2@example.com",
    "password": "123",
    "taskNumber": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Develop Login Page",
        "taskDescription": "Create login UI with validation.",
        "taskDate": "2025-03-06",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Set Up Database",
        "taskDescription": "Configure database schema for user authentication.",
        "taskDate": "2025-03-07",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "name": "Rahul",
    "email": "emp3@example.com",
    "password": "123",
    "taskNumber": {
      "active": 1,
      "newTask": 0,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Create API Endpoints",
        "taskDescription": "Develop REST APIs for user authentication.",
        "taskDate": "2025-03-06",
        "category": "Backend",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Integrate JWT",
        "taskDescription": "Implement JWT-based authentication.",
        "taskDate": "2025-03-08",
        "category": "Security",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "name": "Neha",
    "email": "emp4@example.com",
    "password": "123",
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Test Payment Gateway",
        "taskDescription": "Run test transactions to validate payments.",
        "taskDate": "2025-03-09",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix Checkout Page Bug",
        "taskDescription": "Resolve issues in the checkout process.",
        "taskDate": "2025-03-10",
        "category": "Bug Fixing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 5,
    "name": "Vikram",
    "email": "emp5@example.com",
    "password": "123",
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Write Documentation",
        "taskDescription": "Create a user guide for the project.",
        "taskDate": "2025-03-11",
        "category": "Documentation",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Prepare Deployment",
        "taskDescription": "Set up server for deployment.",
        "taskDate": "2025-03-12",
        "category": "DevOps",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "name": "Admin",
    "email": "admin@example.com",
    "password": "123"
  }
];

const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));  
  localStorage.setItem('admin', JSON.stringify(admin));
};

const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || []; // Ensure it is an array
  const admin = JSON.parse(localStorage.getItem("admin")) || []; // Ensure it is an array

  return { employees, admin };
};

export { setLocalStorage, getLocalStorage };
