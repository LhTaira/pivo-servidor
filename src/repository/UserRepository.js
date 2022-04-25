fs = require('fs');

function saveUserPreferences(lamina, control) {
    let preferences = {
        lamina: lamina,
        control: control
    }
    let data = JSON.stringify(preferences,null,2);
    return new Promise((resolve, reject) => {
        fs.writeFile('preferences.json', data, function (err) {
            if (err)  reject({erro: err});
            resolve(data);
          });
    });
}

function getUserPreferences() {
    return new Promise((resolve, reject) => {
        fs.readFile('preferences.json', function (err, data) {
            if (err) reject({erro: err});
            resolve(JSON.parse(data))
          });
    });
}


module.exports = { saveUserPreferences, getUserPreferences };