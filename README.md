## 说明


    作者不定期网上收集各种脚本进行优化对接xxoo助力池

    


# 特性
- 对接xxoo类助力池
- 优化部分原脚本写死了只能自助和随机助力的逻辑,可自己完全控制助力
- 需要自助和定向助力的，请参考xxoo助力池说明进行配置,否则只会进行随机助力
- xxoo助力池支持自建服务，所以，本仓库当然也支持切换助力池地址


# 环境变量说明


|  变量   |  必填  |  值 | 说明 | 
|  ----  | ----  | ----| ----  |
| POOL_URL|是| - | 从支持得池列表任选一个url地址(只要是xxoo类助力池都可以) |


# 支持的池列表

- https://sharec.siber.cn:889

# 使用说明
    仅支持青龙面板

    ql repo https://ghproxy.com/https://github.com/xqtdzclmm/Zelda.git "jd_|jx_|getJDCookie|Pool" "backUp|icon" "^jd[^_]|USER|sendNotify|sign_graphics_validate|JDJR|JDSign" "main"


# 贡献说明

- 脚本第一行增加 const pool = require('./Pool') 