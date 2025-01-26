document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Dummy validation (replace this with actual logic)
    if (email === "test@example.com" && password === "password") {
      // Store the logged-in state
      localStorage.setItem("loggedIn", "true");
  
      // Redirect to the dashboard page
      window.location.href = "dashboard.html"; // Ensure this is the correct path
    } else {
      alert("Invalid credentials!");
    }
  });
  