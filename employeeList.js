(function () {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
                .then((response) => response.json())
                .then((res) => console.log(res))
                .catch(err => console.log(err))

})();
 
