import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
    try {
        let contacts = [];


        const fileExists = await fs.access(PATH_DB)
            .then(() => true)
            .catch(() => false);

        if (fileExists) {
            const data = await fs.readFile(PATH_DB, 'utf-8');
            contacts = JSON.parse(data);
        }

        for (let i = 0; i < number; i++) {
            contacts.push(createFakeContact());
        }

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
        console.log(number);
        return contacts;
    } catch (error) {
        console.log('Error:', error.message);
    }
};

generateContacts(5);