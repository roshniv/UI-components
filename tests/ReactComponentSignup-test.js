/* global jest, expect, describe, it */

jest.dontMock('../src/components/Signup');

describe('ReactComponentSignup', function() {
    // Required modules
    let React = require('react/addons'),
        ReactComponentSignup = require('../src/components/ReactComponentSkeleton'),
        _ = require('lodash');

    let TestUtils = React.addons.TestUtils;

    it('should fail', function() {
        expect(false).toBe(true);
    });
});
