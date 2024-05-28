//Odjava korisnika od prije
localStorage.removeItem('loggedInUser');

const usersInStorage = localStorage.getItem("registeredUsers");

const registeredUsers = usersInStorage ? JSON.parse(usersInStorage) : addDefaultUsers();

function addDefaultUsers() {
  const defaultUsers = [
    {
      username: "knjige123",
      password: "knjige123",
    },
    {
      username: "user123",
      password: "user123",
    },
    {
      username: "bookworm_a",
      password: "bookworm_a",
    },
    {
      username: "kamilica1",
      password: "kamilica1",
    },
    {
      username: "komarac3",
      password: "komarac3",
    }
  ];

  localStorage.setItem("registeredUsers", JSON.stringify(defaultUsers));

  return defaultUsers;
}

function login(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = registeredUsers.find((user) => user.username === username && user.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "successful_login.html";
  } else {
    alert("Pogrešno korisničko ime ili lozinka.");
  }
}
