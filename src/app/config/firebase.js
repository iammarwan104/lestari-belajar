// // src/config/firebase.js

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

// export const firebaseConfig = {
//     apiKey: "AIzaSyDE2MiOSg1sNOkiU28U8D6AQrf2kw_qQK4",
//     authDomain: "todolist-8d84d.firebaseapp.com",
//     projectId: "todolist-8d84d",
//     storageBucket: "todolist-8d84d.firebasestorage.app",
//     messagingSenderId: "71990958493",
//     appId: "1:71990958493:web:69a159dace88335565b774",
//     measurementId: "G-HM5XSS6CKR"
// };

// export const FIREBASE_VAPID_KEY = "MDjYtROJNbtomDHMm2iRv3dwGduwzYfYl8tEQfN8eRw";

// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

// export const requestForToken = () => {
//   return getToken(messaging, { vapidKey: FIREBASE_VAPID_KEY })
//     .then((currentToken) => {
//       if (currentToken) {
//         return currentToken;
//       } else {
//         alert(
//           "No registration token available. Request permission to generate one."
//         );
//         return null;
//       }
//     })
//     .catch((err) => {
//       alert("An error occurred while retrieving token - " + err);
//       return null;
//     });
// };

// onMessage(messaging, ({ notification }) => {
//   new Notification(notification.title, {
//     body: notification.body,
//     icon: notification.icon,
//   });
// });
