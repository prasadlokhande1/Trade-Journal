document.addEventListener("DOMContentLoaded", function () {
    // Set Current Date
    document.getElementById("current-date").textContent = new Date().toDateString();

    // Dark Mode Toggle with Local Storage
    const themeToggle = document.getElementById("theme-toggle");
    const isDarkMode = localStorage.getItem("dark-mode") === "enabled";

    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", function () {
        if (this.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "disabled");
        }
    });

    // Update P&L Status Box and Bar
    function updatePLStatus(profit) {
        let progressBar = document.getElementById("progress-bar");
        let plBox = document.getElementById("pl-box");
        let plText = document.getElementById("pl-text");

        // Update the P&L text
        plText.textContent = `P&L: $${profit}`;

        // Change colors based on profit/loss
        if (profit >= 0) {
            progressBar.style.width = Math.min(profit, 100) + "%";
            progressBar.style.backgroundColor = "green";
            plBox.style.backgroundColor = "green";
        } else {
            progressBar.style.width = Math.min(Math.abs(profit), 100) + "%";
            progressBar.style.backgroundColor = "red";
            plBox.style.backgroundColor = "red";
        }
    }

    // Example: Change this value to test profit/loss
    updatePLStatus(-30); // Set to negative to test red color

    // Logout Function
    document.getElementById("logout").addEventListener("click", function () {
        alert("Logging out...");
    });
});
