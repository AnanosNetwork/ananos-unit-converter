import Big from 'big.js';

// Configure Big to never show exponential notation.
Big.NE = -30;
Big.PE = 39;

/** The amount of raw in one ana. */
const RAW_IN_ana = new Big('100000000000000000000000000000');

/** The amount of ana in one raw. */
const ANA_IN_RAW = new Big('0.00000000000000000000000000001');

/** The minimum raw amount. */
const RAW_MIN_AMOUNT = new Big('1');

/** The maximum raw amount. */
const RAW_MAX_AMOUNT = new Big('340282366920938463463374607431768211455');

/** The minimum ana amount. */
const ANA_MIN_AMOUNT = ANA_IN_RAW;

/** The maximum ana amount. */
const ANA_MAX_AMOUNT = new Big(RAW_MAX_AMOUNT).times(ANA_IN_RAW);

/**
 * Converts ana amount to raw amount.
 *
 * @param {number | string} ana The ana amount.
 *
 * @throws {Error} The ana amount must be defined.
 * @throws {TypeError} The ana amount must be a string or a number.
 * @throws {Error} The ana amount is invalid.
 * @throws {Error} The ana amount must not be negative.
 * @throws {Error} The ana amount is too small.
 * @throws {Error} The ana amount is too large.
 *
 * @returns {string} The raw amount.
 */
export function anaToRaw(ana: number | string): string {
	if (ana === undefined) {
		throw Error('The ana amount must be defined.');
	}

	if (typeof ana !== 'string' && typeof ana !== 'number') {
		throw TypeError('The ana amount must be a string or a number.');
	}

	let anaBig: Big;

	try {
		anaBig = new Big(ana);
	} catch (error) {
		throw Error('The ana amount is invalid.');
	}

	if (anaBig.lt(0)) {
		throw Error('The ana amount must not be negative.');
	}

	if (anaBig.lt(ANA_MIN_AMOUNT)) {
		throw Error('The ana amount is too small.');
	}

	if (anaBig.gt(ANA_MAX_AMOUNT)) {
		throw Error('The ana amount is too large.');
	}

	return anaBig.times(RAW_IN_ana).toString();
}

/**
 * Converts raw amount to ana amount.
 *
 * @param {number | string} raw The raw amount.
 *
 * @throws {Error} The raw amount must be defined.
 * @throws {TypeError} The raw amount must be a string or a number.
 * @throws {Error} The raw amount is invalid.
 * @throws {Error} The raw amount must not be negative.
 * @throws {Error} The raw amount is too small.
 * @throws {Error} The raw amount is too large.
 *
 * @returns {string} The ana amount.
 */
export function rawToAna(raw: number | string): string {
	if (raw === undefined) {
		throw Error('The raw amount must be defined.');
	}

	if (typeof raw !== 'string' && typeof raw !== 'number') {
		throw TypeError('The raw amount must be a string or a number.');
	}

	let rawBig: Big;

	try {
		rawBig = new Big(raw);
	} catch (error) {
		throw Error('The raw amount is invalid.');
	}

	if (rawBig.lt(0)) {
		throw Error('The raw amount must not be negative.');
	}

	if (rawBig.lt(RAW_MIN_AMOUNT)) {
		throw Error('The raw amount is too small.');
	}

	if (rawBig.gt(RAW_MAX_AMOUNT)) {
		throw Error('The raw amount is too large.');
	}

	return rawBig.times(ANA_IN_RAW).toString();
}
