const jsonfile = require("jsonfile");
const momemt = require("moment");
const simpleGit = require("simple-git");
const random = require("random");
const FILE_PATH = "./data.json"

setInterval(() => {
    const makeCommit = gay => {
        if(gay === 0 ) simpleGit().push();
        const x = random.int(0,54);
        const y = random.int(0,6)
        const DATE = momemt().subtract(1, "y").add(1, "d").add(x, "w").add(y, "d").format();
    
        const data = {
            date: DATE
        }
    
        console.log(DATE);
    
        jsonfile.writeFile(FILE_PATH, data);
    
        simpleGit().add([FILE_PATH]).commit(DATE, {"--date": DATE}).push();
    }
    
    makeCommit(100);
}, 1);
