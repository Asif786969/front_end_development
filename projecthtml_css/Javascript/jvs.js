const btn=document.getElementById("btn")
btn.addEventListener('click', function handleClick() {
    const user=document.getElementById("username").value;
    const pass=document.getElementById("password").value;
    const confpass=document.getElementById("conf-password").value;
    if(pass==confpass){
        alert("good");
    }
    else{
        alert("not so much");
    }
});