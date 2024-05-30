type supportedbrowsercr ="chrome"|"safari"
type browserversion=112|113

type browserprofile={
    browsername :supportedbrowsercr,
    browserversion: browserversion
}

function invokingbrowser(browser:browserprofile) :void
{
if(browser.browsername==="chrome"  && browser.browserversion==112)
    {
        console.log("launch chrome browser")
    }
    else{
        console.log("launch firefox")
    }
}

const chromebrowser : browserprofile=
{
    browsername:"chrome",
    browserversion:112
}

const safari : browserprofile=
{
    browsername:"safari",
    browserversion:112
}

invokingbrowser(chromebrowser);  //can call any one