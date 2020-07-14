const Transaction = require('../models/Transaction');

// Description: Get all transactions
// Route: GET /api/v1/transactions
// Access: Public

exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.send(500).json({
            success: false,
            error: 'Server error'
        });
    }
}

// Description: Add a transaction
// Route: POST /api/v1/transactions
// Access: Public

exports.addTransaction = async (req, res, next) => {
    res.send('POST transaction');
}

// Description: Delete a transaction
// Route: DELETE /api/v1/transactions/:id
// Access: Public

exports.deleteTransaction = async (req, res, next) => {
    res.send('DELETE transaction');
}