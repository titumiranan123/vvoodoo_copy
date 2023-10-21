// Get all the elements by their IDs
const showPageButtons = document.querySelectorAll(".showPageButton");
const closePageButton = document.getElementById("closePageButton");
const centeredPage = document.getElementById("centeredPage");

// Add an event listener to each "Show Page" button
showPageButtons.forEach(button => {
    button.addEventListener("click", function () {
        centeredPage.classList.remove("display_hidden");
    });
});

// Add an event listener to the "Close Page" button
closePageButton.addEventListener("click", function () {
    centeredPage.classList.add("display_hidden");
});
