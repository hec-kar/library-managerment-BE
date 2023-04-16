import pool from "../configs/connectDb";

const getBookList = async (req, res) => {

    const [bookData] = await pool.execute('SELECT * FROM book');

    return res.status(200).json({
        message: 'Ok',
        data: bookData
    })
}


module.exports = {
    getBookList
}