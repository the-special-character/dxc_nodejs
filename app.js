function sum(a, b) {
  return a + b;
}

function checkData(param) {
  if (param) {
    return "data is available";
  } else {
    return "data is not available";
  }
}

module.exports = { sum, checkData };

// module.exports = add;
