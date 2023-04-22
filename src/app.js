import express from "express";
import session from "express-session";

import configViewEngine from "./configs/configViewEngines";
import initWebRouter from './routers/webRouter'
import initBookRouter from './routers/bookRouter';
import initGenreRouter from './routers/genreRouter';
import initLibrarianRouter from './routers/librarianRouter';
import initLoginRouter from "./routers/loginRouter";
import initReaderRouter from "./routers/readerRouter";

const app = express();
const port = process.env.PORT || 8080;

// cấu hình midleware
configViewEngine(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'library',
    resave: true,
    saveUninitialized: true
}));

//Routing
initLoginRouter(app);
initWebRouter(app);
initBookRouter(app);
initGenreRouter(app);
initLibrarianRouter(app);
initReaderRouter(app);



app.listen(port, '127.0.0.1', () => {
    console.log(`Server link is localhost:${port}`)
})