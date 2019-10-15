
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
  .fetchTodayForecast()
  .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
  .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
// Fonction appelée lors du click du bouton
function start(city) {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
  .fetchTodayForecast()
  .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      apiWeather
      .getThreeDaysForecast()
      .then(function(response2) {
        const list = response2.data.list;
        var main_tab = [];
        var description_tab=[];
        var temp_tab=[];
        var icon_tab=[];
        list.forEach(function(element, index)
        {
          if(index!=0)
          {
            const main = (list[index].weather[0].main);
            const description = list[index].weather[0].description;
            const icon= apiWeather.getHTMLElementFromIcon(list[index].weather[0].icon);
            const temp = list[index].temp.day;
            document.getElementById(`day${(index+1)}-forecast-main`).innerHTML = main;
            document.getElementById(`day${index+1}-forecast-more-info`).innerHTML = description;
            document.getElementById(`icon${index+1}-weather-container`).innerHTML = icon;
            document.getElementById(`day${index+1}-forecast-temp`).innerHTML = `${temp}°C`;
          }
        });
        /*
        const main2=(list[1]).weather[0].main;
        const main3=(list[2]).weather[0].main;
        const main4=(list[3]).weather[0].main;
        list.forEach(description.push(element.weather[0].description);
        */
        /*
        const description2 = (list[1]).weather[0].description;
        const description3 = (list[2]).weather[0].description;
        const description4 = (list[3]).weather[0].description;
        */
          /*
        const temp2 = list[1].temp.day;
        const temp3 = list[2].temp.day;
        const temp4 = list[3].temp.day;
        */
          /*
        const icon2 = apiWeather.getHTMLElementFromIcon((list[1]).weather[0].icon);
        const icon3 = apiWeather.getHTMLElementFromIcon((list[2]).weather[0].icon);
        const icon4 = apiWeather.getHTMLElementFromIcon((list[3]).weather[0].icon);
        */
        // Modifier le DOM
        /*
        main_tab.forEach(function(element, index)
        {
          if(index!=0)
          {
            document.getElementById(`day${(index+1)}-forecast-main`).innerHTML = element;
            
          }
        });
        description_tab.forEach(function(element,index)
          {         if(index!=0)
            {
              document.getElementById(`day${index+1}-forecast-main`).innerHTML = element;
            }
          });
        icon_tab.forEach(function(element,index)
        {
          if(index!=0)
          {
            document.getElementById(`icon${index+1}-weather-container`).innerHTML = element;
          }
        });
        temp_tab.forEach(function(element,index)
        {
          if(index!=0)
          {
            document.getElementById(`day${index+1}-forecast-temp`).innerHTML = `${element}°C`;
          }

        });
        */
          /*
        document.getElementById(`day${i}-forecast-main`).innerHTML = main;
        document.getElementById(`day${i}-forecast-more-info`).innerHTML = description2;
        document.getElementById(`icon${i}-weather-container`).innerHTML = icon2;
        document.getElementById(`day${i}-forecast-temp`).innerHTML = `${temp2}°C`;
        */
  /*

      for(let i=1;i<4;i++)
      {
      document.getElementById('day'+(i+1)+'-forecast-main').innerHTML = (list[i]).weather[0].main;
      document.getElementById('day'+(i+1)+'-forecast-more-info').innerHTML = (list[i]).weather[0].description;;
      document.getElementById('icon'+(i+1)+'-weather-container').innerHTML = apiWeather.getHTMLElementFromIcon((list[i]).weather[0].icon);
      document.getElementById('day'+(i+1)+'-forecast-temp').innerHTML = `${list[i].temp.day;}°C`;
      }

      */

    })
      
    })
.catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
