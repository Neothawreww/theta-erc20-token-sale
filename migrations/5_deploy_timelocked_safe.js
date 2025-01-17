var BitToken = artifacts.require('BitToken');
var TimelockedSafe = artifacts.require('TimelockedSafe');

module.exports = function (deployer, network, accounts) {
    var adminAddress = '';
    var withdrawAddress = '';
    var lockingPeriodInMonths = 0;
    var vestingPeriodInMonths = 6;
    var monthlyWidthrawLimitInWei = new web3.BigNumber(5000000000000000000000); // 5000 Bit Tokens

    var bitToken;

    console.log('---------5----------');
    
    deployer.deploy(TimelockedSafe, adminAddress, withdrawAddress, lockingPeriodInMonths, 
                  vestingPeriodInMonths, monthlyWidthrawLimitInWei, '0x0');

    // BitToken.deployed()
    //     .then(function(token) {
    //         console.log('Deploying one TimelockedSafe instance ...');
    //         bitTokenAddress = token.address;

    //         return deployer.deploy(TimelockedSafe, adminAddress, withdrawAddress, lockingPeriodInMonths, 
    //             vestingPeriodInMonths, monthlyWidthrawLimitInWei, bitTokenAddress);
    //     })
    //     .then(function() {
    //         return TimelockedSafe.deployed();
    //     })
    //     .then(function(res) {
    //         console.log('TimelockedSafe instance address xxxxxx: ' + res.address);
    //         console.log('---DEPLOY FINISHED---');
    //     });
};

