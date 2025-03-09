import * as logger from "firebase-functions/logger";
import { onRequest } from "firebase-functions/v2/https";
import { authFirebaseMiddleware } from "../../middleware/authMiddleware"
import { fetchUserDataController, updateUserDataController } from "../../controller/api"

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

export const fetchUserData = onRequest((request, response) => {
    return authFirebaseMiddleware(request, response as any, fetchUserDataController)
});

export const updateUserData = onRequest((request, response) => {
  return authFirebaseMiddleware(request, response as any, updateUserDataController)
});