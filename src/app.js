import express from "express";
import initBookRouter from './routers/bookRouter';

const app = express();
const port = process.env.PORT || 8080;

//Khởi tạo định tuyến (routing) cho Book
initBookRouter(app);





app.listen(port, () => {
    console.log(`Server link is localhost:${port}`)
})