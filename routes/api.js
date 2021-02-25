const qaz = require("../controllers/plan")
const newApi = require('express').Router();
newApi.post('/',qaz);
module.exports = newApi;