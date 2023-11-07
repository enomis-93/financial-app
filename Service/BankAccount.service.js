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

export const apiBankAccountService = {
    getAccount: () => fetchData('/api/bankAccount/all'),
    addAccount: (data) =>
        fetchData('/api/bankAccount/new', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
};
