import fetch from 'node-fetch';
import CryptoJS from 'crypto-js';

const password = 'Valantis';
const timestamp = new Date().toISOString().slice(0, 10).split('-').join('');
const data = `${password}_${timestamp}`;
const authorizationString = CryptoJS.MD5(data).toString();

export const getProducts = async (params) => {
    try {
        const response = await fetch("https://api.valantis.store:41000/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth': authorizationString
            },
            body: JSON.stringify(params)
        });

        if (!response.ok) {
            throw new Error('Ошибка при выполнении запроса');
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        return null;
    }
}
