function fetchData(error) {
  return new Promise((resolve, reject) => {
    if (error === 'error') {
      reject('error');
    }
    setTimeout(() => {
      resolve('peanut butter');
    }, 300);
  });
}

function fetchDataWithCallback(callback) {
  callback(null, 'peanut butter');
}

module.exports = { fetchData, fetchDataWithCallback };
