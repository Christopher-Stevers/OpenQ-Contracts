// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.16;

/**
 * @dev Third party imports inherited by ClaimManagerStorageV1
 */
import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol';

/**
 * @dev Custom imports inherited by ClaimManagerStorageV1
 */
import '../OpenQ/IOpenQ.sol';
import '../Library/OpenQDefinitions.sol';
import '../Oracle/Oraclize.sol';
import '../Bounty/Implementations/BountyV1.sol';
import '../Library/Errors.sol';

/**
 * @title ClaimManagerStorageV1
 * @dev Backwards compatible, append-only chain of storage contracts inherited by ClaimManager implementations
 */
abstract contract ClaimManagerStorageV1 is
    IOpenQ,
    Oraclize,
    OwnableUpgradeable,
    UUPSUpgradeable
{
    uint256 public constant VERSION_1 = 1;
}
