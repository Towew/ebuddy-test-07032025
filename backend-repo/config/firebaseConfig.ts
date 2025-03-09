import * as admin from "firebase-admin";
var serviceAccount = require("../serviceAccountKey.json");

// Inisialisasi Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

export { admin, db };