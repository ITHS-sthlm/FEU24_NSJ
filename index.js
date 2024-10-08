fetch('https:avancera.app/cities/')
    .then((response) => {
        //Ta upp error från responsen om det finns
        if (!response.ok) {
            throw new Error('Nej detta funka ju inte så bra');
        }
        //Här kan vi logga ut responsen om vi vill innan vi returnerar
        return response.json();
    })
    .then((data) => {
        //Arbeta med nod och elementet cityList som ligger i HTML filen
        const cities = data.map((city) => {
            return `<li>Stad:
            ${city.name} antal invånare:  ${city.population}
            </li>`;
        });
        cityList.innerHTML = cities.join('');
    })
    .catch((error) => {
        console.log('Hämtningsfel', error);
    });
