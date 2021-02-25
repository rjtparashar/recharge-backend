const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const activity = new Schema({
    pack: {
        type: Number,
        default: null
    },
    expires_at: {
        type: Number,
        default: null
    },
    data_left: {
        type: Number,
        default: null
    },
    per_day:{
        type:Number,
        default:null
    },
    credit_at: {
        type:Date,
        default:Date.now()
    }


})
module.exports = mongoose.model('recharge', activity);
