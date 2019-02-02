import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBu0OFSk-uUWhkYGE9G3w59ZFukUqJqDRU",
    authDomain: "chat-1ab64.firebaseapp.com",
    databaseURL: "https://chat-1ab64.firebaseio.com",
    projectId: "chat-1ab64",
    storageBucket: "chat-1ab64.appspot.com",
    messagingSenderId: "120723890718"
};

firebase.initializeApp(config);

export default firebase;
