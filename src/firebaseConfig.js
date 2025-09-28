



// // firebaseConfig.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// // New Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAKDSt8wsV1u-wh--qr4oSFG5okKsDwm9w",
//   authDomain: "quadrikdigitmarketing-website.firebaseapp.com",
//   projectId: "quadrikdigitmarketing-website",
//   storageBucket: "quadrikdigitmarketing-website.appspot.com", // ✅ corrected .app to .appspot.com
//   messagingSenderId: "663902567298",
//   appId: "1:663902567298:web:20a6cd3bf98dbec3f26d9b",
//   measurementId: "G-9D8TNB835Y"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Optional: Enable Analytics (only works in browser environments with HTTPS)
// let analytics;
// if (typeof window !== "undefined") {
//   analytics = getAnalytics(app);
// }

// // Export services
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export { analytics };


// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// ✅ Updated Firebase configuration (TGACF Website)
const firebaseConfig = {
  apiKey: "AIzaSyAIoxhWfvGDqCF7lYwAXySULq1TzOXBBi0",
  authDomain: "tgacf-website.firebaseapp.com",
  projectId: "tgacf-website",
  storageBucket: "tgacf-website.appspot.com", // corrected to .appspot.com
  messagingSenderId: "463141199435",
  appId: "1:463141199435:web:571e3148a6d696be80b7ce",
  measurementId: "G-D73EG7FX0C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Enable Analytics (only works in browser environments with HTTPS)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export { analytics };
