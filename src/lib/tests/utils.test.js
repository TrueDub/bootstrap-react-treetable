import React from 'react';

import {Utils} from '../utils';

describe('testing the Utils functions', () => {
    it('returns JSX correctly', () => {
        expect(React.isValidElement(Utils().parseStringToJsx('<div><span>Fred</span></div>')));
    })
});
