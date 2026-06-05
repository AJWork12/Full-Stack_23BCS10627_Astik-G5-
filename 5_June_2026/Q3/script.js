const input = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const message = document.getElementById("message");

input.addEventListener("change",(e)=>{

    const file = e.target.files[0];

    if(!file) return;

    if(!file.type.startsWith("image/")){
        message.textContent = "Only image files allowed";
        return;
    }

    if(file.size > 2 * 1024 * 1024){
        message.textContent = "Image must be under 2MB";
        return;
    }

    message.textContent = "";

    const reader = new FileReader();

    reader.onload = function(event){
        preview.src = event.target.result;
    };

    reader.readAsDataURL(file);
});