export interface AppStatus {
    online: boolean;
    version: string;
    environment: "development" | "production";
}