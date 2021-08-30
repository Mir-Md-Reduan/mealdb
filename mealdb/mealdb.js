const loadMeal = () => {
    document.getElementById('button-search').addEventListener('click', function () {
        const searchField = document.getElementById('input-field');
        const searchText = searchField.value;
        searchField.value = '';
        // console.log(searchText);
        if (searchText == '') {
            const searchResult = document.getElementById('search-result');
            const p = document.createElement('p');
            p.classList.add('text-center', 'rounded-3', 'text-white', 'bg-danger', 'mx-auto')
            p.innerText = 'Please Write Something to Display';
            searchResult.appendChild(p);
        }
        else {
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
            fetch(url)
                .then(res => res.json())
                .then(data => displaySearchResult(data.meals))
        }
    })
}
loadMeal()

const displaySearchResult = meals => {
    // console.log(meals);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    if (meals == null) {
        // console.log("No result found");
        const p = document.createElement('p');
        p.classList.add('text-center', 'rounded-3', 'text-white', 'bg-danger', 'mx-auto')
        p.innerText = 'Please Write a valid Good Food Name';
        searchResult.appendChild(p);
    }
    else {
        meals.forEach(meal => {
            const div = document.createElement('div');
            div.classList.add('col');
            // console.log(meal);
            div.innerHTML = `
                <div onclick="loadMealDetail('${meal.idMeal}')" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                    </div>
                </div>
        `;
            searchResult.appendChild(div);
        })
    }

}
const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}
const displayMealDetail = meal => {
    const cardDetails = document.getElementById('card-details');
    cardDetails.textContent = '';
    const div = document.createElement('div');
    // console.log(meal)
    div.classList.add('card', 'w-50', 'mx-auto', 'my-5');
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">somewhere</a>
        </div>
    `;
    cardDetails.appendChild(div);
}