const redis = require("../config/conn").clinet

class Caching {

    getFromApi (req, res, next) {
        const { username } = req.params

        redis.get(username, (err, result) => {
            if (err) {
                throw err
            }
            if (result !== null) {
                console.log("Get from Redis")
                const data = JSON.parse(result)
                return res.status(200).json(data)
            } else {
                next()
            }
        })
    }
}

module.exports = new Caching()
