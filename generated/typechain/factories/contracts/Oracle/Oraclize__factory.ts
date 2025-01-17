/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Oraclize,
  OraclizeInterface,
} from "../../../contracts/Oracle/Oraclize";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOracle",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOracle",
        type: "address",
      },
    ],
    name: "OracleTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class Oraclize__factory {
  static readonly abi = _abi;
  static createInterface(): OraclizeInterface {
    return new utils.Interface(_abi) as OraclizeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Oraclize {
    return new Contract(address, _abi, signerOrProvider) as Oraclize;
  }
}
