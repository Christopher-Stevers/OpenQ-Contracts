// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.16;

/**
 * @dev Third party imports inherited by OpenQV1
 */
import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol';

/**
 * @dev Custom imports inherited by OpenQV1
 */
import '../BountyFactory/BountyFactory.sol';
import '../Bounty/Implementations/BountyV1.sol';
import '../Library/OpenQDefinitions.sol';
import '../Library/Errors.sol';
import '../OpenQ/IOpenQ.sol';

/**
 * @title OpenQStorageV1
 * @dev Backwards compatible, append-only chain of storage contracts inherited by OpenQ implementations
 */
abstract contract OpenQStorageV1 is
    IOpenQ,
    OwnableUpgradeable,
    UUPSUpgradeable,
    ReentrancyGuardUpgradeable
{
    uint256 public constant VERSION_1 = 1;
    BountyFactory public bountyFactory;
    address public claimManager;
    address public depositManager;
    mapping(string => address) public bountyIdToAddress;
}
