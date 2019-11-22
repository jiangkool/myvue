import axios from 'axios';

var api = axios.create({
  baseURL: 'http://myvue.test/api',
  timeout: 1000
});

export default {
	all(url,params) {
		return api.get(url,params)
	},
	find(url,params) {
		return api.get(url,params)
	},
	create(url,params) {
		return api.post(url,params)
	},
	update(url,params) {
		return api.put(url,params)
	},
	delete(url,id){
		return api.delete(url,id)
	}
}