const textBox = document.getElementById("text-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(textBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        
        // Create a text area element to display the typed-in information
        let taskTextArea = document.createElement("textarea");
        taskTextArea.value = textBox.value;
        taskTextArea.readOnly = true; // Make the text area read-only
        taskTextArea.style.width = "50%"; // Set the width of the text area to 70%
        taskTextArea.style.height = "20px"; // Set the height of the text area to 20px
        taskTextArea.style.fontSize = "12px"; // Set the font size of the text area to 12px
        taskTextArea.style.padding = "5px"; // Add some padding to the text area
        taskTextArea.style.borderRadius = "5px"; // Add a border radius to the text area
        taskTextArea.style.border = "1px solid #ccc";

        let markAsDoneButton = document.createElement("button");
        markAsDoneButton.innerHTML = "Mark as Done";
        markAsDoneButton.className = "mark-as-done-button"; // Add a class for styling
        
        // Add an event listener to the mark as done button
        markAsDoneButton.addEventListener("click", function(){
            taskTextArea.style.textDecoration = "line-through"; // Strike through the text when marked as done
        });
        
        // Create a button element for the delete button
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.className = "delete-button"; // Add a class for styling
        
        // Add an event listener to the delete button
        deleteButton.addEventListener("click", function(){
            li.remove(); // Remove the list item when the delete button is clicked
        });
        
        // Add the text area, mark as done button, and delete button to the list item
        li.appendChild(taskTextArea);
        li.appendChild(markAsDoneButton);
        li.appendChild(deleteButton);
        
        // Add some margin to the delete button to create a gap
        deleteButton.style.marginLeft = "10px";
        
        // Add the list item to the list container
        listContainer.appendChild(li);
    }
    textBox.value = ""; // Clear the text box
}








