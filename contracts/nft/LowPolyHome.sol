// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract LowPolyHome is ERC721, Ownable {
    using SafeMath for uint256;

    uint256 LIMIT = 5;
    uint256 private currentTokenId = 0;

    string private baseURI = "https://gateway.pinata.cloud/ipfs/";

    // IPFS: You can use ICD to verify image
    string[] private urls = [
        "QmeP6GRdWYi59NxMrFFgktt7N7p4ibYYpRFsytVQWB7REo",
        "QmUW2Dvg2UUJ81xiQBNuD2kNaUJQ8JX3bLDHmPrpgaHvmZ",
        "QmcMVE3QjNVQPGBzLk42BafK8mQsVMZDEKKDunovKn21tu"
        "Qmcg5hCqMEi1Me7sibbBZabJ2P99XtK8X3RqxiWWzWgzrc"
        "QmbpUrHM6tDXusovAYJ4t2AAjykLh8awc3L85ik8a7wdfR"
    ];

    constructor() ERC721("LowPolyHome", "LPH") {}

    /**
     * Override isApprovedForAll to auto-approve OS's proxy contract
     */
    function isApprovedForAll(address _owner, address _operator) public view override returns (bool isOperator) {
        // if OpenSea's ERC721 Proxy Address is detected, auto-return true
        if (_operator == address(0x58807baD0B376efc12F5AD86aAc70E78ed67deaE)) {
            return true;
        }

        // otherwise, use the default ERC721.isApprovedForAll()
        return ERC721.isApprovedForAll(_owner, _operator);
    }

    function mintTo(address _to) public onlyOwner {
        require(currentTokenId < LIMIT, "Token id exceed limit");
        _mint(_to, currentTokenId);
        _incrementTokenId();
    }

    function _incrementTokenId() private {
        currentTokenId++;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        return string(abi.encodePacked(baseURI, urls[tokenId]));
    }
}
