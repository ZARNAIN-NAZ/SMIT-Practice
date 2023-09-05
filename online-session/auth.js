import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getDatabase, set, ref, onValue } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-storage.js"

const auth = getAuth();
const database = getDatabase();
const storage = getStorage();

console.log("logging");

const signup = () => {
    let username = document.getElementById("username")
    let email = document.getElementById("signup-email")
    let password = document.getElementById("signup-password")
    let image = document.getElementById("image")
    console.log(image.files[0]);
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((response) => {
            console.log("successfully Signup", response)
            const imageFile = image.files[0];
            let mediaRef = storageRef(storage, "images/" + imageFile.name)
            uploadBytes(mediaRef, imageFile).then((response) => {
                console.log("successfully added image in storage", response.ref);
                getDownloadURL(response.ref).then((url)=>{
                    let uniqueId = auth.currentUser.uid
                    let userReference = ref(database, "users/" + uniqueId)
                    let userObj = {
                        name: username.value,
                        email: email.value,
                        password: password.value,
                        imageUrl: url
                    }
                    set(userReference, userObj).then((response) => {
                        console.log("Succesfully added data in database", response);
                    })
                })
            }).catch((reject)=>{
                console.log("err", reject);
            })

       
        }).catch((reject) => {
            alert(reject)
        })
}


let signup_btn = document.getElementById("signup-btn")
signup_btn.addEventListener("click", signup)

const login = () => {
    let email = document.getElementById("login-email")
    let password = document.getElementById("login-password")
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((resolve) => {
            alert("successfully Login")
            let uniqueId = auth.currentUser.uid
            console.log(uniqueId);
            let userReference = ref(database, "users/" + uniqueId)

            onValue(userReference, (snapshot) => {
                console.log(snapshot.val());
                let username = document.getElementById("userName")
                username.innerHTML = snapshot.val().name;
                let imageElement = document.getElementById("profilePic")
                imageElement.src = snapshot.val().imageUrl
            })
        }).catch((reject) => {
            alert(reject)
        })
}


let login_btn = document.getElementById("login-btn")

login_btn.addEventListener("click", login)


