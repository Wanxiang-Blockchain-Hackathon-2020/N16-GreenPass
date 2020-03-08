pragma solidity ^0.4.0;
contract QtumTest {
   uint gpsx;
   uint gpsy;
   uint illeage;
   uint mile;
  uint256 balance;
   bool sos;
   bool congestion;
   function QtumTest() {
        gpsx = 0;
       gpsy = 0;
       illeage = 0;
       mile = 0;
    //   balance = 0;
    //   sos = false;
    //   congestion = false；
       balance = 0;
   }
   

   function deposit() public payable{
   }
   function withdraw() public{
       if(!msg.sender.send(this.balance)){
           throw;
       }
   }
   
   function setGpsy(uint number) public{
       gpsy = number;
   }
   
   function getGpsy() constant public returns (uint) {
       return gpsy;
   }
  
    function setGpsx(uint number) public{
       gpsx = number;
    }
     
   function getGpsx() constant public returns (uint) {
       return gpsx;
   }
    function setIlleage(uint number) public{
      illeage = number;
    }
     
  function getIlleage() constant public returns (uint) {
      return illeage;
  }
  
  function setMile(uint number) public{
      mile = number;
    }
     
  function getMile() constant public returns (uint) {
      return mile;
  }
   
    function setSos(bool issos) public{
      sos = issos;
    }
     
  function getSos() constant public returns (bool) {
      return sos;
  }
   function setCongest(bool iscongest) public{
      congestion = iscongest;
    }
     
  function getCongest() constant public returns (bool) {
      return congestion;
  }

   //utility function
   function uintToBytes(uint v) constant returns (bytes32 ret) {
       if (v == 0) {
           ret = '0';
       }
       else {
           while (v > 0) {
               ret = bytes32(uint(ret) / (2 ** 8));
               ret |= bytes32(((v % 10) + 48) * 2 ** (8 * 31));
               v /= 10;
           }
       }
       return ret;
   }
}