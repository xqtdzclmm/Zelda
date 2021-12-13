const https = require('https')


function OpenShareCodePool(hostname, env, restful, randomNum = 20) {
    this.restful = restful
    this.hostname = hostname
    this.env = env
    this.randomNum = randomNum
}

OpenShareCodePool.prototype.pullCodes = async function (code, ptPin) {
    return new Promise(resolve => {
        const prefix = `${this.hostname}/${this.env}`
        const url = this.restful ? `${prefix}/${this.randomNum}` : `${prefix}?num=${this.randomNum}`
        console.log(`请求地址:${url}`)
        const req = https.get(url, res => {
            res.on('data', r => {
                let shareCodesRes = JSON.parse(r);
                shareCodesRes.data = [...new Set(shareCodesRes.data), ...this.codeByEnv()]
                resolve(shareCodesRes)
            })
        })
        req.end()
    })
}

OpenShareCodePool.prototype.codeByEnv = function () {
    let codes = eval(`process.env.${this.env}`)
    return codes && codes.indexOf('@') > -1 ? codes.split('@') : []
}

let pool = new OpenShareCodePool('https://sharec.siber.cn:889', 'FRUITSHARECODES', false)

async function test2() {
    const codes = await pool.pullCodes()
    console.log(codes)
}

test2()
