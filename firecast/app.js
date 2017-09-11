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

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
    });

    btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, password);
    })
}());