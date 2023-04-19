import express from "express";
import initBookRouter from './routers/bookRouter';
import initGenreRouter from './routers/genreRouter';
import initLibrarianRouter from './routers/librarianRouter';
import initLoginRouter from "./routers/loginRouter";

const app = express();
const port = process.env.PORT || 8080;

// cấu hình midleware body-parser để lấy dữ liệu từ form đẩy lên
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Login Routing
initLoginRouter(app);
//Khởi tạo định tuyến (routing) cho Book
initBookRouter(app);
//Genre routing
initGenreRouter(app);
//Libarian routing
initLibrarianRouter(app);




app.listen(port, () => {
    console.log(`Server link is localhost:${port}`)
})