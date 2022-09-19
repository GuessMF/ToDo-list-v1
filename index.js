function addNote() {
  let newNote = document.createElement("p");
  let newNoteCheck = document.createElement("button");

  newNote.innerHTML = input.value;
  newNote.id = `${Math.random() + 1}`;

  newNoteCheck.classList = "ggg";
  newNoteCheck.id = newNote.id;

  newNote.prepend(newNoteCheck);
  todo.append(newNote);
  input.value = "";
}
todo.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") {
    log("returned");
    return;
  }
  let clicked = document.getElementById(event.target.id);

  clicked.classList = "deleted";
  setTimeout(() => {
    clicked.remove();
  }, 500);
  // clicked.remove();
});
