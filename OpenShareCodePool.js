const https = require('https')


function OpenShareCodePool() {
    this.pullCodes = async function (env, restful, randomNum = 20) {
        return new Promise(resolve => {
            let mergeCodes = [];
            if (env) {
                let localCodes = eval(`process.env.${env}`)
                mergeCodes = localCodes && localCodes.indexOf('@') > -1 ? codes.split('@') : []
            }

            const poolUrl = process.env.POOL_URL
            if (poolUrl) {
                const prefix = `${poolUrl}/${env}`
                const url = restful ? `${prefix}/${randomNum}` : `${prefix}?num=${randomNum}`
                const req = https.get(url, res => {
                    res.on('data', r => {
                        let shareCodesRes = JSON.parse(r);
                        console.log(`从池子中下发助力码:${url}\n =========================>${r}\n <=========================`)
                        shareCodesRes.data = [...new Set(shareCodesRes.data), ...mergeCodes]
                        resolve(shareCodesRes)
                    })
                })
                req.end()
            }
            resolve({code: 200, data: mergeCodes})
        })

    },
        this.log = function (ptPin, env, code) {
            console.log('====================================')
            console.log(`用户:${ptPin},${env}当前助力码:${code}`)
            info = {
                ptPin: ptPin,
                env: env,
                code: code
            }
            console.log(`${JSON.stringify(info)}`)
            console.log('====================================')

        }

}

