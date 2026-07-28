const fs = require("fs");

exports.save = (file, data) => {

    fs.writeFileSync(

        file,

        JSON.stringify(data, null, 2)

    );

};
