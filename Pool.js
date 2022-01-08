
const req = require('sync-request');


module.exports = {
    getCodes,
    log
}


function getCodes(idx, env, randomNum = 20) {
    let res = {};
    let mergeCodes = [];
    if (env) {
        mergeCodes = getLocalCodes(idx, env)
        console.log(`\n ================= 固有助力码 ==============\n`)
        for (let i = 0; i < mergeCodes.length; i++) {
            console.log(`                ${mergeCodes[i]}\n`);
        }
    }
    let restful = process.env.POOL_RESTFUL;
    const poolUrl = process.env.POOL_URL
    if (poolUrl) {
        const prefix = `${poolUrl}/${env}`
        const url = restful ? `${prefix}/${randomNum}` : `${prefix}?num=${randomNum}`
        let shareCodesRes = req('GET', url).getBody();
        shareCodesRes = JSON.parse(shareCodesRes);
        console.log(`\n =========== 从池中随机获取得助力码 ===========\n`)

        for (let i = 0; i < shareCodesRes.data.length; i++) {
            var code = shareCodesRes.data[i]
            console.log(`   ${code}\n`);
        }
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
    codes = codes && codes.indexOf('@') > -1 ? codes.split('@') : []
    return codes;
}

function log(ptPin, activityName, env, code) {
    console.log('================ 助力码 ====================')
    console.log(`         活动名称：${activityName}\r\n`)
    console.log(`         ptPin：${ptPin}\r\n`)
    console.log(`         助力码：${code}\r\n`)
    console.log(`         环境变量：${env}\r\n`)
    console.log('==================================== \r\n')
}