fetch('../components/navbar.html')
            .then(function (response) {
                return response.text();
            })
            .then(function (body) {
                document.querySelector('#navbarSection').innerHTML = body;
            });
fetch('../components/sidebar.html')
    .then(function (response) {
        return response.text();
    })
    .then(function (body) {
        document.querySelector('#sidebarSection').innerHTML = body;
    });