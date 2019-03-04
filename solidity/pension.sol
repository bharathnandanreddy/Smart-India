pragma solidity >=0.4.22 <0.6.0;
contract pension {
   struct beneficiary{
            string name;
            uint age;
            string department;
            string position;
            uint salary;
            string bank;
            bool approved_hod;
            bool approved_pao;
            
        }  
        
        
        uint budget;
          struct transaction{
        string _id;
        address receiver;
        address sender;
        uint amount;
      }
    
    
    
        
        
        mapping(string=> transaction)transactions;

        
        
    mapping(address=>beneficiary) beneficiaries;
    
    function hod(address ad) public payable{
        beneficiaries[ad].approved_hod=true;
        
    }
     function pao(address ad) public payable{
        
        budget=budget-((beneficiaries[ad].salary/100)*14);
        
        beneficiaries[ad].approved_pao=true;
        
    }
    
      function sendPension(string memory i,address ad) public payable{
        transactions[i]._id=i;
        transactions[i].receiver=ad;
        transactions[i].sender=msg.sender;
        transactions[i].amount=(beneficiaries[ad].salary/100)*14;
    }
    
        
    function getApproval(address ad) public view returns(int){
        if( beneficiaries[ad].approved_pao)
        return 3;
         else if(beneficiaries[ad].approved_hod)
        return 2;
        else
        return 1;
        
    }
    
    function setBeneficiary(string memory n,uint a,string memory dept,string memory pos,uint sal,string memory b,address  ad)payable public{
        beneficiaries[ad].name=n;
        beneficiaries[ad].age=a;
        beneficiaries[ad].department=dept;
        beneficiaries[ad].position=pos;
        beneficiaries[ad].salary=sal;
        beneficiaries[ad].bank=b;
        beneficiaries[ad].approved_hod=false;
        beneficiaries[ad].approved_pao=false;
    }
    
}

