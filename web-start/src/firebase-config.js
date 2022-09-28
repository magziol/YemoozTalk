/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
    apiKey: "AIzaSyDPnyuWkcrbpwgMIpFNQgVE6q0Td_nREpo",
    authDomain: "friendly-chat-81455.firebaseapp.com",
    projectId: "friendly-chat-81455",
    storageBucket: "friendly-chat-81455.appspot.com",
    messagingSenderId: "161417520420",
    appId: "1:161417520420:web:db5151f041ff65745effb1"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}