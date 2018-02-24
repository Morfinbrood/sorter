class Sorter {
  constructor() {
    this.store = [];
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

    elements_to_sort.sort(function (a, b) {
      return a - b;
    })

    indices.sort(function (a, b) {
      return a - b;
    })

    indices.forEach(element => {
      this.store[element] = elements_to_sort.shift();
    });

    return this.store;
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;