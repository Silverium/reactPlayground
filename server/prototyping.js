if (!Array.prototype.hasOwnProperty('concatAll')) {
  Object.defineProperty(Array.prototype, 'concatAll', {
    value: function () {
      let results = [];
      for (const subArray of this) {
        results = results.concat(subArray);
      }
      return results;
    },
    writable: true,
  });
} else {
  console.warn(`'concatAll' already existed in the prototype of 'Array'`);
}

if (!Array.prototype.hasOwnProperty('concatMap')) {
  Object.defineProperty(Array.prototype, 'concatMap', {
    value: function (f) {
      return this.map(item => f(item)).concatAll();
    },
    writable: true,
  });
} else {
  console.warn(`'concatMap' already existed in the prototype of 'Array'`);
}

if (!Array.prototype.hasOwnProperty('uniqueValues')) {
  Object.defineProperty(Array.prototype, 'uniqueValues', {
    value: function () {
      return [...new Set(this)];
    },
    writable: true,
  });
} else {
  console.warn(`'uniqueValues' already existed in the prototype of 'Array'`);
}

if (!Array.prototype.hasOwnProperty('mapBy')) {
  Object.defineProperty(Array.prototype, 'mapBy', {
    value: function (props) {
      if (typeof props === 'string') props = [props];
      const map = new Map();
      for (const property of props) {
        const combo = property.split('-');
        for (const item of this) {
          const key = combo
            .map(property => item[property] || 'undefined')
            .join('-');
          if (map.has(key)) {
            map.set(key, map.get(key).concat(item));
          } else {
            map.set(key, [item]);
          }
        }
      }
      map.this = this;
      return map;
    },
    writable: true,
  });
} else {
  console.warn(`'mapBy' already existed in the prototype of 'Array'`);
}

if (!Array.prototype.hasOwnProperty('hashBy')) {
  Object.defineProperty(Array.prototype, 'hashBy', {
    value: function (props) {
      if (typeof props === 'string') props = [props];
      const hash = {};
      for (const property of props) {
        const combo = property.split('-');
        for (const item of this) {
          const key = combo
            .map(property => item[property] || 'undefined')
            .join('-');
          hash[key] = item;
        }
      }
      return hash;
    },
    writable: true,
  });
} else {
  console.warn(`'hashBy' already existed in the prototype of 'Array'`);
}

if (!Array.prototype.hasOwnProperty('last')) {
  Object.defineProperty(Array.prototype, 'last', {
    get: function () {
      return this[this.length - 1];
    },
  });
} else {
  console.warn(`'last' already existed in the prototype of 'Array'`);
}

if (!Object.prototype.hasOwnProperty('getIn')) {
  Object.defineProperty(Object.prototype, 'getIn', {
    value: function (iterable) {
      function getInside(o, i) {
        if (typeof i === 'string') i = i.split('.');
        if (!Array.isArray(i)) return undefined;
        let prop = i.shift();
        const dottedProp = prop.split('.');
        prop = dottedProp.shift();
        i.unshift(...dottedProp);
        const ob = o[prop];
        return ob && i.length ? getInside(ob, i) : ob;
      }
      return getInside(this, iterable);
    },
    writable: true,
  });
} else {
  console.warn(`'getIn' already existed in the prototype of 'Object'`);
}
