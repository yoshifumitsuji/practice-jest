let cities = null;
let foods = null;

function fetchCities() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Vienna', 'San Juan']);
    }, 300);
  });
}

function fetchFoods() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ Vienna: ['Wiener Schnitzel'], 'San Juan': ['Mofongo'] });
    }, 300);
  });
}

async function initializeCityDatabase() {
  const data = await fetchCities();
  cities = data;
}

function clearCityDatabase() {
  cities = null;
}

async function initializeFoodDatabase() {
  const data = await fetchFoods();
  foods = data;
}

function clearDoodDatabase() {
  foods = null;
}

function isCity(city) {
  return cities.includes(city);
}

function isValidCityFoodPair(city, food) {
  return foods[city].includes(food);
}

module.exports = {
  initializeCityDatabase,
  clearCityDatabase,
  initializeFoodDatabase,
  clearDoodDatabase,
  isCity,
  isValidCityFoodPair
};
