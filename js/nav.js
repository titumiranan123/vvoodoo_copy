// JavaScript for handling dropdown menu on hover

const allProducts = document.getElementById("allProducts");
const dropdownContent = allProducts.querySelector(".dropdown-content");
const bar = document.getElementById("bar")
const menu = document.getElementById("menu")

allProducts.addEventListener("mouseover", () => {
    dropdownContent.style.display = "block";
});

allProducts.addEventListener("mouseout", () => {
    dropdownContent.style.display = "none";
});
bar.addEventListener("click", () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.add('visible')
        menu.classList.remove('hidden')
    }
    else {
        menu.classList.add('hidden')
        menu.classList.remove('visible')
    }

    console.log("I am clicked")
})

// slider 

