import express from "express";
import initBookRouter from './routers/bookRouter';

const app = express();
const port = process.env.PORT || 8080;

// cấu hình midleware body-parser để lấy dữ liệu từ form đẩy lên
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Khởi tạo định tuyến (routing) cho Book
initBookRouter(app);





app.listen(port, () => {
    console.log(`Server link is localhost:${port}`)
})