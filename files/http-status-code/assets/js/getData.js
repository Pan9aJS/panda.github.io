//////////////

async function GetData() {
    let promise = fetch('https://raw.githubusercontent.com/Pan9aJS/files/master/http-status-code/json/index.json');
    return await promise.then(d => d.json());
}

module.exports = {
    'GetData': GetData
};