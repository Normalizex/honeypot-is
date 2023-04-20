# honeypot-is

* `Honeypot.is api wrapper`
***
# Installing
Using npm:
```console
npm i @normalizex/honeypot-is
```
Using yarn:
```console
yarn add @normalizex/honeypot-is
```
Using jsDelivr CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/@normalizex/honeypot-is/dist/index.browser.min.js"></script>
```
Using unpkg CDN:
```html
<script src="https://unpkg.com/@normalizex/honeypot-is/dist/index.browser.min.js"></script>
```
***
# Usage
NodeJS (ES6):
```js
import { HoneypotIsV1 } from '@normalizex/honeypot-is';
```
NodeJS (commonjs)
```js
const { HoneypotIsV1 } = require('@normalizex/honeypot-is');
```
Browser:
```html
<script src="https://unpkg.com/@normalizex/honeypot-is/dist/index.browser.min.js"></script>
<!-- OR -->
<script src="https://cdn.jsdelivr.net/npm/@normalizex/honeypot-is/dist/index.browser.min.js"></script>

<script type="text/javascript">
	console.log(HoneypotIsV1)//function
</script>
```
# Example
```js
import { HoneypotIsV1 } from '@normalizex/honeypot-is';

const CHAIN_ID = 56;
const honeypotis = new HoneypotIsV1();

const BUSD = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
const BUSD_PAIRS = await honeypotis.getPairs(BUSD, CHAIN_ID);

await honeypotis.honeypotScan(
	BUSD, 
	BUSD_PAIRS[0].Router, 
	BUSD_PAIRS[0].Pair,
	CHAIN_ID
).then((result) => {
	console.log(result)
	/**
		Token: {...},
		WithToken: {...},
		IsHoneypot: false,
		Chain: {...},
		...etc...
	*/
});

/**
 * SCAM TOKEN! Honeypot!
*/
const ITM = '0x64c37c3d6b5ff0fdea26eec0c8b6de487105291c'//SCAM!
const ITM_PAIRS = await honeypotis.getPairs(ITM, CHAIN_ID);

await honeypotis.honeypotScan(
	ITM, 
	ITM_PAIRS[0].Router, 
	ITM_PAIRS[0].Pair,
	CHAIN_ID
).then((result) => {
	console.log(result)
	/**
		Token: {...},
		WithToken: {...},
		IsHoneypot: true,
		Error: "execution reverted: TransferHelper: TRANSFER_FROM_FAILED",
		Chain: {...},
		...etc...
	*/
});
```