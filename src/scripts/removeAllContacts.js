import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify([]));
        console.log('contacts removed');
      } catch (error) {
        console.log('Error:', error.message);
      }
};

removeAllContacts();
