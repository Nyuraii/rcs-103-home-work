let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

function findA(countries) {
  let result = [];

  for (let i = 0; i < countries.length; i++) {
    let country = countries[i];
    if (country[0].toLowerCase() === 'a' && country[country.length - 1].toLowerCase() === 'a') {
      result.push(country);
    }
  }
  return result;
}

let countriesA = findA(countries);
console.log(countriesA);