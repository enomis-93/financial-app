const BASE_URL = 'http://localhost:8080';

async function fetchData(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

export const transactionService = {
    getTransactionByMonth: (id,month) => fetchData('/api/bankAccount/getTotalTransactionByMonth/'+id+'/'+month, {headers: {
        'Access-Control-Allow-Origin':"*",
        'Content-Type': 'application/json',
      },})
   
    
  };