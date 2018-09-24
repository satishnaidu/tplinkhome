var express = require('express');
var router = express.Router();
var tplinkService = require('./tplink');
var statusIf = require('./statusIf');

router.post('/device/status', function(req, res, next) {

	var reqbody = req.body;
	var status = reqbody.status;
	var device = reqbody.device;

    console.log(reqbody);
    var resStatus = 200;
    var resMsg = 'Status of device '+device + ' is changed to '+status;
    if(!status && !device){
        return res.send({'status':404,'message':'Invalid status or device'})
    }

    if(statusIf.onStatus[status.toUpperCase()] == 1){
    	tplinkService.setDeviceOn();
    }else if(statusIf.offStatus[status.toUpperCase()]==1){
    	tplinkService.setDeviceOff();
    }else{
    	resStatus = '500';
    	resMsg = 'Invalid input for device '+status;
    }
	
	var response = {'status':resStatus,'message': resMsg};
    res.send(response);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({'status':'200','message':'Welcome to Tplink home router'});
});


router.get('/device/state', function(req,res,next){
    console.log('device state in');
    var deviceStatePromise = tplinkService.getDeviceStatus();
    console.log('device state next');
    console.log(deviceStatePromise);
    deviceStatePromise.then(function(deviceState){
        var response = {'status':'200','message': 'Device status is '+deviceState};
        return res.send(response);
    });
     
});


module.exports = router;
