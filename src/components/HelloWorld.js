import React from 'react'
import axios from 'axios'
import logo from '../assets/wyz-logo.png'

const freshPayData = {
	"merchant_id" : "jwHfjdopenc3yt$Tb",
    "merchant_secrete": "jz5ulzR!a54kGg!iF",
	"amount" : "100",
	"currency" : "CDF",
	"action" : "debit",
	"customer_number" : "243813617119",
	"firstname" : "SupportTest",
	"lastname" : "SupportTest",
	"e-mail" : "Support@gofreshbakery.com",
	"reference" : "testfp09",
	"method" : "mpesa",
}

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

const freshPayConfig = {
    'Content-Type': 'application/json'
}

const makutaLoginUrl = "https://dev.makuta.cash/auth/login";
const makutaTransactionUrl = "https://dev.makuta.cash/api/v1/transactions";

axios.post(makutaLoginUrl, makutaUser, makutaConfig).then(
	response => {
	console.log('Response Headers: ', response)	
	window.userToken = response.headers['user-token'];
	makutaConfig.headers.Authorization = 'Bearer ' + window.userToken;
	console.log(response.data);
	axios.post(makutaTransactionUrl, makutaTransaction, makutaConfig).then(
		response => console.log(response.data)
	).catch(error => console.log(error))
}).catch(error => console.log(error));

//axios.post("https://146.148.10.8/api/v5", freshPayData, freshPayConfig).then(response => console.log(response.data));

const HelloWorld = (props) =>  <div style={{width: "40%", margin: "auto"}}>
		<img style={{width: '100%'}} src={logo} alt=" "></img>
	</div>;

export default HelloWorld;