pragma solidity >=0.4.22 <0.6.0;
contract medicines {
   struct item{
            string name;
            uint stock;
        }  
    
    struct user{
        string name;
        address adds;
        item item1;
        item item2;
        item item3;
        
    }
    
    
    constructor()public payable{
        users[msg.sender].name="fic";
        users[msg.sender].adds=msg.sender;
        users[msg.sender].item1.name="PARACETAMOL";
        users[msg.sender].item1.stock=999999;
        users[msg.sender].item2.name="AMLODIPINE";
        users[msg.sender].item2.stock=999999;
        users[msg.sender].item3.name="ASPIRIN";
        users[msg.sender].item3.stock=999999;
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
    function sendItem(string memory _id,address receiver,address sender,uint amount,uint i) public payable{
        
            transactions[_id].receiver=receiver;
            transactions[_id].sender=msg.sender;
            transactions[_id]._id=_id;
            transactions[_id].amount=amount;
            transactions[_id].received=false;
            if(i==1)
            {
            users[sender].item1.stock=users[sender].item1.stock-amount;
            users[receiver].item1.stock=users[receiver].item1.stock+amount;
            }
            if(i==2)
            {
            users[sender].item2.stock=users[sender].item2.stock-amount;
            users[receiver].item2.stock=users[receiver].item2.stock+amount;
            }
             if(i==3)
            {
            users[sender].item3.stock=users[sender].item3.stock-amount;
            users[receiver].item3.stock=users[receiver].item3.stock+amount;
            }
       
           
       
    }
    
    function getStock(address _id) public view returns(uint,uint,uint){
        return (users[_id].item1.stock,users[_id].item2.stock,users[_id].item3.stock);
    }
    

    
   
    function setUser(string memory n,address  ad,uint stock)payable public{
        users[ad].name=n;
        users[ad].adds=ad;
        users[ad].item1.name="PARACETAMOL";
        users[ad].item1.stock=stock;
        users[ad].item2.name="AMLODIPINE";
        users[ad].item2.stock=stock;
        users[ad].item3.name="ASPIRIN";
        users[ad].item3.stock=stock;
    }
    
}

