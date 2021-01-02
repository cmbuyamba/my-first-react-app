import React from 'react'
import axios from 'axios'
import Card from './Card'

const data = {
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

const config = {
    'Content-Type': 'application/json'
}

axios.post("https://146.148.10.8/api/v5", data, config).then(response => console.log(response.data));

const HelloWorld = (props) =>  ['Celestin'].map((input) => <Card title={input} content="Hello World!" />);

export default HelloWorld;