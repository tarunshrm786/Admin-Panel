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


var rootRef = firebase.database().ref().child("yct/adminSection/banner");

rootRef.on("child_added", snap => {
    
     var Banner = snap.child("bannerImageYct").val();

    var result = Banner.link(Banner);
   document.getElementById("bannerlist").innerHTML = result;

//    $("#bannerlist").append("<tr><td><a href='#'>" +Banner+ "</a></td></tr>");
});















//firebase.analytics();


//   on() method
//  firebase.database.ref('yct/adminSection/banner').on('value',(snap)=>{
//    console.log(snap.val());
//  });
//var database = firebase.database;
//  database.ref().child('yct/adminSection/banner').on('value',   function(snapshot) {
//    snapshot.forEach(function(childSnapshot) {
//      var childKey = childSnapshot.key;
//      var childData = childSnapshot.val();
//      // ...
//    });
//  });