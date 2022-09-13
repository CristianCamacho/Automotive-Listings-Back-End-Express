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
    fetch(`https://www.fueleconomy.gov/ws/rest/vehicle/menu/model?year=${req.query.year}&make=${req.query.make}`).then((res) => {
        return res.text()
    }).then((modelsXml) => {
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

const getOptions = (req, res) => {
    fetch(`https://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year=${req.query.year}&make=${req.query.make}&model=${req.query.model}`).then((res) => {
        return res.text()
    }).then((optionsXml) => {
        parseString(optionsXml, function (error, result) {
            if (error) {
                console.log(error)
                res.sendStatus(500)
            } else {
                res.status(200).json({
                    options: result.menuItems.menuItem.map((element) => {
                        return {
                            id: element.value[0],
                            option: element.text[0]
                        }
                    })
                })
            }
        })
    }).catch((error) => {
        console.log(error)
        res.sendStatus(500)
    })
}

const getInfoById = (req, res) => {
    // fetch(`https://www.fueleconomy.gov/ws/rest/vehicle/${req.query.id}`).then((res) => {
    //     return res.text()
    // }).then((autoInfoXml) => {
    //     parseString(autoInfoXml, function ( error, result) {
    //         if(error) {
    //             console.log(error)
    //             res.sendStatus(500)
    //         } else {
    //             res.status(200).json({
    //                 info: result.vehicle
    //             })
    //         }
    //     })
    // }).catch((error) => {
    //     console.log(error)
    //     res.sendStatus(500)
    // })
    let queryData = urlQuery(`https://www.fueleconomy.gov/ws/rest/vehicle/${req.query.id}`) 

    res.status(200).json({
        info: 'test'
    })

}

const urlQuery = (url) => {
    fetch(url).then((res) => {
        return res.text()
    }).then((infoXml) => {
        parseString(infoXml, function ( error, result) {
            if(error) {
                console.log(error)
                res.sendStatus(500)
            } else {
                return result;
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
    getModels,
    getOptions,
    getInfoById
}