import * as mongoose from "mongoose";
const url = "mongodb://localhost:27017/Test";
// For docker environment
// const url = "mongodb+srv://test:test123@cluster0.z3hwh.mongodb.net/?retryWrites=true&w=majority"; 

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