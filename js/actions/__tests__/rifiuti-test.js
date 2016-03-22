/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const expect = require('expect');
const {
    SELECT_RIFIUTO,
    selectRifiuto
} = require('../rifiuti');

describe('Test correctness of rifiuti actions', () => {

    it('select rifiuto', () => {
        let retval = selectRifiuto("TESTID");
        expect(retval).toExist();
        expect(retval.type).toBe(SELECT_RIFIUTO);
        expect(retval.id_rifiuto).toBe("TESTID");

    });
});
