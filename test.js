import test from 'ava';
import {hello} from './index.js';

test('hello', t => {
    const result = hello("Brian");
    t.is(result, "brian");
});