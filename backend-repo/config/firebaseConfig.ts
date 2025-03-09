require('dotenv').config();
import * as admin from "firebase-admin";
let serviceAccount: any;
try {
  serviceAccount = require(process.env.SERVICE_ACCOUNT_KEY_PATH as string);
} catch (error) {
  serviceAccount = require("../." + process.env.SERVICE_ACCOUNT_KEY_PATH as string);
}

// Inisialisasi Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

export { admin, db };