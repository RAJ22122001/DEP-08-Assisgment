const tasks=[
    {taskName:"Write report",completed:true,priority:2 },
     {taskName:"Attend meeting",completed:false,priority:3},
     {taskName:"Fix bug",completed:false,priority:1},
     {taskName:"Update website",completed:true,priority:4}

];

const high_priority= tasks.find(task=>task.priority<3);
console.log("Here id High Priority Task" ,high_priority);
const first_task_notdone=tasks.findIndex(task=>!task.completed);
console.log("first index of Uncompleted Task",first_task_notdone);
const completed_count=tasks.reduce((count,task)=>task.completed?count+1:count,0);
console.log("Completed Task",completed_count);

tasks.forEach(task=>{
    console.log("Task Name",task.taskName)
});