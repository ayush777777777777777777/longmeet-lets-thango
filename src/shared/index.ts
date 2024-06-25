export const config = {
    logoCount: 5,
    const firebaseConfig = {
  apiKey: "AIzaSyDuxTFZMJvaUWEMsFpfHRfkiInUupECcqk",
  authDomain: "longmeet-lets-thango.firebaseapp.com",
  projectId: "longmeet-lets-thango",
  storageBucket: "longmeet-lets-thango.appspot.com",
  messagingSenderId: "854552145848",
  appId: "1:854552145848:web:1b7a2e3d5bbb7de89fa94d",
  measurementId: "G-9WFXW4F757"
};
    servers: {
        iceServers: [
            {
            urls: ['stun:stun1.l.google.com:19302',
                   'stun:stun2.l.google.com:19302'],
            },
        ],
        iceCandidatePoolSize: 10,
    },
    DEV: "development" === 'development',
}

