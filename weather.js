function getData() {
  let city = document.querySelector("#query").value;

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0e09b0faf56517492a5928d738c48373`;

  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
    console.log(res)
      myData(res);
    })
    .catch(function (err) {
      console.log(err);
    });
}
// ""
function myData(data) {
    let url1 = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    let container =  document.querySelector("#container")
    container.innerHTML = ""
    let h2 = document.createElement("h2");
  h2.innerText = data.name;

  let h3 = document.createElement("h3");
  h3.innerText = `Temperature : ${data.main.temp}`;

  let h4 = document.createElement("h3");
  h4.innerText = `Max Temperature : ${(data.main.temp_max-273).toFixed(2)}`;

  let h5 = document.createElement("h3");
  h5.innerText = `Min Temperature : ${(data.main.temp_min-273).toFixed(2)}`;

  let h6 = document.createElement("h3");
  h6.innerText = `Wind Degree : ${data.wind.deg}`;

  let h7 = document.createElement("h3");
  h7.innerText = `Wind Speed : ${data.wind.speed}`;

  let h8 = document.createElement("h3");
  h8.innerText = `Clouds : ${data.clouds.all}`;

  let h9 = document.createElement("h3");
  h9.innerText = `Sunset : ${data.sys.sunrise}`;

  let h10 = document.createElement("h3");
  h10.innerText = `Sunrise : ${data.sys.sunset}`;

 container.append(h2, h3, h4, h5,h6,h7,h8,h9,h10);
let locimg = document.querySelector("#gmap_canvas");
locimg.src=url1;

}

