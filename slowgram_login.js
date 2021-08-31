function succsess()
{
    User=document.getElementById("user_name").value;
    localStorage.setItem("Name", User);

    window.location="slowgram_room.html";
}