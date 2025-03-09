import { FirebaseTimestamp } from "./firebaseCommon";

export interface User {
    id: string;
    name: string;
    email: string;
    totalAverageWeightRatings: number;
    numberOfRents: number;
    recentlyActive: FirebaseTimestamp; //--> Epoch Time
}