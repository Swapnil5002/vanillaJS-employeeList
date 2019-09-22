function handleClick(event){
    event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(response => {
                const userName = document.getElementById("username").value
                const passWord =document.getElementById("password").value
                const filterUserObject = response.filter(user => user.username == userName);
                if (filterUserObject[0].address.city == passWord) {
                    window.location.href = window.location.href.split("/").slice(0, window.location.href.split("/").length - 1).concat("employeeList.html").join("/");
                }
            })
            .catch(err => console.log(err))
        }
