// apis/user.ts
export interface User {
    id: string;
    totalAverageWeightRatings: number;
    numberOfRents: number;
    recentlyActive: number;
    potentialScore?: number;
}
  