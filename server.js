import app from "./src/app/index.js";
import dotenv from "dotenv";
import connectMongoDB from "./src/app/mongoDatabase.js";

dotenv.config();

const port = process.env.PORT || 5000;

(async () => {
  try {
    await connectMongoDB();
    app.listen(port, () => {
      console.log(`Server running on: http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
