import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import renderer from "react-test-renderer";

import { GET_DOG_QUERY, Dog } from './dog';

const wait = require('waait');

it('should render dog', async () => {
  const dogMock = {
    request: {
      query: GET_DOG_QUERY,
      variables: { name: 'Buck' },
    },
    result: {
      data: { dog: { id: 1, name: 'Buck', breed: 'poodle' } },
    },
  };

  const component = renderer.create(
    <MockedProvider mocks={[dogMock]} addTypename={false}>
      <Dog name="Buck" />
    </MockedProvider>,
  );

  await wait(0); // wait for response
  console.log(component.toJSON());

  const p = component.root.findByType('p');
  expect(p.children).toContain('Buck is a poodle');
});