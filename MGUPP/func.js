var cities = {
    gl: ["кабинет 3", "кабинет 4", "кабинет 5"],
    k3: ["Главный холл", "кабинет 4", "кабинет 5"],
    k4: ["Главный холл", "кабинет 3", "кабинет 5"],
    k5: ["Главный холл", "кабинет 3", "кабинет 4"]
}; 

var country = document.getElementById("country");
var city = document.querySelector("#city")
window.onload = selectCountry;
country.onchange = selectCountry;

function selectCountry(ev) {
    city.innerHTML = "";
    var c = this.value || "gl", o;
    for(let i = 0; i < cities[c].length; i++){
        o = new Option(cities[c][i],i,false,false);
        city.add(o);
    };
}