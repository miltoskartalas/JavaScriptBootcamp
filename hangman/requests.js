const getPuzzle = (callback) => {


    const request = new XMLHttpRequest()

    request.addEventListener("readystagechange", (e) => {
        // we have the final response
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback("An error has taken place", undefined)

        }
    })
    request.open("GET", "https://puzzle.mead.io/puzzle")
    request.send()
}

const getCountrDetails = (countryCode, callback) => {
    const CountryRequest = new XMLHttpRequest()

    CountryRequest.addEventListener("readystatechange", (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const coutry = data.find((country) => country.alpha2Code === countryCode)
            callback(undefined, country)
        } else if (e.target.readyState === 4) {
            callback("unable to fetch data", undefined)
        }
    })

    CountryRequest.open("GET", "http://restcountries.eu/rest/v2/all")
}