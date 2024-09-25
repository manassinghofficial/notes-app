const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

const saveNotes = () => {
  const notes = document.querySelectorAll(".note textarea");
  const data = [];

  // Collect all textarea values
  for (let element of notes) {
    data.push(element.value);
  }
  
  if(data.length == 0){
    localStorage.removeItem('notes')
  }else{// Save data to localStorage
    localStorage.setItem('notes',JSON.stringify(data))
  }

};

addBtn.addEventListener("click", function () {
  addNote();
});

/* <div class="note">
   <div class="tool">
      <img src="svg/save.svg" alt="" />
      <img src="svg/delete.svg" alt="" />
   </div>
   <textarea></textarea>
</div> */

const addNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="tool">
       <img class="save" src="svg/save.svg"/>
       <img class="delete" src="svg/delete.svg"/>
    </div>
    <textarea>${text}</textarea>
  `;

  // Add delete functionality
  note.querySelector(".delete").addEventListener("click", function () {
    note.remove();
    saveNotes(); // Save after deleting a note
  });

  // Add save functionality
  note.querySelector(".save").addEventListener("click", function () {
    saveNotes(); // Save when clicking the save button
  });

  main.appendChild(note);
  saveNotes(); // Save whenever a new note is added
};

// Immediately invoked function to load notes from localStorage on page load
(function () {
  const lsNotes = JSON.parse(localStorage.getItem("notes")) || []; // Handle case when localStorage is empty

  // Loop through saved notes and add them
  for (const element of lsNotes) {
    addNote(element); // Pass the saved text to the addNote function
  }
  if(lsNotes.length ===0){
    localStorage.removeItem('notes')
  }else{
    addNote()
  }
}
)();
