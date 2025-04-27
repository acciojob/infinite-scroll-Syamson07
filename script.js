// Select the list element
const list = document.getElementById("infi-list");

// Variable to keep track of the number of items
let itemCount = 1;

// Function to add 2 new list items with unique names
function addListItems() {
    for (let i = 0; i < 2; i++) {
        const newItem = document.createElement("li");
        newItem.textContent = "Item " + itemCount;
        list.appendChild(newItem);
        itemCount++;
    }
}

// Event listener for scroll
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        addListItems();
    }
});

// Initially adding 2 items to the list
for (let i = 0; i < 2; i++) {
    const newItem = document.createElement("li");
    newItem.textContent = "Item " + itemCount;
    list.appendChild(newItem);
    itemCount++;
}
