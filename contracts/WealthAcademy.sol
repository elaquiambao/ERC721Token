// SPDX-License-Identifier: MIT

pragma solidity ^0.7.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";


contract WealthAcademy is ERC721 {

    using Counters for Counters.Counter1;
    // using Counters for Counters.Counter2;

    
    Counters.Counter1 private _traineeTokenIds;
    // Counters.Counter2 private _traineeTokenIds;

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

    // function awardTrainerToken(address trainer, string memory tokenURI)
    //     public
    //     onlyOwner
    //     returns (uint256)
    // {
    //     _trainerTokenIds.increment();

    //     uint256 newTrainerTokenId = _trainerTokenIds.current();
    //     _mint(trainer, newTrainerTokenId);
    //     _setTokenURI(newTrainerTokenId, tokenURI);

    //     return newTokenId;
    // }
}