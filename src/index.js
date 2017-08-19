import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import CreateTest from './mutations/CreateTestMutation'
import environment from './relay'

import Page from './components/Page'

import {useLinkComponent} from '@shopify/polaris';
import {Link} from 'react-router';

useLinkComponent(Link);

    
const jsx = (<Router>
		<div>
			<Route exact path='/' render={(props) => <Page  {...props} ></Page>}/>
		</div>
	</Router>			
)

ReactDOM.render(jsx, document.querySelector('zipboss'))