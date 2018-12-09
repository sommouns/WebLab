const axios = require('axios')

const query = {
	username: '201635560210',
	password: '201635560210',
}

async function login({username, password}) {
	const res = await axios.post(`http://111.231.138.158/system/v1/login?username=${username}&password=${password}`)
	console.log(res.data)
}
login(query)