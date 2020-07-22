class QueryString {
  constructor(data) {
    this.data = data;
  }

  stringify() {
    let str = Object.keys(this.data).map(val => {
      if(this.data[val].length) {
        return `${val}=${this.data[val].join(',')}`;
      }
    });
    str = str.filter(val => val !== undefined);

    let finalStr = str.join('&');
    return finalStr;
  }
  parse() {
    if(this.data) {
      const parsedObj = {};
      this.data.split('&').forEach(val => {
        const field = val.split('=')[0].slice(0,-1);
        const values = val.split('=')[1].split(',');
        parsedObj[field] = values;
      });
      return parsedObj;
    } else {
      return {};
    }
  }
}

export default QueryString;