var qtum = require("qtumjs")

const rpc = new qtum.QtumRPC('http://qtum:test@localhost:3889');
// const info = await rpc.rawCall("getinfo")
// console.log(info)

main()

async function main() {
    try {
    //   const result = await rpc.rawCall("getblockheader",["0adb15801bf329b9770a14331247cd11a90c959264e546013b16dd6c0e20ae5d"])
      const result = await rpc.rawCall("callcontract",["eb87afcfeae7cec06dbf0db5a919098c290a73b1","878acceef5c2778a51ac727d5fd9f348672eaad2"])
      console.log(result)
    } catch (err) {
      console.log("err", err)
    }
  }
//   const repoData = require("./solar.json")
//   const qtum = new Qtum("http://qtum:test@localhost:3889", repoData)
  
//   const myToken = qtum.contract("test.sol")
  
//   async function transfer(fromAddr, toAddr, amount) {
//     const tx = await myToken.send("transfer", [toAddr, amount], {
//       senderAddress: fromAddr,
//     })
  
//     console.log("transfer tx:", tx.txid)
//     console.log(tx)
  
//     await tx.confirm(3)
//     console.log("transfer confirmed")
//   }