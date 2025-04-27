//your code here!
// Select the container where the list items are
const list = document.getElementById('list');

// Function to add list items
function addListItems(count) {
    for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${list.children.length + 1}`;
        list.appendChild(li);
    }
}

// Add 10 items initially
addListItems(10);

// Listen for scroll event
window.addEventListener('scroll', () => {
    // Check if user reached bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        addListItems(2); // Add 2 more items
    }
});

