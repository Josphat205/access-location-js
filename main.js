const findLocation = ()=>{
    const locate = document.querySelector('.status')
    const title = document.querySelector('.country')
    const city = document.querySelector('.city')
    const success  = (position)=>{
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        getExactLocation(lat,long)
    }
    const getExactLocation = (lat,long)=>{
      const API = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`;
      fetch(API)
      .then(res=>res.json())
      .then(data=>{
        locate.textContent = data.principalSubdivision;
        title.textContent = data.countryName;
        city.textContent = data.city;
      })
    }
    const error  = ()=>{
        locate.textContent = "Unable to connect location";
    }
    navigator.geolocation.getCurrentPosition(success,error);
}


document.querySelector('.btnL').addEventListener('click',findLocation);