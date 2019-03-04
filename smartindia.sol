pragma solidity >=0.4.22 <0.6.0;
contract Ration {
    
    string public item;
    
    struct user{
        string name;
        address adds;
        uint stock;
    }
    
    
    address public fic;
    constructor()public payable{
        users[msg.sender].name="fic";
        users[msg.sender].adds=msg.sender;
        users[msg.sender].stock=999999;
        fic=msg.sender;
    }
    mapping (address=>user) users;
    struct transaction{
        string _id;
        address sender;
        address receiver;
        bool received;
        uint amount;
    }
    
    mapping(string=>transaction)transactions;
    function sendItem(string memory _id,address receiver,uint amount) public payable{
            transactions[_id].receiver=receiver;
            transactions[_id].sender=msg.sender;
            transactions[_id]._id=_id;
            transactions[_id].amount=amount;
            transactions[_id].received=false;
            users[msg.sender].stock=users[msg.sender].stock-amount;
            users[receiver].stock=users[receiver].stock+amount;
       
    }
    
    function getStock(address _id) public view returns(uint){
        return (users[_id].stock);
    }
    

    
   
    function setUser(string memory n,address  ad,uint stock)payable public{
        users[msg.sender].name=n;
        users[msg.sender].adds=ad;
        users[msg.sender].stock=stock;
    }
    
}

