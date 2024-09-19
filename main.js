

function toggleDarkMode() {
    var body = document.getElementById("body");
    var button = document.getElementById("darkModeButton");


    body.classList.toggle("dark-mode");


    if (body.classList.contains("dark-mode")) {
        button.innerHTML = "Light Mode-ni yoqish";
    } else {
        button.innerHTML = "Dark Mode-ni yoqish";
    }
}
