const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const CountryList = function(){
  this.countries = [];
}

CountryList.prototype.bindEvents = function(){
  PubSub.subscribe("SelectView:name-selected", (event) => {
    const country = this.countries[event.detail];
    PubSub.publish("CountryList:country-ready", country)
  })
}


CountryList.prototype.getCountries = function(){
  const request = new Request("https://restcountries.eu/rest/v2/all");
  request.get((data) => {
  this.countries = data;
  const names = this.countries.map((country) => {
    return country.name;
  });
  PubSub.publish("CountryList:names-ready", names);
  });
};

module.exports = CountryList;
