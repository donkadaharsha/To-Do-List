let SetTask = document.getElementById('SetTask');
const ListOfTasks = document.getElementById('ListOfTasks');
let buttonIDcount = 0;
let rowcount = 0;
var i = 0;

SetTask.addEventListener('click', function() {
  inputBox = document.getElementById('inputBox');
  date = document.getElementById('date');

  let newrow = document.createElement("tr");
  newrow.className = 'row';
  newrow.id = `row-${rowcount}`;
  rowcount += 1;
  console.log(newrow.id)

  let taskname = document.createElement("td");
  taskname.innerHTML = inputBox.value;
  newrow.appendChild(taskname);

  let taskdate = document.createElement("td");
  taskdate.innerHTML = date.value;
  newrow.appendChild(taskdate);

  let ModifyButton = document.createElement("button");
  ModifyButton.textContent = "Modify";
  newrow.appendChild(ModifyButton);

  let DeleteButton = document.createElement("button");
  const DeleteButID = `DeleteButtonID-${buttonIDcount}`;
  buttonIDcount += 1;
  DeleteButton.id = DeleteButID;
  console.log(DeleteButID);
  const DeleteButClass = 'DeleteButtonClass';
  DeleteButton.className = DeleteButClass;
  DeleteButton.textContent = "Delete";
  newrow.appendChild(DeleteButton);

  // Add event listener to delete button
  DeleteButton.addEventListener('click', function() {
    const rowId = newrow.id.split('-')[1]; // Extract row ID from the row's ID
    console.log(`Clicked delete button in row with ID: ${rowId}`);
    const rowToDelete = document.getElementById(`row-${rowId}`);
    rowToDelete.remove();
  });

  ListOfTasks.appendChild(newrow);

  i = i + 1;

  let EnterTask = document.getElementById('EnterTask');
  EnterTask.style.display = 'none';
  inputBox.value = "";
  date.value = "";
});
