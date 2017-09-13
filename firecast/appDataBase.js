(function() {
    const config = {
        apiKey: "AIzaSyB4ChqpIS8fUANIg2684bncfVXiWE5zMNk",
        authDomain: "web-quickstart-dc5d8.firebaseapp.com",
        databaseURL: "https://web-quickstart-dc5d8.firebaseio.com",
        projectId: "web-quickstart-dc5d8",
        storageBucket: "web-quickstart-dc5d8.appspot.com",
        messagingSenderId: "192940399504"
    };
    firebase.initializeApp(config);
    const preObject = document.getElementById("object");
    //create reference
    const dbRefObject = firebase.database().ref().child('object');

    //Sync object changes
    // first param is the event param that will evoke the callback function
    dbRefObject.on('value', snap => console.log(snap.val()));
}()); 