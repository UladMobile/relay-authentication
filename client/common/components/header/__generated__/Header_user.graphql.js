/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule Header_user.graphql
 * @generated SignedSource<<6a975ccda9d452b0bd8aca7b39328d20>>
 * @flow
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Header_user = {|
  +role: ?string;
  +postCount: ?number;
|};
*/

const fragment /*: ConcreteFragment*/ = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'Header_user',
  selections: [
    {
      kind: 'ScalarField',
      alias: null,
      args: null,
      name: 'role',
      storageKey: null,
    },
    {
      kind: 'ScalarField',
      alias: null,
      args: null,
      name: 'postCount',
      storageKey: null,
    },
  ],
  type: 'User',
};

module.exports = fragment;
