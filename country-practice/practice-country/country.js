const loadCountry = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountry();

const displayCountries = (countries) => {
    // console.log(country.name);
    const countryDiv = document.getElementById('country');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p> ${country.capital}</p>
            <button onclick = "loadCountryDetails('${country.name}')"> Country Details </button>
        `;
        /* const h3 = document.createElement('h3');
        h3.innerText = country.name;
        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(h3);
        div.appendChild(p); */
        countryDiv.appendChild(div);

    });
}

const loadCountryDetails = (name) => {
    // console.log(name)
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    console.log(country);
    const countryDetail = document.getElementById('counyry-detail');
    // const div = document.createElement('div');
    countryDetail.innerHTML = `
        <h4>${country.name}</h4>
        <p>Capital: ${country.capital} <br> Population: ${country.population} </p>
        <img width= "200px" src="${country.flag}">
    `;
    // countryDetail.appendChild(div);
}