// Select the correct list element
const list = document.getElementById('infi-list');

// Function to add list items
function addListItems(count) {
    for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${list.children.length + 1}`;
        list.appendChild(li);
    }
}

// Add 2 items initially (as per test case)
addListItems(2);

// Add 2 more items when user scrolls to bottom
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        addListItems(2);
    }
});
