const API_KEY = '59954d43';
const API_URL = 'http://www.omdbapi.com/';
var axios = require('axios');


class API_MOVIES{
	constructor(movie)
	{
		this.movie= movie;
	}
	fetchMovie(){
    return axios
    .get(`${API_URL}?apikey=${API_KEY}&t=${movie}`, {
      crossdomain: true
    })
  }
}