import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {EmbeddedApp} from '@shopify/polaris/embedded';

import CreateKey from '../../mutations/CreateKeyMutation'
import environment from '../relay'

import Parser from './parser'
import {Env} from '../../util'

import CreateTemplate from '../../apps/admin/routes/CreateTemplate'
import CreateProduct from '../../apps/admin/routes/CreateProduct'
import Dashboard from '../../apps/admin/routes/Dashboard'
import Feature from '../../apps/admin/routes/Feature'
import Help from '../../apps/admin/routes/Help'
import Template from '../../apps/admin/routes/Template'
import Option from '../../apps/admin/routes/Option'
import Product from '../../apps/admin/routes/Product'
import View from '../../apps/admin/routes/View'

import {useLinkComponent} from '@shopify/polaris';
import {Link} from 'react-router';

useLinkComponent(Link);

const route = {props:{theme:'zipboss'}}
route.node = document.querySelector('zipboss')


if(route.node){
	
	// location
	let location = Env.location()
	
	// session
	/*route.props.session = {id:null,features:{}}
    if(!route.props.session.id){
    	// save to db
		CreateKey.commit(environment,
			             "{features:{}}",
			             "SESSION"
		).then((response) => {
			route.props.session.id = response.createKey.key.id
	    }).catch((response) => {
	    })
    } */
    
	// sdk || route
	const sdk = route.node.hasAttribute('sdk')
	if(sdk) {
		route.props.location = location
		Parser.parse(route.node, route.props)
	}	
	else {
		require('@shopify/polaris/styles.css')
		route.props.theme = 'polaris'
		
		// TODO: Detect if customizer.apps.zipboss.com, then route below

		route.jsx = (
			
			<Router>
			<div>
				<Route exact path='/' render={(props) => <Dashboard  {...props} {...route.props}></Dashboard>}/>
				<Route exact path='/create-template' render={(props) => <CreateTemplate  {...props} {...route.props}></CreateTemplate>}/>
				<Route exact path='/create-product' render={(props) => <CreateProduct  {...props} {...route.props}></CreateProduct>}/>
				<Route exact path='/feature' render={(props) => <Feature  {...props} {...route.props}></Feature>}/>
				<Route exact path='/help' render={(props) => <Help  {...props} {...route.props}></Help>}/>
				<Route exact path='/option' render={(props) => <Option  {...props} {...route.props}></Option>}/>
				<Route exact path='/product' render={(props) => <Product  {...props} {...route.props}></Product>}/>
				<Route exact path='/template' render={(props) => <Template  {...props} {...route.props}></Template>}/>
				<Route exact path='/view' render={(props) => <View  {...props} {...route.props}></View>}/>				
			</div>
			</Router>			
		)

		if(Env.isEmbedded()){
			route.jsx = (
				<EmbeddedApp apiKey="2848c65f56e6c42f138d236ca81337d2"
					         shopOrigin={`https://${location.params.shop}`}>
					{route.jsx}
				</EmbeddedApp>	
			)
		}

		ReactDOM.render(route.jsx, route.node)
	}
}

export default route