const getPuzzle = async(wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error("Unable to get puzzle")
    }
}

const getPuzzleOld = async(wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}
const getCountry = async(countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')
    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error("unable to fetch the country")
    }
}

const getCountryOld = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => {
        return data.find((country) => country.alpha2Code === countryCode)
    })
}
const getLocation = async() => {
    const response = await fetch('http://ipinfo.io/json?token=1a11bd55cc8f9c')
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch location')
    }

}

const getCurrenCoutry = async() => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}