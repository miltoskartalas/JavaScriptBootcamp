const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === "number" ? resolve(num * 2) : reject("number must be provided")
    }, 200)
})
const processData = async() => {
    let data = await getDataPromise(2)
    data = await getDataPromise(data)
    return data
        // getDataPromis(2).then((data) => {
        //     console.log(data)
        // })

}

processData().then((data) => {
    console.log("data", data)
}).catch((error) => {
    console.log("error", error)
})