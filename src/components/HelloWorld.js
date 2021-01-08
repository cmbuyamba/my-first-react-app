import React from 'react';
import axios from 'axios';
import logo from '../assets/wyz-logo.png';

 const HelloWorld = (props) =>  {
	const makutaUser = {
		"username": "243810666161",
		"password": "12345678",
		"id": 3,
		"walletId": 3
	}
	
	const makutaTransaction = {
		"userCreate": {
				  "id": makutaUser.id
				},
				"wallet": {
				  "id": makutaUser.walletId
				},
				"clientFinancialCorporation": {
				  "id": 1
				},
				"clientCurrency": {
				  "id": 1
				},
				"walletAmount": 2,
				"clientAccountNumber": "243813617119",
				"walletOperation": "CREDIT",
				"reason": "Achat RickOne"
	  }
	;
	const makutaConfig = {
		headers: {
			'Content-Type': 'application/json',
			'App-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtYWt1dGEiOnsiZGF0YSI6eyJjb250ZW50cyI6WyJNQUtVVEEgUE9TIl19fX0.PiCEg26GtAtvwmQVbQo-gTchkso7rCL0d9TKWUbleBlueOUx1pOY-s9Qm8ObY_T9vjUpk3FohZtWZ0v8fkuIfNZa76oEjVnPOKPF9Lg2fGEX6dLR4bx3ncEToyefw9VaVJLtrGRxibysc3ZcGih5x3Ho9q4L3oTJ_fgsSDKqAIR1ZFASrzRkdBs3HxscfvZmQveyjZkPn8i1RVk_-zFK6k1TCqS2AklOQUUevgatn9ZDjBZlIkeTwreFwFjs1X-xSWrcRDWXxwf6zzb-It8J1nudfEIe6bvcGGrKpRO0xrT7_YWroJF0npDK4JY4wKpUv_2N-olncvy57lJixoY8-w'	
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
				// makutaConfig.headers.Authorization = 'Bearer ' + response.headers['user-token'];
				axios.put(makutaTransactionUrl + '/' + response.data.id, null, makutaConfig).then(
					response => console.log(response.data)
				)
			}
		).catch(error => console.log(error))
	}).catch(error => console.log(error));
	
 	return <div role="main" style={{width: "40%", margin: "auto"}}>
	 	<h1 style={{fontFamily: 'FANTASY', textAlign: 'center'}}>Welcome on BILEYI!</h1>
 		<img style={{width: '100%'}} src={logo} alt="Logo"></img>
 	</div>};

 export default HelloWorld;