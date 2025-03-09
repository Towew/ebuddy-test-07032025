import * as admin from "firebase-admin";
const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH);

// Inisialisasi Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

export { admin, db };