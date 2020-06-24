document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log(app);
});

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then( result => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
                        
            const user = result.user;          
            document.writeln(`<h1 class="card-title">Hello ${user.displayName}</h1>`);
            document.writeln(`<br>`);
            document.writeln(`<p>Token ${token}</p>`);
            console.log(user)
        }
     )
     .catch(console.log)

}