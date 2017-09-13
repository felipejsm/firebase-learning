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
        //Firebase não valida email, responsabilidade do dev
        const email = txtEmail.value;
        const password = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, password);
    })

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    })
    //Para checar alterações realtime da autenticação
    // firebaseUser -> se estiver loggado estará valorado e, caso contrário, null
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log("not logged in");
            btnLogout.classList.add('hide');
        }
    })
}());