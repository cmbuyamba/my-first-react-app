import React from 'react'
import axios from 'axios'

//axios.post("https://146.148.10.8/api/v5", freshPayData, freshPayConfig).then(response => console.log(response.data));

 const HelloWorld = (props) =>  {
	const makutaUser = {
		"username": "243810666161",
		"password": "12345678"
	}
	
	const makutaTransaction = {
		"userCreate": {
				  "id": 1
				},
				"wallet": {
				  "id": 7
				},
				"clientFinancialCorporation": {
				  "id": 1
				},
				"clientCurrency": {
				  "id": 1
				},
				"walletAmount": 2,
				"clientAccountNumber": "0824657291",
				"walletOperation": "CREDIT",
				"reason": "Achat RickOne"
	  }
	;
	const makutaConfig = {
		headers: {
			'Content-Type': 'application/json',
			'App-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtYWt1dGEiOnsiZGF0YSI6eyJjb250ZW50cyI6WyJXWVpURUNLIl19fX0.QxXYCTgY579pZTWVDhrtT5R3euRBpzLBZUnzZ1HNFU0EC4M0J2EoYKl_mARWD77EJza1bpudu0o4HSskJ40jk-FdpCqi2EVU53ltdHZIcS60kDIRmTjmOoUibsn4dShu_e-9hdjdCk2H4a2oshjesbnYFBQU0Ev6MQ5WpCllMh6QYbZ7lwSrA1w_d7jcIlfjm1u7EjLi7DmpCWdw4lAP6utoY594vRB7hX3j30eAVnncaRUy4LM3R_kdGjgxqTeHsywHg2TfGDGfm3B8K1HoC8jM2qxjusEANud7mcz6PldMjP6kwfL7POz8xHi3rSr8s_iJuXqVQFAsNcONoEnPnQ'	
		}
	}
	
	const makutaLoginUrl = "https://dev.makuta.cash/auth/login";
	const makutaTransactionUrl = "https://dev.makuta.cash/api/v1/transactions";
	
	axios.post(makutaLoginUrl, makutaUser, makutaConfig).then(
		response => {
		console.log(response.data);
		makutaConfig.headers.Authorization = 'Bearer ' + response.headers['user-token'];
		axios.post(makutaTransactionUrl, makutaTransaction, makutaConfig).then(
			response => {
				console.log(response.data);
			}
		).catch(error => console.log(error))
	}).catch(error => console.log(error));
	
 	return <div role="main" style={{width: "40%", margin: "auto"}}>
	 	<h1 style={{fontFamily: 'FANTASY', textAlign: 'center'}}>Welcome on BILEYI!</h1>
 		<img style={{width: '100%'}} src='../assets/wyz-logo.png' alt=" "></img>
 	</div>};

 export default HelloWorld;