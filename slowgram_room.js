var firebaseConfig = {
    apiKey: "AIzaSyAl6qMS9w5JwSqCUqgTdgcohkOD2iSpnNI",
    authDomain: "slowgram-f53a8.firebaseapp.com",
    databaseURL: "https://slowgram-f53a8-default-rtdb.firebaseio.com",
    projectId: "slowgram-f53a8",
    storageBucket: "slowgram-f53a8.appspot.com",
    messagingSenderId: "1063914086518",
    appId: "1:1063914086518:web:b075dfa125463810b13f57"
  };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 var pikachu=localStorage.getItem("Name");

    document.getElementById("User_last_name").innerHTML = "Welcome " + pikachu + "!";

function room_service(){
  room_dain = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_dain).update({
    purpose: "adding a room name."      
  });

   localStorage.setItem("Add room name", room_dain);

   window.location="footbook_messages.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("sus").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
       var dog = "<div class='room_name' id=" + Room_names + "onclick='Redirection(this.id)'>#" + Room_names + "</div> <hr>";
       document.getElementById("sus").innerHTML += dog;
       

      //End code
      });});}
getData();

function Redirection(name)
{
  localStorage.setItem("Room_Services", name);
  window.location="slowgram_messages.html";
  console.log(name);
}
function logout()
{
  localStorage.removeItem("Name");
  localStorage.removeItem("Add room name");
  window.location="index.html";
}