const https = require('https')


function OpenShareCodePool() {
    pullCodes = async function (env, randomNum = 20) {
        if (process.env.POOL_URL) {
            return new Promise(resolve => {
                const prefix = `${this.hostname}/${this.env}`
                const url = this.restful ? `${prefix}/${this.randomNum}` : `${prefix}?num=${this.randomNum}`
                console.log(`请求地址:${url}`)
                let localCodes = eval(`process.env.${this.env}`)
                localCodes = localCodes && localCodes.indexOf('@') > -1 ? codes.split('@') : []
                const req = https.get(url, res => {
                    res.on('data', r => {
                        let shareCodesRes = JSON.parse(r);
                        shareCodesRes.data = [...new Set(shareCodesRes.data), ...localCodes]
                        resolve(shareCodesRes)
                    })
                })
                req.end()
            })
        }

    },
        log = function (ptPin) {

        }

}

