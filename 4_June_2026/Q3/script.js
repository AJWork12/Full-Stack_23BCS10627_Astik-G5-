const data = [
    "Apple",
    "Amazon",
    "Google",
    "Netflix",
    "Meta",
    "Microsoft"
];

const input = document.getElementById("search");
const suggestions = document.getElementById("suggestions");

let current = -1;

input.addEventListener("input", () => {
    suggestions.innerHTML = "";

    const value = input.value.toLowerCase();

    const result = data.filter(item =>
        item.toLowerCase().includes(value)
    );

    result.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        suggestions.appendChild(li);
    });

    current = -1;
});

input.addEventListener("keydown", e => {
    const items = suggestions.querySelectorAll("li");

    if (e.key === "ArrowDown") {
        current++;
    }

    if (e.key === "ArrowUp") {
        current--;
    }

    if (e.key === "Enter" && current >= 0) {
        input.value = items[current].textContent;
        suggestions.innerHTML = "";
    }

    items.forEach(item => item.classList.remove("active"));

    if (current >= 0 && current < items.length) {
        items[current].classList.add("active");
    }
});