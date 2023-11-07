const API_URL =
    process.env.NODE_ENV == 'development'
        ? 'http://localhost:8080'
        : 'http://example-site.com';

async function fetchData(endpoint, options = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, options);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
}

export const transactionService = {
    getTransactionByMonth: (id, month) =>
        fetchData(
            '/api/bankAccount/getTotalTransactionByMonth/' + id + '/' + month,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            }
        )
};
