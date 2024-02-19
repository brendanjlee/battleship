// ship may have to carry coordinates
const Ship = (length) => {
  let health = 0;

  function hit() {
    health += 1;
  }

  function isSunk() {
    return health >= length;
  }

  return {
    hit, isSunk,
  };
};

export default Ship;
