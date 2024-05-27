let List = [];

function add() {
  let task = document.querySelector('#input-box').value;
  if (task.length === 0) {
    alert('Please Enter To Do first!');
  } else {
    List.push({ data: task });
    document.querySelector('#input-box').value = '';
    update();
  }
}

document.querySelector('#add-btn').addEventListener("click", () => {
  add();
});

function update() {
  let taskContainer = document.querySelector('#task-container');
  taskContainer.innerHTML = '';
  for (let i = 0; i < List.length; i++) {
    let { data } = List[i];
    let taskHTML = `
      <div id="interDiv">
        <span>${data}</span>
        <span><button onclick="remove(${i})">X</button></span>
      </div>
    `;
    taskContainer.innerHTML += taskHTML;
  }
}

function remove(index) {
  List.splice(index, 1);
  update();
}
