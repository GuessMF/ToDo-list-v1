function addNote() {
  let newNote = document.createElement("p");
  let deleteButt = document.createElement("button");
  let editButt = document.createElement("button");
  let textSpan = document.createElement("span");

  // newNote.innerHTML = input.value;
  newNote.id = `${Math.random() + 1}`;

  deleteButt.classList = "deleteButt";
  deleteButt.id = newNote.id;

  editButt.id = newNote.id;
  editButt.classList = "editButt";

  textSpan.classList = "textSpan";
  textSpan.textContent = input.value;
  newNote.prepend(textSpan);
  newNote.prepend(editButt);
  newNote.prepend(deleteButt);

  todo.append(newNote);
  input.value = "";
}
todo.addEventListener("click", (event) => {
  if (event.target.className == "deleteButt") {
    let clicked = document.getElementById(event.target.id);
    clicked.classList = "deleted";
    setTimeout(() => {
      clicked.remove();
    }, 500);
    return;
  }

  if (event.target.className == "editButt") {
    let clicked = document.getElementById(event.target.id);
    let prevText = clicked.textContent;
    let editInput = document.createElement("input");
    let btnClicked = false;
    let newText;

    editInput.classList = "editInput";
    editInput.value = prevText;

    btnClicked = true;
    event.target.parentNode.children[2].textContent = "";
    event.target.parentNode.append(editInput);

    window.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        // event.target.parentNode.remove(editInput);
        event.target.parentNode.children[2].textContent = newText;
      }
    });

    return;
  }
});
