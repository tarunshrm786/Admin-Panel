var firebaseConfig = {
    apiKey: "AIzaSyD03fGqw-DuHtd4gTCInilRpRgvEerPUoM",
    authDomain: "fir-connect-bdaab.firebaseapp.com",
    databaseURL: "https://fir-connect-bdaab.firebaseio.com",
    projectId: "fir-connect-bdaab",
    storageBucket: "fir-connect-bdaab.appspot.com",
    messagingSenderId: "647792241875",
    appId: "1:647792241875:web:3c7001eb805a549038b826",
    measurementId: "G-9B864KSCBN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var rootRef = firebase.database().ref().child("yct/userProfile");
//console.log(rootRef);
rootRef.on("child_added", snap => {
    
     var Name = snap.child("name").val();
   // console.log(Name);
     var Email = snap.child("eamil").val();
     var Password = snap.child("password").val();
     var Mobile = snap.child("mobile").val();


    $("#userlist").append("<tr><td>" + Name + "</td><td>" + Email + "</td><td>"
            + Password + "</td><td>" + Mobile +  "</td><td>              <button>Remove</button></td></tr>");
});

//function hideloader()
//{
//    document.getElementById("loading").style.display = "none";
//}

//
//var tableuser = document.getElementById('userlist');
//
//var firebaseTblRef = firebase.database.ref().child("yct");
//
//firebaseTblRef.on('value', function(datasnapshot){
//    
//     userlist.innerText = datasnapshot.val(); 
//});


