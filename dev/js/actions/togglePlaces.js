export default function togglePlaces(placeType) {
console.log(`toggled ${placeType}`);
  return {
    type: 'TOGGLE_PLACES',
    payload: placeType
  }
};

