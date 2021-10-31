const { loanBook, returnBorrowedBook } = require('../controllers/loan.controller');

const lendBook = (data, callback) => {
	const headers = ['put'];
	if (headers.indexOf(data.method) === -1)
		return callback(404, {
			message: `Resource not found -> can not ${data.method.toUpperCase()} request to ${data.pathname}`,
		});

	data.method === 'put' && loanBook(data, callback);
};

const returnBook = (data, callback) => {
	const headers = ['put'];
	if (headers.indexOf(data.method) === -1)
		return callback(404, {
			message: `Resource not found -> can not ${data.method.toUpperCase()} request to ${data.pathname}`,
		});

	data.method === 'put' && returnBorrowedBook(data, callback);
};

module.exports = { lendBook, returnBook };
