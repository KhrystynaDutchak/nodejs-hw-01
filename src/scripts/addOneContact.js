import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const addOneContact = async () => {
  try {
    let contacts = [];
    
    const fileExists = await fs.access(PATH_DB)
      .then(() => true)
      .catch(() => false);

    if (fileExists) {
      const data = await fs.readFile(PATH_DB, 'utf-8');
      contacts = JSON.parse(data);
    }

    const newContact = createFakeContact();
    contacts.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('Added 1');
    return newContact;
  } catch (error) {
    console.log('Error:', error.message);
  }
};

addOneContact();