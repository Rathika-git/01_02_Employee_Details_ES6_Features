const employees = [
  {
    id: "C101",
    name: "Varun",
    role: "Junior Web Developer",
    experience: "2 Years",
    payout: "25000",
  },
  {
    id: "C102",
    name: "Srinika",
    role: "Junior Web Developer",
    experience: "1 Year",
    payout: "20000",
  },
  {
    id: "C103",
    name: "Rakshitha",
    role: "Front End Developer",
    experience: "3 Years",
    payout: "30000",
  },
  {
    id: "C104",
    name: "Hema",
    role: "Junior Web Developer",
    experience: "3 Years",
    payout: "25000",
  },
  {
    id: "C105",
    name: "Deepak",
    role: "Front End Developer",
    experience: "4 Years",
    payout: "35000",
  },
  {
    id: "C106",
    name: "Sakthi",
    role: "Back End Developer",
    experience: "2 Years",
    payout: "30000",
  },
  {
    id: "C107",
    name: "Dakshan",
    role: "Senior Front End Developer",
    experience: "5 Years",
    payout: "45000",
  },
  {
    id: "C108",
    name: "Ananth",
    role: "BDE",
    experience: "2 Years",
    payout: "20000",
  },
  {
    id: "C109",
    name: "Sharaddha",
    role: "Business Associate",
    experience: "1 Year",
    payout: "15000",
  },
  {
    id: "C110",
    name: "Dinesh",
    role: "Tech Lead",
    experience: "4 Years",
    payout: "65000",
  },
];

//Function to get Employee Names
const getEmployeeNames = (data) => {
const employeeNames = data.map(({ name }) => name);
console.log("List of Employee Names:");
console.log(employeeNames);
};
getEmployeeNames(employees);

//Function to Display Employees working as Junior Web Developer
const displayJuniorWebDevelopers = (data) => {
const juniorWebDevelopers = data.filter(({ role }) => role === 'Junior Web Developer');
console.log("Junior Web Developers:");
console.table(juniorWebDevelopers);
};
displayJuniorWebDevelopers(employees);

//Function to count total Junior Web Developers
const countTotalJuniorWebDevelopers = (data) => {
const juniorWebDevelopers = data.filter(({ role }) => role === 'Junior Web Developer');
const totalJuniorWebDevelopers = juniorWebDevelopers.length;
console.log(`Total Junior Web Developers: ${totalJuniorWebDevelopers}`);
};
countTotalJuniorWebDevelopers(employees);

//Function to Display Employees with a payout between 25000 and 35000
const displayEmployeesInRange = (data) => {
const employeesInRange = data.filter(({ payout }) => parseInt(payout) >= 25000 && parseInt(payout) <= 35000);
const employeeNameAndRoleInRange = employeesInRange.map(({ name, role }) => ({ name, role }));
console.log("Employees within Salary Range (25000 to 35000):");
console.table(employeeNameAndRoleInRange);
};
displayEmployeesInRange(employees);

//Function to Display the senior Employee details
const displaySeniorEmployee = (data) => {
const seniorEmployee = data.reduce((prev, current) => (parseInt(prev.experience) > parseInt(current.experience) ? prev : current));
console.log("Senior Employee Details:");
console.table([seniorEmployee]);
};
displaySeniorEmployee(employees);