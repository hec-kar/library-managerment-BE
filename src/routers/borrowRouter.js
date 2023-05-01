import express from "express";

const router = express.Router();

const initBorrowRouter = (app) => {

    return app.use('/api/v1', router);
}

export default initBorrowRouter;