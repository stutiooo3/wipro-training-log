function checkUser() {
    const u = document.getElementById("user").value;
    const p = document.getElementById("pass").value;

    if (u === "student" && p === "1234") {
        alert("Welcome!");
        window.location.href = "home.html";
    } else {
        alert("Wrong credentials!");
    }
}