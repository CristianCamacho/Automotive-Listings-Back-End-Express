const fetch = require('node-fetch')
const parseString = require('xml2js').parseString

const getYears = (req, res) => {
    urlQuery('https://www.fueleconomy.gov/ws/rest/vehicle/menu/year', function (data) {
        res.status(200).json({
            makes: data.menuItems.menuItem.map((element) => {
                return element.value[0]
            })
        })
    })
}

const getMakes = (req, res) => {
    urlQuery(`https://www.fueleconomy.gov/ws/rest/vehicle/menu/make?year=${req.query.year}`, function (data) {
        res.status(200).json({
            makes: data.menuItems.menuItem.map((element) => {
                return element.value[0]
            })
        })
    })
}

const getModels = (req, res) => {
    urlQuery(`https://www.fueleconomy.gov/ws/rest/vehicle/menu/model?year=${req.query.year}&make=${req.query.make}`, function (data) {
        res.status(200).json({
            makes: data.menuItems.menuItem.map((element) => {
                return element.value[0]
            })
        })
    })
}

const getOptions = (req, res) => {
    urlQuery(`https://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year=${req.query.year}&make=${req.query.make}&model=${req.query.model}`, function(data) {
        res.status(200).json({
            options: data.menuItems.menuItem.map((element) => {
                return {
                    id: element.value[0],
                    option: element.text[0]
                }
            })
        })
    })
}

const getInfoById = (req, res) => {
    urlQuery(`https://www.fueleconomy.gov/ws/rest/vehicle/${req.query.id}`, function(data) {
        res.status(200).json({
            info: data
        })
    })
}

function urlQuery(url, callback) {
    fetch(url).then((res) => {
        return res.text()
    }).then((infoXml) => {
        parseString(infoXml, function (error, result) {
            if (error) {
                res.status(500).json({
                    error: error
                })
            } else {
                callback(result)
            }
        })
    }).catch((error) => {
        res.status(500).json({
            error: error
        })
    })
}

module.exports = {
    getYears,
    getMakes,
    getModels,
    getOptions,
    getInfoById
}