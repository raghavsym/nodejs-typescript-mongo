import * as mongoose from "mongoose";
const url = "mongodb://localhost:27017/Test";
export class MongoConnection {
    private db: mongoose.Mongoose;
    constructor(){}

    public async connect()  {
        this.db = await mongoose.connect(url);
        return this.db;
    }

    public getDb() {
        return this.db;
    }

    public disconnect(): void {
        this.db.disconnect();
    }
}