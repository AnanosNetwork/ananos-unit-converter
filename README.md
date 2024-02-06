# Ananos Unit Converter

Ananos Unit Converter is a thoroughly-tested library for converting units of the [Ananos](https://ananos.cc/) cryptocurrency. It supports the conversion of Raw to Ananos and Ananos to Raw.

This library code is based on great [nano-unit-converter library](https://github.com/alecrios/nano-unit-converter) by Alec Rios. 

## Unit Specifications

**Raw** `10^0` - The smallest unit, commonly used in software code.

**Ananos** `10^29` - A human-friendly unit, commonly used in software interfaces.

```
100000000000000000000000000000 Raw = 1 Ananos
```

Note: In this library, Raw and Ananos are referred to as `raw` and `ana`, respectively. This is to avoid casing conflicts between Nano units and coding conventions.

## Installation

```
npm install ananos-unit-converter
```

## API

``` ts
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
export declare function anaToRaw(ana: number | string): string;
```

``` ts
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
export declare function rawToAna(raw: number | string): string;
```

## Examples

```js
import { anaToRaw, rawToAna } from 'ananos-unit-converter';

anaToRaw('0.1');                             // '10000000000000000000000000000'
anaToRaw('1');                               // '100000000000000000000000000000'
anaToRaw('10');                              // '1000000000000000000000000000000'

rawToAna('10000000000000000000000000000')   // '0.1'
rawToAna('100000000000000000000000000000')  // '1'
rawToAna('1000000000000000000000000000000') // '10'
```
