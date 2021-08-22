// const baseURL = 'http://42ml122265.wicp.vip'
let baseURL
let env = process.env.NODE_ENV
if (env == 'development') {
    baseURL = 'http://localhost:3000'
} else {
    baseURL = 'http://data.lzhs.top'
}

console.log('----baseURL---',baseURL);


export {
    baseURL
}