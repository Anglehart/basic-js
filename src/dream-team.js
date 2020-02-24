module.exports = function createDreamTeam(members) {
  let dreamTeam = [];
  if (!Array.isArray(members)){
    return false;
  }
  for (let i = 0; i < members.length; i++){
    if (typeof members[i] === "string"){
      dreamTeam.push(members[i].trim().toUpperCase()[0]);
    }
  }
  if (dreamTeam != []){
    return dreamTeam.sort().join("");
  } else {
    return false
  }
};
