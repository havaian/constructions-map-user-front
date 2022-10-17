<template>
  <div id="wrapper">
    <meta name="google-signin-scope" content="profile email">
    <meta name="google-signin-client_id" content="488878737368-lqhvl18kh9iugafrb3rgpait95biqcma.apps.googleusercontent.com">
    <h1>Profile</h1>
    <div class="auth-container">
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
        <a href="#" onclick="signOut()" id="sign-out-btn">Sign out</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    name: "Profile",
    data() {
    },
    mounted() {
      
      function onLoad() {
        gapi.load('auth2', function() {
          console.log('Hey');
          gapi.auth2.init();
        });
      }

      function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
      }

      function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
      }

      // Function for dynamically changing the label of the current page
      for (let x = 0; x < document.querySelector('.active.exact-active').attributes.length; x++) {
        if (document.querySelector('.active.exact-active').attributes[x].name == 'modelvalue') {
          document.querySelector('#page-title').innerHTML = '';
          document.querySelector('#page-title').append(document.querySelector('.active.exact-active').attributes[x].nodeValue);
        }
      }

      $('.google-auth-btn').click(() => {
        
        axios.get('/auth/google')
        .then((res) => {
          console.log(res);
        })

      })
    },
  }
</script>

<style scoped>

  .auth-container {
    margin-top: 1%;
  }

  .auth-container p {
    margin-top: 1%;
    padding-bottom: 1%;
  }

  .google-auth-btn {
    color: black;
    text-decoration: none;
    border-bottom: none;
    transition: all 0.3s linear;
    display: flex;
  }

  .google-auth-btn:hover {
    text-decoration: underline;
    transition: all 0.3s linear;
  }

  .google-auth-btn img {
    margin-right: 1%;
    width: 20px;
    transition: all 0.3s ease;
  }

  .google-auth-btn:hover img {
    transition: all 0.3s ease;
  }

</style>