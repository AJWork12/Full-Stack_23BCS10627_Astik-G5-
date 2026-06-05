const data = [];

for(let i=1;i<=50;i++){
    data.push("Product " + i);
}

const itemsPerPage = 10;
let currentPage = 1;

function displayPage(page){
    currentPage = page;

    const itemsDiv = document.getElementById("items");
    const paginationDiv = document.getElementById("pagination");

    itemsDiv.innerHTML = "";
    paginationDiv.innerHTML = "";

    const start = (page-1) * itemsPerPage;
    const end = start + itemsPerPage;

    data.slice(start,end).forEach(item=>{
        itemsDiv.innerHTML += `<div class="item">${item}</div>`;
    });

    const totalPages = Math.ceil(data.length/itemsPerPage);

    const prev = document.createElement("button");
    prev.textContent = "Previous";
    prev.disabled = page===1;
    prev.onclick = ()=>displayPage(page-1);
    paginationDiv.appendChild(prev);

    for(let i=1;i<=totalPages;i++){
        const btn = document.createElement("button");
        btn.textContent = i;

        if(i===page){
            btn.classList.add("active");
        }

        btn.onclick = ()=>displayPage(i);
        paginationDiv.appendChild(btn);
    }

    const next = document.createElement("button");
    next.textContent = "Next";
    next.disabled = page===totalPages;
    next.onclick = ()=>displayPage(page+1);
    paginationDiv.appendChild(next);
}

displayPage(1);