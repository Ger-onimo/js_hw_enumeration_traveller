const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(function(journey) {
    return journey.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(function(journey) {
    return journey.distance > minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
//   transportArray = [];
//   for (const mode in this.journeys);{
//    transportArray.push(mode[transport]);
// }
  return transportArray.filter(function(journey,i,a) => a.indexOf(journey)==i)
    {return journey.transport
  })
};


module.exports = Traveller;

// var myArray = ['a', 1, 'a', 2, '1'];

// let unique = [...new Set(myArray)];

// .filter((v,i,a)=>a.indexOf(v)==i)
