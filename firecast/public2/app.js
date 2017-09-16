(function() {
    var config = {
        apiKey: "AIzaSyB4ChqpIS8fUANIg2684bncfVXiWE5zMNk",
        authDomain: "web-quickstart-dc5d8.firebaseapp.com",
        databaseURL: "https://web-quickstart-dc5d8.firebaseio.com",
        projectId: "web-quickstart-dc5d8",
        storageBucket: "web-quickstart-dc5d8.appspot.com",
        messagingSenderId: "192940399504"
    };
    firebase.initializeApp(config);
    angular
        .module('app',['firebase'])
        .controller('myCtrl', function($firebaseObject) {
            const rootRef = firebase.database().ref().child('angular');
            const ref = rootRef.child('object');
            this.object = $firebaseObject(ref);
        })
}());