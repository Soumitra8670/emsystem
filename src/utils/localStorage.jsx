//localStorage.clear()
const employees = [
  {
      "id": 1,
      "firstName": "Arjun",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Design Homepage",
              "taskDescription": "Create the main landing page design.",
              "taskDate": "2025-01-15",
              "category": "Design",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Fix Navbar Bug",
              "taskDescription": "Resolve alignment issues in the navbar.",
              "taskDate": "2025-01-14",
              "category": "Development",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "taskTitle": "Optimize Images",
              "taskDescription": "Compress images to improve page load speed.",
              "taskDate": "2025-01-13",
              "category": "Optimization",
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true
          }
      ],
      "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 1
      }
  },
  {
      "id": 2,
      "firstName": "Rohan",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Set Up Database",
              "taskDescription": "Initialize and configure the database.",
              "taskDate": "2025-01-14",
              "category": "Database",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Write API Documentation",
              "taskDescription": "Document the API endpoints for developers.",
              "taskDate": "2025-01-12",
              "category": "Documentation",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 3,
      "firstName": "Priya",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Test User Signup",
              "taskDescription": "Perform QA testing on the signup module.",
              "taskDate": "2025-01-10",
              "category": "Testing",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Update Privacy Policy",
              "taskDescription": "Review and update the privacy policy document.",
              "taskDate": "2025-01-09",
              "category": "Legal",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "taskTitle": "Prepare Presentation",
              "taskDescription": "Create slides for the team meeting.",
              "taskDate": "2025-01-08",
              "category": "Management",
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true
          }
      ],
      "taskNumbers": {
          "active": 1,
          "newTask": 0,
          "completed": 1,
          "failed": 1
      }
  },
  {
      "id": 4,
      "firstName": "Anjali",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Conduct User Interviews",
              "taskDescription": "Interview 10 users for feedback on the beta version.",
              "taskDate": "2025-01-15",
              "category": "Research",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Analyze Sales Data",
              "taskDescription": "Review quarterly sales performance.",
              "taskDate": "2025-01-14",
              "category": "Analytics",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 5,
      "firstName": "Vikram",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Deploy New Features",
              "taskDescription": "Deploy the latest feature updates to production.",
              "taskDate": "2025-01-13",
              "category": "Development",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Fix Security Vulnerabilities",
              "taskDescription": "Address vulnerabilities identified in the security audit.",
              "taskDate": "2025-01-12",
              "category": "Security",
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true
          }
      ],
      "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 0,
          "failed": 1
      }
  }
];

const admin = [
  {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employees, admin };
};
