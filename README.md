# heneypot-is

* `Simple honeypot.is api v4 wrapper`
* `Node.js >= v11.0.0`
* `TypeScript >= 4.6.3`
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
import HoneypotScan, { HoneypotChains } from '@normalizex/honeypot-is';
```
NodeJS (commonjs)
```js
const { HoneypotScan, HoneypotChains } = require('@normalizex/honeypot-is');
```
```
Browser:
```html
<script src="https://unpkg.com/@normalizex/honeypot-is/dist/index.browser.min.js"></script>
<!-- OR -->
<script src="https://cdn.jsdelivr.net/npm/@normalizex/honeypot-is/dist/index.browser.min.js"></script>

<script type="text/javascript">
console.log(HoneypotScan)//function
console.log(HoneypotChains)//Object
</script>
```
# Example
```js
import HoneypotScan, { HoneypotChains } from '@normalizex/honeypot-is';

const BUSD = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
HoneypotScan(BUSD, HoneypotChains.BinanceSmartChain).then(scan => {
	/**
		{
			is_honeypot: false,
			message: null,
			max_tx_amount: 0,
			max_tx_amount_bnb: 0,
			sell: { tax: 0, gas: 117300 },
			buy: { tax: 0, gas: 162526 }
		} 
	*/
});

/**
 * SCAM TOKEN! Honeypot!
*/
const ITM = '0x64c37c3d6b5ff0fdea26eec0c8b6de487105291c'//SCAM!
HoneypotScan(ITM, HoneypotChains.BinanceSmartChain).then(scan => {
	/**
		{
			is_honeypot: true,
			message: 'execution reverted: PancakeLibrary: INSUFFICIENT_INPUT_AMOUNT',
			max_tx_amount: 0,
			max_tx_amount_bnb: 0,
			sell: { tax: 0, gas: 0 },
			buy: { tax: 0, gas: 0 }
		}
	*/
});
```
***
# Donate
Of course, the project was made not for any benefit, but for my personal convenience :)

But I wanted to share this convenience with the Github community.

You can send me any amount of any coins in the **ETH / BSC** network as a donation to the address: **`0x35552CF3Ce8Cc8a0f7fdC8Aa88a89b92e9Ab5FdB`**