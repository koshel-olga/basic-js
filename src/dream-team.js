const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(membersArr) {
  let nameTeam = []
  if (membersArr instanceof Array){
    for (let member of membersArr) {
      console.log(member)
      if (typeof member == 'string') {
        nameTeam.push(member.trim()[0].toUpperCase())
        console.log(nameTeam)
      }
    }
    return nameTeam.sort(). join('')
  } else { return false}
};
