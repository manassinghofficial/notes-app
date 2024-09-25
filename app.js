const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");


const saveNotes = () => {
  const notes = document.querySelectorAll(".note textarea");
  const data = [];
  console.log(notes)
   for (let element of notes) {
        data.push(element.value)
  }
  // console.log(data)
  localStorage.setItem('notes', JSON.stringify(data))
};

addBtn.addEventListener("click", function () {
  addNote();
});

/*<div class="note">
 <div class="tool">
    <img src="svg/save.svg" alt="" />
    <img src="svg/delete.svg" alt="" />
</div>
<textarea></textarea>
</div> */

const addNote = () => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="tool">
       <img class="save" src="svg/save.svg"/>
       <img class="delete"src="svg/delete.svg"/>
    </div>
      <textarea></textarea>
    `;
    
    note.querySelector(".delete").addEventListener("click", function () {
      note.remove();
    });
    
    note.querySelector(".save").addEventListener("click", function () {
      saveNotes();
    });

    
    main.appendChild(note);
    saveNotes();


};


