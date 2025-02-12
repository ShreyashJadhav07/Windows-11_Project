const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value.trim();

    if (input) {
        window.open("https://www.google.com/search?q=" + encodeURIComponent(input), "_blank");
        searchInput.value = ""; 
    } else {
        alert("Enter a valid search query.");
    }
}