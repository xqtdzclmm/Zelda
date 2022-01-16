## 说明


    作者不定期网上收集各种脚本进行优化对接xxoo助力池

    


# 特性
- 对接xxoo类助力池
- 优化部分原脚本写死了只能自助和随机助力的逻辑,可自己完全控制助力
- 需要自助和定向助力的，请参考xxoo助力池说明进行配置,否则只会进行随机助力
- xxoo助力池支持自建服务，所以，本仓库当然也支持切换助力池地址


# 环境变量

说明：不同的需求，需要不同的环境变量组合



|  变量   |  必填  |  值 | 说明 | 
|  ----  | ----  | ----| ----  |
| XXOO助力池的环境变量|否| - | 本项目和xxoo助力池独立，但是要用xxoo助力池，就需要配置xxoo的参数 |
| HELP_LOCAL|否|true或者false|是否开启自助和定向助力,入要定向助力，配置方式参考xxoo说明|
| HELP_POOL|否|默认true,true或者false|是否开启给池中助力|

# 不同场景需求的环境变量配置方式

建议：当你可以完全控制你的助力的时候，建议都开启给池中助力，毕竟你留着助力也没啥用，本仓库绝不存在偷助力情况

- 不开启任何助力

    
     HELP_LOCAL = false        关闭自助和定向助力
     HELP_POOL = false         关闭给池中助力


- 只自助和定向助力


     xxoo池原本的配置，配置方式参考xxoo文档
     XXOO_RANDOM = false           关闭xxoo池的随机助力
     HELP_POOL = false             关闭本仓库的给池中助力

- 开启自助也开启给池中助力
  

     xxoo池原本的配置，配置方式参考xxoo文档


# 支持的池列表

- https://sharec.siber.cn:889

# 使用说明
    仅支持青龙面板

    ql repo https://ghproxy.com/https://github.com/xqtdzclmm/Zelda.git "jd_|jx_|getJDCookie|Pool" "backUp|icon" "^jd[^_]|USER|sendNotify|sign_graphics_validate|JDJR|JDSign" "main"


# 贡献说明

- 脚本第一行增加 const pool = require('./Pool') 