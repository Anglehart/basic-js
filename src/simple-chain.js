const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return chainMaker;
  },
  removeLink(position) {
  if (position >= 1 && position <= this.chain.length){
      this.chain.splice(position - 1, 1);
      return chainMaker;
    } else {
      this.chain = [];
      throw new Error()
    }
  },
  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    let result = '( ' + this.chain.join(' )~~( ') + ' )';
    console.log(result);
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
