 async function weather()
{
    let city=document.getElementById('searchbox').value; 
    window.alert(city);

const apiurl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=0fde24f18909b27ce870124bbcdf96d5`;
  let res= await fetch(apiurl);
 console.log(res);
 const data = await res.json();
 console.log(data);
 temp.innerHTML=parseInt(data.main.temp);
 document.getElementById('city').innerHTML=data.name;
 document.getElementById('city').innerHTML=data.name;
 document.getElementById('city').innerHTML=data.name;
 humidity.innerHTML=data.main.humidity;
 wind.innerHTML=data.wind.speed;
icon.src=`img/${data.weather.main}.png`;
}
