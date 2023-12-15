const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en'
const get_data = async () => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        });
        const data = await response.json();
        return data.text;
        
    } catch (error) {
        throw error
    }
}

const new_fact = async () => {
    const fact = await get_data()
    document.querySelector(".card_facts_text").innerHTML = fact
}



document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("button_new_fact").addEventListener("click", new_fact)
});