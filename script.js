let users = ["Ardit", "Elira"];

function renderUsers() {
  let list = document.getElementById("userList");
  list.innerHTML = "";

  users.forEach((user, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${user}
      <button onclick="deleteUser(${index})">X</button>
    `;
    list.appendChild(li);
  });
}

function addUser() {
  let input = document.getElementById("username");
  let name = input.value;

  if (name !== "") {
    users.push(name);
    input.value = "";
    renderUsers();
  }
}

function deleteUser(index) {
  users.splice(index, 1);
  renderUsers();
}

renderUsers();
