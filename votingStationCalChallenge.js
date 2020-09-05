const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['St.Paul High School', 85, 'school'],
  ['Pine Crest Community Centre', 20, 'community centre'],
  ['Baiyok Tower', 10000, 'commercial building']
];

const chooseStations = function(stations) {
  let goodStation = [];
  for (const station of stations) {
    let name = station[0];
    let capacity = station[1];
    let type = station[2];
    if ((capacity >= 20) && (type === "school" || type === "community centre")) {
      goodStation.push(name);
    }
  }
  return goodStation;
}

console.log(chooseStations(stations));