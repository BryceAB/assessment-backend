const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");

const usersContainer = document.getElementById("users-container");
const form = document.querySelector("form");

const usersURL = "http://localhost:4000/api/users";

const usersCallback = ({ data: users }) => displayUsers(users);
const errCallback = (err) => console.log(err);

const getAllUsers = () =>
  axios.get(usersURL).then(usersCallback).catch(errCallback);
const createUser = (body) =>
  axios.post(usersURL, body).then(usersCallback).catch(errCallback);
const deleteUser = (id) =>
  axios.delete(`${usersURL}/${id}`).then(usersCallback).catch(errCallback);
const updateUser = (id, type) =>
  axios
    .put(`${usersURL}/${id}`, { type })
    .then(usersCallback)
    .catch(errCallback);

function submitHandler(element) {
  element.preventDefault();

  let firstName = document.querySelector("#firstName");
  let lastName = document.querySelector("#lastName");
  let age = document.querySelector("#age");

  let bodyObj = {
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
  };

  createUser(bodyObj);

  firstName.value = "";
  lastName.value = "";
  age.value = "";
}

function createUserCard(user) {
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");

  userCard.innerHTML = `<p class="name">${user.firstName} ${user.lastName}</p>
    <div class="age-container">
        <p class="age">${user.age}</p>
        <button onclick="updateUser(${user.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteUser(${user.id})">Delete</button>
    `;

  usersContainer.appendChild(userCard);
}

function displayUsers(arr) {
  usersContainer.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    createUserCard(arr[i]);
  }
}

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
form.addEventListener("submit", submitHandler);

getAllUsers();
