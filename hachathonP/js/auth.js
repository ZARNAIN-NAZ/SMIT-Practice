import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
  
  import {
    getDatabase,
    set,
    ref,
    onValue, // onChildAdded, onChildRemoved, onChildChanged, on, get,
  } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
  const auth = getAuth();
  const database = getDatabase();
  
  const signup = () => {
    let username = document.getElementById("signupUsername").value; // nafea
    let email = document.getElementById("signupEmail").value; // nafea@gmail.com
    let password = document.getElementById("signupPassword").value; // 123456
    createUserWithEmailAndPassword(auth, email, password)
      .then((resolve) => {
        alert("successfully Signup");
        console.log(resolve);
        let userId = auth.currentUser.uid;
        console.log(userId);
        let usersReference = ref(database, "users/" + userId);
        let usersObj = {
          username: username,
          email: email,
          password: password,
        };
        set(usersReference, usersObj);
      })
      .catch((reject) => {
        alert("Signup failed!", reject);
      });
  };
  
  let signup_btn = document.getElementById("signup-Btn");
  if (signup_btn) {
    signup_btn.addEventListener("click", signup);
  } else {
    const login = () => {
      let email = document.getElementById("loginEmail");
      let password = document.getElementById("loginPassword");
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((resolve) => {
          alert("successfully Login");
          let userId = auth.currentUser.uid;
          let usernameRef = ref(database, "users/" + userId);
          onValue(usernameRef, (data)=> {
              let userData = data.val().username;
              console.log(userData);
              document.getElementById("signupUsername").innerHTML = userData;
          })
        })
        .catch((reject) => {
          alert(reject);
        });
    };
  
    let login_btn = document.getElementById("login-btn");
    login_btn.addEventListener("click", login);
  }
  