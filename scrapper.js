const rp = require('request-promise-native');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;



function google(arg) {
    let options = {
        uri: "https://pt.wikipedia.org/wiki/" + arg,
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"
        }
    }
    return new Promise((resolve, reject) => {
        rp(options).then(html => {
            let { document } = (new JSDOM(html)).window;
            let info = document.querySelector('p').textContent;
            resolve(info);
        })

    });
};


google(process.argv[2]).then(birthday => {
    console.log(birthday);
});

