import { describe, expect, it } from 'vitest';

import { starterMain } from '../src/index';

// The two tests marked with concurrent will be run in parallel
describe('example', () => {
	it('main 45', () => {
		expect(starterMain()).eq(42);
	});
});
