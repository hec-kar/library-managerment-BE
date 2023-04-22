import pool from "../configs/connectDB";

const Borrow = class {
    constructor(borrowId, cardId, libarianId, takeDate, dueDate, returnDate, status) {
        this.borrowId = borrowId;
        this.cardId = cardId;
        this.libarianId = libarianId;
        this.takeDate = takeDate;
        this.dueDate = dueDate;
        this.returnDate = returnDate;
        this.status = status;
    }

    static async getBorrowList() {
        let [borrows] = await pool.execute('SELECT * FROM borrows');
        return borrows;
    }

}

export default Borrow;