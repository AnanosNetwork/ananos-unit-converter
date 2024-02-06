const { expect } = require('chai');
const { anaToRaw, rawToAna } = require('../dist/ananos-unit-converter');

const powerZero = { ana: '1', raw: '100000000000000000000000000000' };

const powerNegative = [
	{ ana: '0.00000000000000000000000000001', raw: '1' },
	{ ana: '0.0000000000000000000000000001', raw: '10' },
	{ ana: '0.000000000000000000000000001', raw: '100' },
	{ ana: '0.00000000000000000000000001', raw: '1000' },
	{ ana: '0.0000000000000000000000001', raw: '10000' },
	{ ana: '0.000000000000000000000001', raw: '100000' },
	{ ana: '0.00000000000000000000001', raw: '1000000' },
	{ ana: '0.0000000000000000000001', raw: '10000000' },
	{ ana: '0.000000000000000000001', raw: '100000000' },
	{ ana: '0.00000000000000000001', raw: '1000000000' },
	{ ana: '0.0000000000000000001', raw: '10000000000' },
	{ ana: '0.000000000000000001', raw: '100000000000' },
	{ ana: '0.00000000000000001', raw: '1000000000000' },
	{ ana: '0.0000000000000001', raw: '10000000000000' },
	{ ana: '0.000000000000001', raw: '100000000000000' },
	{ ana: '0.00000000000001', raw: '1000000000000000' },
	{ ana: '0.0000000000001', raw: '10000000000000000' },
	{ ana: '0.000000000001', raw: '100000000000000000' },
	{ ana: '0.00000000001', raw: '1000000000000000000' },
	{ ana: '0.0000000001', raw: '10000000000000000000' },
	{ ana: '0.000000001', raw: '100000000000000000000' },
	{ ana: '0.00000001', raw: '1000000000000000000000' },
	{ ana: '0.0000001', raw: '10000000000000000000000' },
	{ ana: '0.000001', raw: '100000000000000000000000' },
	{ ana: '0.00001', raw: '1000000000000000000000000' },
	{ ana: '0.0001', raw: '10000000000000000000000000' },
	{ ana: '0.001', raw: '100000000000000000000000000' },
	{ ana: '0.01', raw: '1000000000000000000000000000' },
	{ ana: '0.1', raw: '10000000000000000000000000000' },
];

const powerPositive = [
	{ ana: '10', raw: '1000000000000000000000000000000' },
	{ ana: '100', raw: '10000000000000000000000000000000' },
	{ ana: '1000', raw: '100000000000000000000000000000000' },
	{ ana: '10000', raw: '1000000000000000000000000000000000' },
	{ ana: '100000', raw: '10000000000000000000000000000000000' },
	{ ana: '1000000', raw: '100000000000000000000000000000000000' },
	{ ana: '10000000', raw: '1000000000000000000000000000000000000' },
	{ ana: '100000000', raw: '10000000000000000000000000000000000000' },
];

const assorted = [
	{ ana: '0.123456789', raw: '12345678900000000000000000000' },
	{ ana: '1.23456789', raw: '123456789000000000000000000000' },
	{ ana: '12.3456789', raw: '1234567890000000000000000000000' },
	{ ana: '123.456789', raw: '12345678900000000000000000000000' },
	{ ana: '1234.56789', raw: '123456789000000000000000000000000' },
	{ ana: '12345.6789', raw: '1234567890000000000000000000000000' },
	{ ana: '123456.789', raw: '12345678900000000000000000000000000' },
	{ ana: '1234567.89', raw: '123456789000000000000000000000000000' },
	{ ana: '12345678.9', raw: '1234567890000000000000000000000000000' },
	{ ana: '123456789', raw: '12345678900000000000000000000000000000' },
];

describe('anaToRaw', () => {
	it('should throw error if amount is not provided', () => {
		expect(() => anaToRaw()).to.throw(Error);
	});

	it('should throw error if amount is wrong type', () => {
		expect(() => anaToRaw(null)).to.throw(TypeError);
	});

	it('should throw error if amount is invalid', () => {
		expect(() => anaToRaw('zero')).to.throw(Error);
		expect(() => anaToRaw('0.0.0.0')).to.throw(Error);
	});

	it('should throw error if amount is negative', () => {
		expect(() => anaToRaw(-1)).to.throw(Error);
		expect(() => anaToRaw('-1')).to.throw(Error);
	});

	it('should throw error if amount is too small', () => {
		expect(() => anaToRaw('0.00000000000000000000000000001')).to.not.throw(Error);
		expect(() => anaToRaw('0.000000000000000000000000000001')).to.throw(Error);
	});

	it('should throw error if amount is too large', () => {
		expect(() => anaToRaw('3402823669.20938463463374607431768211455')).to.not.throw(Error);
		expect(() => anaToRaw('3402823669.20938463463374607431768211456')).to.throw(Error);
	});

	it('should convert 10^0', () => {
		expect(anaToRaw(powerZero.ana)).to.equal(powerZero.raw);
	});

	it('should convert 10^-n', () => {
		powerNegative.forEach((test) => {
			expect(anaToRaw(test.ana)).to.equal(test.raw);
		});
	});

	it('should convert 10^n', () => {
		powerPositive.forEach((test) => {
			expect(anaToRaw(test.ana)).to.equal(test.raw);
		});
	});

	it('should convert n', () => {
		assorted.forEach((test) => {
			expect(anaToRaw(test.ana)).to.equal(test.raw);
		});
	});
});

describe('rawToAna', () => {
	it('should throw error if amount is not provided', () => {
		expect(() => rawToAna()).to.throw(Error);
	});

	it('should throw error if amount is wrong type', () => {
		expect(() => rawToAna(null)).to.throw(TypeError);
	});

	it('should throw error if amount is invalid', () => {
		expect(() => rawToAna('zero')).to.throw(Error);
		expect(() => rawToAna('0.0.0.0')).to.throw(Error);
	});

	it('should throw error if amount is negative', () => {
		expect(() => rawToAna(-1)).to.throw(Error);
		expect(() => rawToAna('-1')).to.throw(Error);
	});

	it('should throw error if amount is too small', () => {
		expect(() => rawToAna('1')).to.not.throw(Error);
		expect(() => rawToAna('.1')).to.throw(Error);
	});

	it('should throw error if amount is too large', () => {
		expect(() => rawToAna('340282366920938463463374607431768211455')).to.not.throw(Error);
		expect(() => rawToAna('340282366920938463463374607431768211456')).to.throw(Error);
	});

	it('should convert 10^0', () => {
		expect(rawToAna(powerZero.raw)).to.equal(powerZero.ana);
	});

	it('should convert 10^-n', () => {
		powerNegative.forEach((test) => {
			expect(rawToAna(test.raw)).to.equal(test.ana);
		});
	});

	it('should convert 10^n', () => {
		powerPositive.forEach((test) => {
			expect(rawToAna(test.raw)).to.equal(test.ana);
		});
	});

	it('should convert n', () => {
		assorted.forEach((test) => {
			expect(rawToAna(test.raw)).to.equal(test.ana);
		});
	});
});
