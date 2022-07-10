const fetch = require('node-fetch')
const parseString = require('xml2js').parseString

const getYears = (req, res) => {
    fetch('https://www.fueleconomy.gov/ws/rest/vehicle/menu/year').then((res) => {
        return res.text()
    }).then((yearsXml) => {
        parseString(yearsXml, function (error, result) {
            if (error) {
                console.log(error)
                res.sendStatus(500)
            } else {
                res.json({
                    years: result.menuItems.menuItem.map((element) => {
                        return element.value[0]
                    })
                })
            }
        })
    }).catch((error) => {
        console.log(error)
        res.sendStatus(500)
    })
}

const getMakes = (req, res) => {
    fetch(`https://www.fueleconomy.gov/ws/rest/vehicle/menu/make?year=${req.query.year}`).then((res) => {
        return res.text()
    }).then((makesXml) => {
        parseString(makesXml, function (error, result) {
            if (error) {
                console.log(error)
                res.sendStatus(500)
            } else {
                res.json({
                    makes: result.menuItems.menuItem.map((element) => {
                        return element.value[0]
                    })
                })
            }
        })
    }).catch((error) => {
        console.log(error)
        res.sendStatus(500)
    })
}

const getModels = (req, res) => {
    fetch(`https://www.fueleconomy.gov/ws/rest/vehicle/menu/model?year=2012&make=Honda`).then((res) => {
        console.log(res)
        return res.text()
    }).then((modelsXml) => {
        console.log(modelsXml)
        parseString(modelsXml, function (error, result) {
            if (error) {
                console.log(error)
                res.sendStatus(500)
            } else {
                res.status(200).json({
                    makes: result.menuItems.menuItem.map((element) => {
                        return element.value[0]
                    })
                })
            }
        })
    }).catch((error) => {
        console.log(error)
        res.sendStatus(500)
    })
}

module.exports = {
    getYears,
    getMakes,
    getModels
}