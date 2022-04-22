fs = require('fs');

function saveUserPreferences(lamina, irrigation, control) {
    let preferences = {
        lamina: lamina,
        irrigation: irrigation,
        control: control
    }
    let data = JSON.stringify(preferences);
    return new Promise((resolve, reject) => {
        fs.writeFile('preferences.json', data, function (err) {
            if (err)  resolve({erro: err});
            resolve();
          });
    });
}

function getUserPreferences() {
    return new Promise((resolve, reject) => {
        fs.readFile('preferences.json', function (err, data) {
            if (err) resolve({erro: err});
            resolve(JSON.parse(data))
          });
    });
}


module.exports = { saveUserPreferences, getUserPreferences };