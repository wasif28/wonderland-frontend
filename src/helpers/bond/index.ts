import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";

import MimIcon from "../../assets/tokens/MIM.svg";
import AvaxIcon from "../../assets/tokens/AVAX.svg";
import MimTimeIcon from "../../assets/tokens/TIME-MIM.svg";
import AvaxTimeIcon from "../../assets/tokens/TIME-AVAX.svg";

import { StableBondContract, LpBondContract, WavaxBondContract, StableReserveContract, LpReserveContract } from "../../abi";

export const mim = new StableBond({
    name: "mim",
    displayName: "MIM",
    bondToken: "MIM",
    bondIconSvg: MimIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.AVAX]: {
            bondAddress: "0x3a8758684A3B03cBAfE8aFb9625D659c6e1EFfD5",
            reserveAddress: "0x2e70C4d6Fdd62fD73f01c1359a76b8AcDB68ff25",
        },
    },
    tokensInStrategy: "60500000000000000000000000",
});

export const wavax = new CustomBond({
    name: "wavax",
    displayName: "wAVAX",
    bondToken: "AVAX",
    bondIconSvg: AvaxIcon,
    bondContractABI: WavaxBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.AVAX]: {
            bondAddress: "0xC059Ca00867fa5e064081A8BDaf49099E432e369",
            reserveAddress: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
        },
    },
    tokensInStrategy: "756916000000000000000000",
});

export const mimTime = new LPBond({
    name: "mim_time_lp",
    displayName: "TIME-MIM LP",
    bondToken: "MIM",
    bondIconSvg: MimTimeIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.AVAX]: {
            bondAddress: "0xA184AE1A71EcAD20E822cB965b99c287590c4FFe",
            reserveAddress: "0x113f413371fc4cc4c9d6416cf1de9dfd7bf747df",
        },
    },
    lpUrl: "https://www.traderjoexyz.com/#/pool/0x130966628846BFd36ff31a822705796e8cb8C18D/0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
});

export const avaxTime = new CustomLPBond({
    name: "avax_time_lp",
    displayName: "TIME-AVAX LP",
    bondToken: "AVAX",
    bondIconSvg: AvaxTimeIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.AVAX]: {
            bondAddress: "0xc26850686ce755FFb8690EA156E5A6cf03DcBDE1",
            reserveAddress: "0xf64e1c5B6E17031f5504481Ac8145F4c3eab4917",
        },
    },
    lpUrl: "https://www.traderjoexyz.com/#/pool/AVAX/0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
});

export default [mim, wavax, mimTime, avaxTime];
