export interface PairInfo {
    ChainID: number,
    Pair: {
        Name: string,
        Tokens: string[],
        Address: string
    },
    Reserves: number[],
    Liquidity: number,
    Router: string
};

export interface HoneypotScanResponse {
    Token: {
        Name: string,
        Symbol: string,
        Decimals: number,
        Address: string
    },
    WithToken: {
        Name: string,
        Symbol: string,
        Decimals: number,
        Address: string
    },
    IsHoneypot: boolean,
    Error: null | string,
    MaxBuy: null | string | number,
    MaxSell: null | string | number,
    BuyTax: number,
    SellTax: number,
    TransferTax: number,
    Flags: null | any,
    BuyGas: number,
    SellGas: number,
    Chain: {
        ID: number,
        Name: string,
        ShortName: string,
        Currency: string
    },
    Router: string
    Pair: PairInfo,
    PairAddress: string
}

export interface ContractVerificationResponse {
    HasProxyCalls: boolean,
    Contracts: {
        [address: string]: boolean
    }
}

export type GetPairsResponse = Array<PairInfo>;