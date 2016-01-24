import test from 'ava';
import {version} from '../';
import pkg from '../package.json';

test('version', t => {
    t.is(pkg.version, version());
});
