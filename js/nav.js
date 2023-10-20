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
    if (menu.classList.contains('menu')) {
        menu.classList.add('mobile_menu')
        menu.classList.remove('menu')
    }
    else {
        menu.classList.add('menu')
        menu.classList.remove('mobile_menu')
    }

    console.log("I am clicked")
})

// slider 

