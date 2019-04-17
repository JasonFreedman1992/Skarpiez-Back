const express = require('express');
const bodyParser = require('body-parser');

var cheerio = require("cheerio");

const puppeteer = require('puppeteer');

const app = express();
const port = process.env.PORT || 5000;

var tools = require('./index2');
var fs = require('fs');

var html = fs.readFileSync("./scrape.html");

async function getHTML(req){ 
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const finalRobots = req + "/robots.txt"
  await page.goto(finalRobots);
  const html = tools.getInnerBody(await page.content());
  console.log(html);
  return html;
  //const page = await browser.newPage();
  
}

// console.log(tools.getInnerBody(html))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Fuck you' });
});

app.post('/api/world', (req, res) => {
  
  // const browser = puppeteer.launch();
  // const page = br
  // const page = await browser.newPage();
  // page.goto(req.body.post);
  getHTML(req.body.post).then(function (data) {
    console.log(data);
    res.send(
      // `I received your POST request. This is what you sent me: ${req.body.post}`, #OLD
      `${data}`,
    );
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));