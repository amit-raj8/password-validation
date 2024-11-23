const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requimentList = document.querySelectorAll(".requiment-list li")

const requiment = [
    {regex: /.{8,}/, index: 0},
    {regex: /{0-9,}/, index: 1},
    {regex: /{a-z}/, index: 2},
    {regex: /{^A-Za-z0-9}/, index: 3},
    {regex: /{A-Z}/, index: 4},
]


passwordInput.addEventListener("keyup", () => {
   requiment.forEach(item =>{
    const isValid = item.regex.test(e.target.value);
    const requimentItem = requimentList[item.index];
    
    if(isValid){
        requimentItem.firstElementChild.className = "fa-solid fa-check";
        requimentItem.classList.add("valid");
    }else{
        requimentItem.firstElementChild.className = "fa-solid fa-circle";
        requimentItem.classList.remove("valid");
    }
   });
});

eyeIcon.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`
});