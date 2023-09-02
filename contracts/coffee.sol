// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0;

contract CoffeePurchase {
    address public owner;
    mapping(address => string) private messages;
    struct purchase {
        string from;
        string to;
        address addFrom;
        address addTo;
    }
    purchase[] public purchases;
    event PurchaseMade(address indexed buyer, uint256 amount, string message);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can access this function");
        _;
    }

    function purchaseCoffee(string calldata _from,string calldata _to,address _addTo,string memory message) public payable {
        require(msg.value > 0, "Coffee price must be greater than 0 wei");
        messages[_addTo] = message;
        purchases.push(purchase(_from,_to,msg.sender,_addTo));
        emit PurchaseMade(msg.sender, msg.value, message);
    }
    function showDetails() external view returns(purchase[] memory){
        return purchases;
    }
    function getMessage() public view returns (string memory) {
        return messages[msg.sender];
    }

    function withdrawFunds() public onlyOwner {
        payable(owner).transfer(address(this).balance);
    }
}
