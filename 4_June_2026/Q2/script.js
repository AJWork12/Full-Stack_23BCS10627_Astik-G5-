const message = document.getElementById("message");

async function fetchWithRetry(url, retries = 3) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed");
        }

        return await response.json();
    } catch (error) {
        if (retries > 0) {
            return fetchWithRetry(url, retries - 1);
        }

        throw error;
    }
}

async function fetchData() {
    try {
        message.textContent = "Loading...";

        const data = await fetchWithRetry(
            "https://jsonplaceholder.typicode.com/users"
        );

        message.textContent =
            "Success! Users fetched: " + data.length;
    } catch {
        message.textContent =
            "Failed after 3 retries.";
    }
}