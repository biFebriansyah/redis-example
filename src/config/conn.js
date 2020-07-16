const redis = require("redis")

class dbConnect {
    
    constructor() {
        this.clinet = redis.createClient({
            host: process.env.REDISHOST,
            port: process.env.REDISPORT,
            password: process.env.REDISTPASS
        })
    }

    redisCheck() {
        return new Promise((reslove, reject) => {
            this.clinet.get("testkey", (err, res) => {
                if (err) {
                    reject(err)
                }
                if (res === "OK" || res === null) {
                    reslove("Connection to Redis successfully.")
                }
            })
        })
    }
}

module.exports = new dbConnect()
