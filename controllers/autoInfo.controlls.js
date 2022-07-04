const fetch = require('node-fetch')
const parseString = require('xml2js').parseString
const getYears = (req, res) => {
    let years = []
    fetch('https://www.fueleconomy.gov/ws/rest/vehicle/menu/year').then((res) => {
        return res.text()
    }).then((yearsXml) => {
        // for (let i = 0; i < yearsXml.getElementsByTagName('menuItem').length; i++) {
        //     years.appendChild(yearsXml.getElementsByTagName('menuItem')[i].firstChild.innerHTML)
        // }
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
    })
}

module.exports = {
    getYears
}