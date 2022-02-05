// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import '../Bounty/Bounty.sol';
import '../Bounty/Bountyable.sol';

interface IOpenQ {
    // Events
    event BountyCreated(
        string bountyId,
        string organization,
        address issuerAddress,
        address indexed bountyAddress,
        uint256 bountyMintTime
    );

    event BountyClosed(
        string bountyId,
        string organization,
        address indexed bountyAddress,
        address payoutAddress,
        uint256 bountyClosedTime
    );

    event DepositReceived(
        string bountyId,
        string organization,
        address indexed bountyAddress,
        address tokenAddress,
        address sender,
        uint256 volume,
        uint256 receiveTime,
        bytes32 depositId
    );

    event DepositRefunded(
        string bountyId,
        string organization,
        address indexed bountyAddress,
        address tokenAddress,
        address sender,
        uint256 volume,
        uint256 refundTime,
        bytes32 depositId
    );

    event BountyPaidout(
        string bountyId,
        string organization,
        address indexed bountyAddress,
        address tokenAddress,
        address payoutAddress,
        uint256 volume,
        uint256 payoutTime
    );

    function mintBounty(string calldata, string calldata)
        external
        returns (address);

    function fundBounty(
        address,
        address,
        uint256
    ) external returns (bool);

    function claimBounty(string calldata, address) external;

    function refundBountyDeposit(address, bytes32) external returns (bool);

    function bountyIsOpen(string memory) external view returns (bool);
}
