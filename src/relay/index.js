import React, {Component} from 'react';
import {Environment, Network, RecordSource, Store} from 'relay-runtime'
import {relayApi} from '../route/endpoints'
const source = new RecordSource();
const store = new Store(source);

// network
function fetchQuery(
  operation,
  variables,
) {
  return fetch(relayApi, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
}

const network = Network.create(fetchQuery);
const environment = new Environment({
  network,
  store,
});

export default environment