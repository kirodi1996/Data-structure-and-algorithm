function capitalizeFirst (array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
      }
      const res = capitalizeFirst(array.slice(0, -1));
      const string = array.slice(array.length - 1)[0].toUpperCase();
      res.push(string);
      return res;
}

capitalizeFirst(['car', 'taco', 'banana', 'tiger', 'mango'])