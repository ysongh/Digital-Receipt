// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract DigitalReceipt {
    mapping(address => string[]) public receipts;

    event ReceiptCreated(address to, string cid, uint date);

    constructor() {}

    function sendReceipt(string calldata cid, address to) external {
        receipts[to].push(cid);
        emit ReceiptCreated(to, cid, block.timestamp);
    }

    function getUserReceipts(address to) external view returns (string[] memory) {
        return receipts[to];
    }
}