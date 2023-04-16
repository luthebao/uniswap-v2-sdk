export interface ContractInfo {
    proxyAddress: string;
    implAddress: string;
    version: string;
    contract: string;
    operator: string;
    fromBlock: number;
}

export interface Deployment {
    weth: ContractInfo;
    router: ContractInfo;
    factory: ContractInfo;
}

export interface DeploymentFull {
    [chainId: number]: Deployment;
}

export const DeploymentInfo: DeploymentFull = {
    "280": {
        "weth": {
            "proxyAddress": "0x9A7bcDabFD9eE0Bab57F6d436920840F5E1675a9",
            "implAddress": "0x9A7bcDabFD9eE0Bab57F6d436920840F5E1675a9",
            "version": "1.0.0",
            "contract": "WETH9",
            "operator": "0x3eA0949424eBB2A3d311a943e53773CB05C4BE3e",
            "fromBlock": 10108203
        },
        "factory": {
            "proxyAddress": "0x5372407A1787802055a9697b376B886C67f01Cb9",
            "implAddress": "0x5372407A1787802055a9697b376B886C67f01Cb9",
            "version": "1.0.0",
            "contract": "UniswapV2Factory",
            "operator": "0x3eA0949424eBB2A3d311a943e53773CB05C4BE3e",
            "fromBlock": 10108204
        },
        "router": {
            "proxyAddress": "0xC53b3f994d3f0576b81065E394269290330B211E",
            "implAddress": "0xC53b3f994d3f0576b81065E394269290330B211E",
            "version": "1.0.0",
            "contract": "UniswapV2Router02",
            "operator": "0x3eA0949424eBB2A3d311a943e53773CB05C4BE3e",
            "fromBlock": 10108205
        }
    }
};
