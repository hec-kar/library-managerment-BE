import express from 'express';
import bookController from '../controllers/bookController'

const router = express.Router();

const initWebRouter = (app) => {
    router.get('/book/list', bookController.getBookList);


    return app.use('/api/v1', router);
}

export default initWebRouter;