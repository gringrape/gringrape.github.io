const dateComparators = {
  compareInAscendingOrder(first, second) {
    if (first === second) {
      return 0;
    }

    return first < second ? 1 : -1;
  },
};

export default dateComparators;
