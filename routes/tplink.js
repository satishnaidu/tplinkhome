const { Client } = require('tplink-smarthome-api');
var exports = module.exports = {};
const client = new Client();

exports.setDeviceOn = function(){
  const plug = client.getDevice({host: '10.0.0.12'}).then((device)=>{
    device.setPowerState(true);
  });
};

exports.setDeviceOff = function(){
  const plug = client.getDevice({host: '10.0.0.12'}).then((device)=>{
    //device.getSysInfo().then(console.log);
    device.setPowerState(false);
  });
};

exports.getDeviceStatus = async function(){
  const plug = client.getDevice({host: '10.0.0.12'}).then((device)=>{
    console.log("getting device state");
    console.log(device.getPowerState());
    var promise = device.getPowerState();
    promise.then(function(result) {
      		return result;
        }, function(err) {
            console.log(err);
        });
    });
};

