    // Function to load content into the specified section
    function loadContent(url, targetId) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(targetId).innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    }

    // Add click event listeners to the list items
    document.querySelectorAll('.list-item a').forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior
            const targetId = 'content-section'; // ID of the section to load content
            const url = this.getAttribute('href');
            loadContent(url, targetId);
        });
    });

    // Load the default content (Teaching) when the page loads
    window.addEventListener('load', function () {
        const defaultUrl = document.querySelector('.list-item a.active').getAttribute('href');
        const targetId = 'content-section'; // ID of the section to load content
        loadContent(defaultUrl, targetId);
    });


// Function to handle hover and active states
function handleStates(item) {
    const listText = item.querySelector('.list-text');

    item.addEventListener('mouseenter', function () {
        listText.style.color = 'rgb(50, 121, 252)';
    });

    item.addEventListener('mouseleave', function () {
        if (!this.classList.contains('active')) {
            listText.style.color = 'gray';
        }
    });

    item.addEventListener('click', function () {
        // Remove 'active' class from all items and reset their colors
        listItems.forEach(function (item) {
            item.classList.remove('active');
            item.querySelector('.list-text').style.color = 'gray';
        });

        // Add 'active' class to the clicked item and set its color
        this.classList.add('active');
        listText.style.color = 'rgb(50, 121, 252)';
    });
}

// Add hover and active state handling to the list items
const listItems = document.querySelectorAll('.list-item a');
listItems.forEach(handleStates);

// Handle the default active state
const defaultActiveItem = document.querySelector('.list-item a.active');
if (defaultActiveItem) {
    defaultActiveItem.querySelector('.list-text').style.color = 'rgb(50, 121, 252)';
}
