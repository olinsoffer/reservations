let reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

let resName = prompt('Please enter the name for your reservation');

let claimReservation = function() {
  formatedName = formatName(resName);
  if(reservations[formatedName] === undefined) {
    alert("There is nothing currenty under your name");
    reservations[formatedName] = {claimed: true};
    alert("You now have a new reservation!");
  } else if(reservations[formatedName].claimed === false) {
    alert(`Welcome ${name}`);
  } else if(reservations[formatedName].claimed === true) {
    alert("Your reservation was already claimed");
  }

  function formatName(nameToFormat) {
     let capLetter = nameToFormat[0].toUpperCase(),
     restOfName = nameToFormat.slice(1).toLowerCase(),
     newName = capLetter+restOfName;
     return newName;
  }
}

claimReservation();