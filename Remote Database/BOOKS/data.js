const appId = '90BF967F-058B-5D05-FF17-9970332C8B00';
const apiKey = '9142FA41-3EA6-475D-8C63-097D2612091C';

function host(endpoint) {
    return `https://api.backendless.com/${appId}/${apiKey}/data/${endpoint}`;
}

export async function getBooks() {
    const response = await fetch(host('books'));
    const data = await response.json();
    return data;
}

export async function createBook(book) {
    const response = await fetch(host('books'), {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}

export async function updateBook(book) {
    const id = book.objectId;
    const response = await fetch(host('books/' + id), {
        method: 'PUT',
        body: JSON.stringify(book),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}

export async function deleteBook(id) {
    const response = await fetch(host('books/' + id), {
        method: 'DELETE',
    });
    const data = await response.json();
    return data;
}