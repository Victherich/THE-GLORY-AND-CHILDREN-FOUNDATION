

// // firebaseConfig.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB4o9Novs9l_htjfwa9SCi_1vPjfS5LDyo",
//   authDomain: "digital-store-c5a11.firebaseapp.com",
//   projectId: "digital-store-c5a11",
//   storageBucket: "digital-store-c5a11.appspot.com", // ✅ fixed
//   messagingSenderId: "158469298026",
//   appId: "1:158469298026:web:86ec2028167d5c01ac7713",
//   measurementId: "G-3RP5H3VS22"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Export services
// export const auth = getAuth(app);
// export const db = getFirestore(app);





// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// New Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKDSt8wsV1u-wh--qr4oSFG5okKsDwm9w",
  authDomain: "quadrikdigitmarketing-website.firebaseapp.com",
  projectId: "quadrikdigitmarketing-website",
  storageBucket: "quadrikdigitmarketing-website.appspot.com", // ✅ corrected .app to .appspot.com
  messagingSenderId: "663902567298",
  appId: "1:663902567298:web:20a6cd3bf98dbec3f26d9b",
  measurementId: "G-9D8TNB835Y"
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


