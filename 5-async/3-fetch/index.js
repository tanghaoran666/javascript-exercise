function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  return fetch(url).then(function(response) {
    if (response.status === 200) {
      return response.json();
    }
    return Promise.reject(new TypeError('error message'));
  });
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    // console.log(result.name);
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
