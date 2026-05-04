// DARK MODE
const toggle = document.getElementById("themeToggle");

function loadTheme() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        if (toggle) toggle.checked = true;
    }
}

if (toggle) {
    toggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark-mode") ? "dark" : "light"
        );
    });
}

window.onload = loadTheme;

// ACHAT
function acheter() {
    window.location.href = "https://paypal.com";
}

// AFFILIATION
function acheterProduit() {
    window.location.href = "https://jumia.com";
}

// COMPARATEUR
function comparer() {
    let p1 = document.getElementById("phone1").value;
    let p2 = document.getElementById("phone2").value;

    document.getElementById("resultat").innerText =
        p1 + " vs " + p2 + " : Compare les caractéristiques.";
}
