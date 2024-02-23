const companyEmployees = {
    company: "TATA",
    location: "India",
    employees: [
        {
            id: 1,
            name: "Rina",
            position: "Software Engineer",
            department: "Engineering",
            salary: 80000
        },
        {
            id: 2,
            name: "Riya",
            position: "HR Manager",
            department: "Human Resources",
            salary: 75000
        },
        {
            id: 3,
            name: "Richa",
            position: "Project Engineer",
            department: "Product Management",
            salary: 70000
        }
    ]
};


console.log(companyEmployees.company); 
console.log(companyEmployees.employees[0].name); 
console.log(companyEmployees.employees[1].department); 
console.log(companyEmployees.employees[2].salary); 
