import axios from "axios";
import {
	PairInfo,
	GetPairsResponse,
	HoneypotScanResponse,
	ContractVerificationResponse
} from './types/RequestsV1.types';

export class HoneypotIsV1 {
	private endpoint = 'https://api.honeypot.is/v1';
	private sub_endpoint = 'https://sapi.honeypot.is/v1'

	public getPairs = (tokenAddress: string, chainId: number | string) => 
		axios.get<GetPairsResponse>(`${this.endpoint}/GetPairs`, {
			params: {
				chainID: chainId,
				address: tokenAddress
			}
		}).then((response) => response.data);

	public honeypotScan = (
		tokenAddress: string, 
		router: string,
		pair: string, 
		chainId: number | string
	) => 
		axios.get<HoneypotScanResponse>(`${this.endpoint}/IsHoneypot`, {
			params: {
				pair,
				router,
				chainID: chainId,
				address: tokenAddress
			}
		}).then((response) => response.data);

	public getContractVerification = (
		tokenAddress: string,
		router: string,
		pair: string,
		chainId: string | number
	) => 
		axios.get<ContractVerificationResponse>(`${this.sub_endpoint}/GetContractVerification`, {
			params: {
				pair,
				router,
				chainID: chainId,
				address: tokenAddress
			}
		}).then((response) => response.data);
}

export {
	PairInfo,
	GetPairsResponse,
	HoneypotScanResponse,
	ContractVerificationResponse
}