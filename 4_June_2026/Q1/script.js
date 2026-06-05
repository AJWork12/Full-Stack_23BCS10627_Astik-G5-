const loading = document.getElementById("loading");
const usersDiv = document.getElementById("users");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
        loading.style.display = "none";

        users.forEach(user => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h3>${user.name}</h3>
                <p>${user.email}</p>
            `;

            usersDiv.appendChild(card);
        });
    });