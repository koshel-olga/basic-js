const CustomError = require("../extensions/custom-error");

module.exports = function countCats(searchCats) {
  let cats = 0;
  for (let i=0; i < searchCats.length; i++) {
    for (let j=0; j < searchCats[i].length; j++){
        if (searchCats[i][j] === '^^') { cats += 1}  
    }
  }
  return cats;
};
