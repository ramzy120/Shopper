document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const newUser = {
    username,
    email,
    password
  };

  // Send POST request to create a new user
  fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("User created:", data);
      alert("Signup successful! You can now log in.");
      window.location.href = "login.html"; // Redirect to login page
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Signup failed. Try again.");
    });
});
