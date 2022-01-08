const req = require('sync-request');


module.exports = {
    getCodes,
    log,
    getCodeArr
}

function getCodeArr(idx, env, randomNum = 20) {
    return getCodes(idx, env, randomNum).data;
}

function getCodes(idx, env, randomNum = 20) {
    let res = {};
    let mergeCodes = [];
    if (env) {
        mergeCodes = getLocalCodes(idx, env)
        console.log(`\n ================= 固有助力 ==============\n`)
        console.log(JSON.stringify(mergeCodes))
    }
    let restful = process.env.POOL_RESTFUL;
    const poolUrl = process.env.POOL_URL
    if (poolUrl) {
        const prefix = `${poolUrl}/${env}`
        const url = restful ? `${prefix}/${randomNum}` : `${prefix}?num=${randomNum}`
        let shareCodesRes = req('GET', url).getBody();
        shareCodesRes = JSON.parse(shareCodesRes);
        console.log(`\n ================= 随机助力 ==============\n`)
        console.log(JSON.stringify(shareCodesRes.data))
        console.log(`\n \n`)
        shareCodesRes.data = [...mergeCodes, ...new Set(shareCodesRes.data)]
        res = shareCodesRes;
    } else {
        res = {code: 200, data: mergeCodes}
    }
    return res;
}


function getLocalCodes(i, env) {
    let localCodes = eval(`process.env.${env}`)
    var codes = localCodes.split('&')
    if (codes.length > 0) {
        codes = codes[i - 1];
    }
    if (codes) {
        codes = codes.replace("\r", "");
        codes = codes.indexOf('@') > -1 ? codes.split('@') : []
    } else {
        codes = [];
    }
    return codes;
}

function log(ptPin, activityName, env, code) {
    console.log('================ 助力码 ====================')
    console.log(`         活动名称：${activityName}\r\n`)
    console.log(`         用户：${ptPin}\r\n`)
    console.log(`         助力码：${code}\r\n`)
    console.log(`         环境变量：${env}\r\n`)
    console.log('==================================== \r\n')
}