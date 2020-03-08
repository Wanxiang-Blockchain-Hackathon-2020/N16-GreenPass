var express = require('express')
var app = express()
var qtum = require("qtumjs")

var x = 121.492889;
var y = 31.253586;

const rpc = new qtum.QtumRPC('http://qtum:test@localhost:3889');
// const info = await rpc.rawCall("getinfo")

async function getCarData() {
    try {
    //   const result = await rpc.rawCall("getblockheader",["0adb15801bf329b9770a14331247cd11a90c959264e546013b16dd6c0e20ae5d"])
      const result = await rpc.rawCall("callcontract",["eb87afcfeae7cec06dbf0db5a919098c290a73b1","878acceef5c2778a51ac727d5fd9f348672eaad2"])
      console.log(result)
      return result
    } catch (err) {
      console.log("err", err)
    }
  }
  async function getGps() {
    try {
    //   const result = await rpc.rawCall("getblockheader",["0adb15801bf329b9770a14331247cd11a90c959264e546013b16dd6c0e20ae5d"])
      const result = await rpc.rawCall("callcontract",["eb87afcfeae7cec06dbf0db5a919098c290a73b1","878acceef5c2778a51ac727d5fd9f348672eaad2"])
      console.log(result)
      return result
    } catch (err) {
      console.log("err", err)
    }
  }
app.get('/', function (req, res) {
  var a = Math.round(Math.random())/10;     
  var b = Math.round(Math.random())/10;
  x = x + a;
  y = y + b;
  res.send({
    "x":x,
    "y":y  })
})

app.get("/get_data", function(req, res){
  res.send( getCarData() );
})

app.getGps("/getGps",function(req, res){
  res.send( getGps() );
})
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
})


