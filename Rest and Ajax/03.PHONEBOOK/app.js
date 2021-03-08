function attachEvents() {
    const elements = {
        person() { return document.querySelector('input#person')},
        phone() { return document.querySelector('input#phone')},
        createContact() {return document.querySelector('button#btnCreate')},
        loadContacts() {return document.querySelector('button#btnLoad')},
        phonebook() {return document.querySelector('ul#phonebook')}
    };

    let contacts = [];

    const baseUrl = "http://localhost:8000/phonebook";

    elements.createContact().addEventListener('click', () => {
        const {value: person} = elements.person();
        const {value: phone} = elements.phone();

        fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify({person, phone})
        })
            .then((response) => response.json())
            .then((response) => {
                contacts.push(response);
                elements.person().value = "";
                elements.phone().value = "";
            });
    });

    elements.loadContacts().addEventListener('click', () => {
        elements.phonebook().innerHTML = "";
        contacts.forEach((contact) => {
            let listItem = document.createElement('li');
            const key = Object.keys(contact)[0];
            listItem.textContent = `${contact[key].person} - ${contact[key].phone}`;
            elements.phonebook().appendChild(listItem);
        })
    })
}

attachEvents();