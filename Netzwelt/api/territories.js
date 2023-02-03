fetch('https://netzwelt-devtest.azurewebsites.net/Territories/All')
.then(res => res.json())
.then(data => console.log(data))