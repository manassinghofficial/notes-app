const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

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
    `;
    main.appendChild(note)

    note.querySelector('.delete').addEventListener('click',function(){
        note.remove()
    })

    note.querySelector('.save').addEventListener('click',function(){
        saveNotes()
    })
};

const saveNotes = () =>{
    const notes = document.querySelectorAll('.note textarea')

}