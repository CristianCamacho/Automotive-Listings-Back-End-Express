const getYears = (req, res) => {
    // let years = []
    // fetch('https://www.fueleconomy.gov/ws/rest/vehicle/menu/year').then((res) => {
    //     return res.text()
    // }).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then((year) => {
    //     console.log(year)
    //     // for (let i = 0; i < year.getElementsByTagName('menuItem').length; i++) {
    //     //     years.appendChild(year.getElementsByTagName('menuItem')[i].firstChild.innerHTML)
    //     // }
    // })
    res.send('test')
    // res.json({
    //     years: years
    // })
}

module.exports = {
    getYears
}