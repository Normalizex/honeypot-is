// Interface for v1 api

export interface QuoteParamsV1 {
	sellAmount?: string | number
	buyAmount?: string | number
	slippagePercentage?: string | number
	gasPrice?: string | number
	takerAddress?: string
	excludedSources?: string
	includedSources?: string
	skipValidation?: boolean
	intentOnFilling?: boolean
	feeRecipient?: string
	buyTokenPercentageFee?: string | number
	affiliateAddress?: string
}

export interface QuoteResponseV1 {
	chainId: number
	price: string
	estimatedPriceImpact: string
	data: string
	value: string
	gasPrice: string
	gas: string
	estimatedGas: string
	protocolFee: string
	minimumProtocolFee: string
	buyTokenAddress: string
	buyAmount: string
	sellTokenAddress: string
	sellAmount: string
	sources: Array<{
		name: string
		proportion: string
	}>,
	allowanceTarget: string
	orders: Array<any>
	sellTokenToEthRate: string
	buyTokenToEthRate: string
}

export interface PriceParamsV1 {
	sellAmount?: string | number
	buyAmount?: string | number
	slippagePercentage?: string | number
	gasPrice?: string | number
	takerAddress?: string
	excludedSources?: string
	includedSources?: string
	skipValidation?: boolean
	intentOnFilling?: boolean
	feeRecipient?: string
	buyTokenPercentageFee?: string | number
	affiliateAddress?: string
}

export interface PriceResponseV1 {
	chainId: number
	price: string
	estimatedPriceImpact: string
	value: string
	gasPrice: string
	gas: string
	estimatedGas: string
	protocolFee: string
	minimumProtocolFee: string
	buyTokenAddress: string
	buyAmount: string
	sellTokenAddress: string
	sellAmount: string
	sources: Array<{
		name: string
		proportion: string
	}>,
	allowanceTarget: string
	sellTokenToEthRate: string
	buyTokenToEthRate: string
}