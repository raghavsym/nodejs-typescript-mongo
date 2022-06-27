import app from './app';
import { MongoConnection } from './database/database';

async function bootStrapApp(): Promise<any>{
  const port = process.env.PORT || 3000;
  
  // Start the server
  app.listen(port, async (err) => {
    if (err) {
      return console.log("Start server error: ", err);
    }
    try{
      const dbConnection = new MongoConnection();
      await dbConnection.connect();
      console.log('Database connection successfully.')
    }catch(e){
      console.log('Database connection error: ', e)
    }
    return console.log(`server is listening on ${port} as http://localhost:${port}/`);
  })
}

bootStrapApp();