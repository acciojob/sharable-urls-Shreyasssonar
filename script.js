   const form = document.getElementById("urlForm");
        const nameInput = document.getElementById("name");
        const yearInput = document.getElementById("year");
        const urlElement = document.getElementById("url");

        // Add a submit event listener to the form
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the form from submitting and refreshing the page
            
            // Get the values from the input fields
            const name = nameInput.value;
            const year = yearInput.value;

            // Build the query string if at least one input field has a value
            const queryString = (name || year) ? `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}` : '';

            // Update the URL element with the new URL or hide it if there's no query string
            urlElement.textContent = queryString ? `https://localhost:8080/${queryString}` : '';

            // Clear the input fields
            nameInput.value = '';
            yearInput.value = '';
        });