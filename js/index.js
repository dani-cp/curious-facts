//it also kinda works, Alex told me to use then-catch instead of try-catch
/*async function get_data() {
  const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en',)
  const data = await response.json()
  return data.text 
}*/

async function get_data() {
    try {
        const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
        const data = await response.json();
        return data.text;
    } catch (error) {
        console.error('There was a problem fetching the data:', error);
        return null;
    }
}

async function new_fact() {
    const fact = await get_data()
    document.querySelector(".card_facts_text").innerHTML = fact
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("button_new_fact").addEventListener("click", new_fact)
});