let AddTask = document.getElementById('AddTask');
AddTask.addEventListener('click',function(){
  
    let EnterTask = document.getElementById('EnterTask') ;
    EnterTask.style.display = 'block';
})

let SetTask = document.getElementById('SetTask');

const ListOfTasks = document.getElementById('ListOfTasks');
var buttonIDcount =0;
var rowcount = 0;
var i=0;

SetTask.addEventListener('click',function(){
    inputBox = document.getElementById('inputBox');
    date = document.getElementById('date');
    rowcount+=1;
    i=i+1;  
    let newrow = document.createElement("tr");
    newrow.className = 'row'
    newrow.id = `row-${rowcount}`
    x = newrow.id
    console.log(newrow.id)
  
   
    if(i>0){
        ListOfTasks.append(newrow)
    }
    let taskname = document.createElement("td");
    var inputValue = inputBox.value.trim();
    let dateValue = date.value; 
    
    
    
    
    console.log(dateValue)
    if(inputValue !== "" && !dateValue === false){
      newrow.appendChild(taskname);
    let taskdate = document.createElement("td");
   
      taskname.innerHTML = inputBox.value;
      taskname.id = `row-${rowcount}`
      taskdate.innerHTML = date.value;
      taskdate.id = `row-${rowcount}`;
      newrow.appendChild(taskdate);


      let DeleteButton = document.createElement("button");
      let taskdelete = document.createElement("td");
      const DeleteButID = `row-${rowcount}`
      taskdelete.id = DeleteButID;
   
      
      DeleteButton.id = DeleteButID;
   
      const DeleteButClass = 'DeleteButtonClass' 
      DeleteButton.className = DeleteButClass;
      DeleteButton.textContent = "Delete Task";
      DeleteButton.style.backgroundColor = 'green'
     
      newrow.appendChild(taskdelete);
      taskdelete.appendChild(DeleteButton)
      
      }
    else if(inputValue === "" && !dateValue){
        alert("Please enter the task and date")
      }
    else if(!dateValue && inputValue !== ""){
      alert("Please enter the date")
    }
    else{
      alert("PLease enter the task")
    }

   
    let deleteButtons = document.querySelectorAll('.DeleteButtonClass');
    
    deleteButtons.forEach(function(DeleteButton) { 
      DeleteButton.addEventListener('click', function(event) {
      
       
        var clickedElement = event.target;
        var elementId = clickedElement.id; 
        const element = document.getElementById(elementId);
          element.parentNode.removeChild(element);
     

      });
    });
    
  
  
    
    let EnterTask = document.getElementById('EnterTask') ;
    EnterTask.style.display = 'none';
    inputBox.value = "";
    date.value = "";

    
})
