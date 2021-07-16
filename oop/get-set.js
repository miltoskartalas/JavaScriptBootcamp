const data = {
    locations: [],
    get location() {
        return this._location
    },

    set location(value) {
        value = value.trim()
        this._location = value.trim()
    }
}

// code that uses the data object

data.location = "Philadephia"