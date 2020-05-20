module.exports = {
  add,
  sub,
  multiply,
  divide
};

function add(...args) {

  return args
  .filter(v => Boolean(v))
  .reduce((acc, e) => {
    return acc + e
  }, 0);
}


function sub(...args){
  return args.reduce((acc, e) => acc - e)
}

function multiply(...args){
  return args.reduce((acc, e) => acc * e)
}

function divide(a, b){
  return a/b
}