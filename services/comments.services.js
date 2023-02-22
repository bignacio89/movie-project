const axios = require('axios')

class DataBaseMongo {

    constructor() {
        this.api = axios.create({
            baseURL: 'mongodb+srv://alvmorsie:1234567890@cluster0.y79xtzv.mongodb.net/usuarios-cine'
        })
    }

    getComment = (id) => {

    }


}

module.exports = DataBaseMongo
