import {describe, expect, test} from 'vitest';
import React from 'react';

import {Utils} from '../utils';

describe('testing the Utils functions', () => {
    test('returns JSX correctly', () => {
        expect(React.isValidElement(Utils().parseStringToJsx('<div><span>Fred</span></div>')));
    })
});

