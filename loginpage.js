function addUser(){
    username = document.getElementById("usernameinput").value
    localStorage.setItem("username", username)
     window.location = "roompage.html"
}