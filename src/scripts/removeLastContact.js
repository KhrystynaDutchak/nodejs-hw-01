import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        if(contacts.length > 0){
            contacts.pop();
            await fs.writeFile(PATH_DB, JSON.stringify(contacts));
            console.log('Last contact removed.');
        }
    } catch (error) {
        console.log('Error:', error.message);
    }
};

removeLastContact();
