fetch('https://avancera.app/cities/')
    .then((response) => {
        //Steg 3. Kontrollerar om svarskoden/statusen är OK
        if (!response.ok) {
            throw new Error('Nätverkssvaret var inte ok');
        }
        //Steg 4. Om responsen är ok så omvandlar vi svaret till JSON format
        return response.json();
    })
    .then((data) => {
        //Steg 5. Här hanterar vi JSON svaret
        //Steg 6. Vi använder metoden map() och skapar ett HTML element för varje stad
        const cities = data.map((city) => {
            return `<li>${city.name}, ${city.population}</li>`;
        });
        console.log(data);
        //Steg 7. Lägger till de skapade HTML elementen i CityList
        //den som innerHTML
        cityList.innerHTML = cities.join(''); //Slår samman arrayen till en sträng och sätter
    })
    .catch((error) => {
        //Steg 8. Vi arbetar med catch och error för att logga/upptäcka eventuella
        //fel som uppstått vid inhämtningen
        console.log('Hämtningsfel:', error);
    });
