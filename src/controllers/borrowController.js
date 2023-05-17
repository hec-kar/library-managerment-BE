import Borrow from "../models/borrowModel";

const handleCreateNewBorrow = async (req, res) => {
    let { cardId, librarianId } = req.body;
    let newBorrowId = await Borrow.addNewBorrow(cardId, librarianId);
    return newBorrowId;
}
const handleAddBorrowDetail = async (req, res) => {
    let { borrowId, book_id } = req.body;
    await Borrow.addBorrowDetail(borrowId, book_id);
    return res.status(200).json({
        message: 'Thêm thông tin phiếu mượn thành công'
    })
}

const handleBorrowStatistics = async (req, res) => {
    let data = await Borrow.getBorrowStatistics();
    return res.status(200).json({
        message: 'OK',
        data: data
    })
}


module.exports = {
    handleCreateNewBorrow, handleAddBorrowDetail, handleBorrowStatistics
}