const PubSub = require('../helpers/pub_sub');


const CountryView = function(container){
  this.container = container;
}

CountryView.prototype.bindEvents = function(){
  PubSub.subscribe("CountryList:country-ready", (event) => {
    const country = event.detail;
    this.render(country);
  });
};

CountryView.prototype.render = function(country){
  this.container.innerHTML = "";
  const header = this.createHeader(country);
  this.container.appendChild(header);

  const details = this.createDetails(country);
  this.container.appendChild(details);

  const flag = this.createImage(country);
  this.container.appendChild(flag);
}

CountryView.prototype.createHeader = function(country){
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.textContent = country.name;
  h1.classList.add("header");
  header.appendChild(h1);
  return header;
};

CountryView.prototype.createDetails = function(country){
  const detailDiv = document.createElement('section');
  const population = document.createElement('p');
  population.textContent = "Population: " + country.population;
  detailDiv.appendChild(population);

  const currencies = country.currencies.map((currency) => {
    return currency.name;
  });
  currencyText = "Currency: " + currencies.join(', ');
  const currency = document.createElement('p');
  currency.textContent = currencyText;
  detailDiv.appendChild(currency);
  return detailDiv;
}

CountryView.prototype.createImage = function(country){
  const img = document.createElement('img');
  img.src = country.flag;
  img.classList.add("flag");
  return img;
}

module.exports = CountryView;
