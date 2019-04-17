var fs = require('fs');

var casper = require('casper').create({
    verbose: true
});

casper.start().then(function() {
    this.echo("Starting");
});

const link = "https://builtwith.com/robots.txt";

// casper.run(writeRobotsToFile(link));
casper.run(writeRobotsToString(link));

function writeRobotsToFile(link){ //, index
    casper.start(link, function() {
        // this.echo("Page title: " + this.getTitle());
        fs.write("./scrape.html", this.getHTML(), 'w');
        casper.exit();
    })
}

function writeRobotsToString(link){
    var string = "";
    casper.start(link, function() {
        // this.echo("Page title: " + this.getTitle());
        string = this.getHTML();
        casper.exit();
    })
    return string;
}




// console.log("Finished?");