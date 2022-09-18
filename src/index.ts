import axios from "axios";

export const HoneypotChains = {
	BinanceSmartChain: 'bsc2',
	Ethereum: 'eth'
}

interface HoneypotResponse {
	IsHoneypot: boolean,
	Error: null | string
	MaxTxAmount: number
	MaxTxAmountBNB: number
	BuyTax: number
	SellTax: number
	BuyGas: number
	SellGas: number
}

export const HoneypotScan = async (tokenAddress: string, chain: 'bsc2' | 'eth' = 'bsc2') => axios.get<HoneypotResponse>('https://aywt3wreda.execute-api.eu-west-1.amazonaws.com/default/IsHoneypot', {
	params: {
		chain,
		token: tokenAddress
	}}).then(res => {
		return {
			is_honeypot: res.data.IsHoneypot,
			message: res.data.Error,
			max_tx_amount: res.data.MaxTxAmount,
			max_tx_amount_bnb: res.data.MaxTxAmountBNB,
			sell: {
				tax: res.data.SellTax,
				gas: res.data.SellGas
			},
			buy: {
				tax: res.data.BuyTax,
				gas: res.data.BuyGas
			}
		}
})

export default HoneypotScan;