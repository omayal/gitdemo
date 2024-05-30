function invokingbrowser(browser) {
    if (browser.browsername === "chrome" && browser.browserversion == 112) {
        console.log("launch chrome browser");
    }
    else {
        console.log("launch firefox");
    }
}
var chromebrowser = {
    browsername: "chrome",
    browserversion: 112
};
invokingbrowser(chromebrowser);
