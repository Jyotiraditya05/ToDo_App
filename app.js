let ToDo = [];

let req = prompt("Please Enter Your Request !");

while (true) {
    if (req == "quit") {
        console.log("quiting app");
        break;
    }
    if (req == "list") {
        console.log("---------------");
        for (let i = 0; i < ToDo.length; i++) {
            console.log(i, ToDo[i]);
         }
        console.log("---------------");
    } else if(req == "add"){
        let task = prompt("Please Enter the Task you want to add !");
        ToDo.push(task);
        console.log("Task Added !!");
        
    } else if (req == "delete"){
        let index = prompt("Please Enter the Task Index !!");
        ToDo.splice(index , 1);
        console.log("Task Deleted !!");

    }  else{
        console.log("Wrong Request !!");
        
    }
    req = prompt("Please Enter Your Request !");
}