const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en';

export const get_fact = async () => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        });
        const data = await response.json();
        return data.text;
    } catch (error) {
        throw error;
    }
};