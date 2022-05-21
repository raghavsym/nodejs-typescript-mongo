import app from './app';

async function bootStrapApp(): Promise<any>{
  const port = process.env.PORT || 3000;
  
  // Start the server
  app.listen(port, (err) => {
    if (err) {
      return console.log("Start server error: ", err);
    }
    return console.log(`server is listening on ${port}`);
  })
}

bootStrapApp();