import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {AddTask} from "./components/AddTask";
//import task from "./components/Task";

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Register for Classes UCR',
            day: 'Nov 6th at 1:30pm',
            reminder: true
        },
        {
            id: 3,
            text: "Buy Ali's Gift",
            day: "Dec 1st at 2:30pm",
            reminder: false,
        },
    ])

    //Add task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task}
        setTasks([...tasks, newTask])

    }


    //Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //toggle reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                ? {...task, reminder: !task.reminder} : task))
    }


    return (
        <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)}
         showAdd={showAddTask}/>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask}
                onToggle={toggleReminder}/>
            : "No Tasks to Show"}
        </div>
    );
}

export default App;
