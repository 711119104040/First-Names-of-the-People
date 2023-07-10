const countryname = require("../country/state/city/index");
const utility = require("../utilities/utils/index");

const getPeopleInCity = (countryname) => {
  return utility(countryname);
};
module.exports = getPeopleInCity;
