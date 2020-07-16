const axios = require("axios")
const redis = require("../config/conn").clinet

class Example {
    
    getFromApi(req, res) {
        const { username } = req.params
        axios({
            method: "get",
            url: `https://api.github.com/users/${username}`,
        })
            .then((respone) => {
                console.log("Get from Api")
                const data = JSON.stringify(respone.data)
                redis.setex(username, 60, data)
                return res.status(200).json(respone.data)
            })
            .catch((err) => {
                console.log(err)
                return res.send(err)
            })
    }
}

module.exports = new Example()
