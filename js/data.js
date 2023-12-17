import{show_toast} from './toast.js'

const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en';

export const get_fact = () => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        })
            .then(response => response.ok 
                ? response.json() 
                : Promise.reject())
            .then(data => {
                resolve(data.text);
            })
            .catch(error => {
            show_toast("There's no internet connection."), reject(error);
            });
    });
};