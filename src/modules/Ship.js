/* eslint-disable no-plusplus */
// ship may have to carry coordinates
const Ship = (length) => {
  let health = 0;

  function hit() {
    health++;
  }

  function isSunk() {
    return health >= length;
  }

  return {
    hit, isSunk, health,
  };
};

export default Ship;
