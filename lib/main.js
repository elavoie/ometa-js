var options = {
    help: false,
    inputFile: null,
    outputTo: "stdout",
    outputFile: null
};

function help() {
    console.log("Usage:");
    console.log("    ometac FILE [OPTIONS]");
    console.log("Options:");
    console.log("    -h (show help)");
    console.log("    -o FILE (output file path)");
}

if (process.argv.length < 3) {
    help();
} else {
    for (var i = 2; i < process.argv.length; ++i) {
        var option = process.argv[i]; 
        
        if (option === "-h") {
            options.help = true;
        } else if (option === "-o") {
            options.outputTo = "file";
            options.outputFile = process.argv[++i]; 
        } else if (i == 2) {
            options.inputFile = process.argv[i];
        }
    }

    if (options.help) {
        help();
        process.exit();
    }

    fs = require("fs");
    var code = translateCode(fs.readFileSync(process.argv[2]).toString());

    if (options.outputTo === "file") {
        fs.writeFileSync(options.outputFile, code)
    } else if (options.outputTo === "stdout") {
        console.log(code);
    }
}
