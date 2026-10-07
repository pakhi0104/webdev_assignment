const fs = require("fs");

function readThreeFiles(file1, file2, file3) {
    fs.readFile(file1, "utf8", (err, data1) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(data1);

        fs.readFile(file2, "utf8", (err, data2) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log(data2);

            fs.readFile(file3, "utf8", (err, data3) => {
                if (err) {
                    console.log(err);
                    return;
                }

                console.log(data3);
            });
        });
    });
}

readThreeFiles("file1.txt", "file2.txt", "file3.txt");