var path = require("path");
var fs = require("fs");

const getallFileNames = () => {
  var allFilePaths = [];

  fromDir("./src/components", /\.(js|scss)$/, filename => {
    allFilePaths.push(filename);
  });

  return allFilePaths;
};

function fromDir(startPath, filter, callback) {
  if (!fs.existsSync(startPath)) {
    console.log("no dir ", startPath);
    return;
  }

  var files = fs.readdirSync(startPath);
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter, callback); //recurse
    } else if (filter.test(filename)) callback(filename);
  }
}

const allFilePaths = getallFileNames();

allFilePaths.map(path => {
  const basePagePath = "./" + path.replace(/\\/g, "/");

  if (!basePagePath.includes("index.js")) {
    console.log("--adding: ", basePagePath);

    fs.readFile(basePagePath, (error, data) => {
      const pathArray = basePagePath.split("/");
      const newPath = `./public/rawCode/${pathArray[pathArray.length - 1]}.txt`;

      fs.writeFileSync(newPath, data, error => {
        if (error) throw error;
        else {
          console.log("--adding: " + newPath);
        }
      });
    });
  }
});
