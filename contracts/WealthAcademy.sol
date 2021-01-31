// SPDX-License-Identifier: MIT

pragma solidity ^0.7.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

contract WealthAcademy is ERC721 {

    using Counters for Counters.Counter;
    
    Counters.Counter private _traineeTokenIds;

    constructor() ERC721("Wealth Academy Token", "WAT") {}

    function awardTraineeToken(address trainee, string memory tokenURI)
        public
        returns (uint256)
    {
        _traineeTokenIds.increment();

        uint256 newTraineeTokenId = _traineeTokenIds.current();
        _mint(trainee, newTraineeTokenId);
        _setTokenURI(newTraineeTokenId, tokenURI);

        return newTraineeTokenId;
    }

}