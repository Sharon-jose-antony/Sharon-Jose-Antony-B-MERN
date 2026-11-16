
// ==========================================
// DAY 3 - JAVASCRIPT TASK MANAGER
// ==========================================

// 1. VARIABLES AND DATA TYPES

const name = "Sharon";
let age = 19;
const isStudent = true;
const emptyValue = null;
let undefinedValue;

console.log("----- DATA TYPES -----");

console.log(name, typeof name);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);
console.log(emptyValue, typeof emptyValue);
console.log(undefinedValue, typeof undefinedValue);


// 2. OBJECTS

console.log("\n----- OBJECTS -----");

const user = {
    name: "Sharon",
    email: "sharon@gmail.com",
    role: "Developer"
};

// Object destructuring
const { name: userName, email, role } = user;

console.log(userName);
console.log(email);
console.log(role);

// Spread operator
const updatedUser = {
    ...user,
    role: "JavaScript Developer"
};

console.log("Original User:", user);
console.log("Updated User:", updatedUser);


// 3. ARRAYS

console.log("\n----- TASK ARRAY -----");

let tasks = [
    { id: 1, title: "Learn JavaScript", done: false },
    { id: 2, title: "Practice HTML", done: true },
    { id: 3, title: "Learn CSS", done: false }
];

console.log(tasks);


// 4. FUNCTIONS (ARROW FUNCTIONS)

// Add a new task
const addTask = (title) => {
    const newTask = {
        id: tasks.length > 0
            ? Math.max(...tasks.map(task => task.id)) + 1
            : 1,
        title: title,
        done: false
    };

    tasks.push(newTask);

    return newTask;
};


// Delete a task
const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);

    return tasks;
};


// Mark a task as completed
const markDone = (id) => {
    tasks = tasks.map(task =>
        task.id === id
            ? { ...task, done: true }
            : task
    );

    return tasks;
};


// Find a task using ID
const getTaskById = (id) => {
    return tasks.find(task => task.id === id);
};


// Get pending tasks
const getPendingTasks = () => {
    return tasks.filter(task => task.done === false);
};


// Get all task titles
const getTaskTitles = () => {
    return tasks.map(task => task.title);
};


// BONUS: Get task summary
const getTaskSummary = () => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.done).length;
    const pending = tasks.filter(task => !task.done).length;

    return { total, completed, pending };
};


// 5. TESTING ALL FUNCTIONS

console.log("\n----- ADD TASK -----");
console.log(addTask("Learn Node.js"));

console.log("\n----- MARK TASK DONE -----");
console.log(markDone(1));

console.log("\n----- GET TASK BY ID -----");
console.log(getTaskById(2));

console.log("\n----- GET PENDING TASKS -----");
console.log(getPendingTasks());

console.log("\n----- GET TASK TITLES -----");
console.log(getTaskTitles());

console.log("\n----- DELETE TASK -----");
console.log(deleteTask(2));

console.log("\n----- TASK SUMMARY -----");

console.log(getTaskSummary());

console.log("\n----- FINAL TASK LIST -----");
console.log(tasks);
