const feed = document.getElementById("feed");

let count = 1;

function loadPosts(){

    for(let i=0;i<5;i++){

        const post = document.createElement("div");
        post.className = "post";
        post.innerHTML = `
            <h3>Post ${count}</h3>
            <p>Instagram content here</p>
        `;

        feed.appendChild(post);
        count++;
    }
}

loadPosts();

window.addEventListener("scroll",()=>{

    if(
        window.innerHeight + window.scrollY
        >= document.body.offsetHeight - 100
    ){
        loadPosts();
    }
});

document.getElementById("toggle")
.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
});