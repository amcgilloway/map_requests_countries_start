const CountryList = require('./models/countryList.js');
const SelectView = require('./views/select_view.js');
const CountryView = require('./views/country_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('#countries')
  const selectView = new SelectView(select);
  selectView.bindEvents();

  const countryDetail = document.querySelector('#country-detail');
  const countryView = new CountryView(countryDetail);
  countryView.bindEvents();

  const countryList = new CountryList();
  countryList.getCountries();
  countryList.bindEvents();
});
