class Sorter {
  constructor() {
    this.store = [];
    this.comparator = (left, right) => left - right;
  }

  add(element) {
    this.store.push(element);
  }

  at(index) {
    return this.store[index];
  }

  get length() {
    return this.store.length;
  }

  toArray() {
    return this.store;
  }

  sort(indices) {
    let elements_to_sort = [];
    indices.forEach(element => {
      elements_to_sort.push(this.store[element]);
    });

    elements_to_sort.sort(this.comparator);

    indices.sort((left, right) => left - right);

    indices.forEach(element => {
      this.store[element] = elements_to_sort.shift();
    });

    return this.store;
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }

}

module.exports = Sorter;