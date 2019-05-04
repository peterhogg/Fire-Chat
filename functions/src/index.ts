// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp();
import * as functions from "firebase-functions";
import { Message } from "./models/message";
const MessageCollection = "Messages";

export const setMessageDate = functions.firestore
    .document(`${MessageCollection}/{messageId}`)
    .onCreate((snap, context) => {
        const message = snap.data() as Message;
        message.date = snap.createTime ? snap.createTime.toDate() : new Date();
        return snap.ref.set(message);
    });
