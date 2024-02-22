const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

async function fetchCountriesData(){
  try{
    const countriesDataRequest=await fetch(countriesAPI);
  countriesData=await countriesDataRequest.json();

// Read the countries API using fetch and print the name of country, capital, languages, population and area.

  countriesData.forEach(country => {
        console.log(`Country : ${country.name}`);
        console.log(`Capital of ${country.name}: ${country.capital}`);
        console.log(`Languages of ${country.name}: ${country.languages.map(lang => lang.name).join(', ')}`);
        console.log(`Population of ${country.name}: ${country.population}`);
        console.log(`Area of ${country.name}: ${country.area}`);
        console.log('\v');
      });


      //  Read the countries api and find out the 10 largest countries
    const largestCountries=countriesData.sort((countryFirst, countrySecond)=>countryFirst.area-countrySecond.area).slice(0, 10);
    const tenLargestCountries=largestCountries.map(country => country.name)
    console.log('10 Largest Countries:', tenLargestCountries);

      // Read the countries api and count total number of languages in the world used as officials.
    const officialLanguages = new Set();
    countriesData.forEach(country => {
      country.languages.forEach(lang => {
        if (lang.official) {
          officialLanguages.add(lang.name);
        }
      });
    });
    console.log(`Total number of official languages: ${officialLanguages.size}`);
  } catch (error) {
    console.log(error);
  }
}




async function fetchCatsData(){
  try{

    const catsDataRequest=await fetch(catsAPI);
    const catsData=await catsDataRequest.json();

    // Print out all the cat names in to catNames variable.
        catsData.forEach((cat) => {
          console.log(cat.name);
        });

    // Read the cats api and find the average weight of cat in metric unit.
        const weights = catsData.map(cat => cat.weight.metric.split('-')).flat().map(weight => parseInt(weight));
        const averageWeight = weights.reduce((acc, curr) => acc + curr, 0) / weights.length;
        console.log('Average Cat Weight in Metric:', averageWeight);

  } catch (error) {
    console.log(error);
  }
}
fetchCountriesData();
fetchCatsData();