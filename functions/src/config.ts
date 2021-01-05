// Initialize Firebase Admin
import * as admin from 'firebase-admin';

// Initialize Cloud Firestore Database
export const db = admin.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);