const addDays = require("date-fns/addDays");

const addingDays = (x) => {
  const result = addDays(new Date(2020, 8, 22), x);
  return `${result.getDate()}-${result.getMonth()}-${result.getFullYear()}`;
};

module.exports = addingDays;
