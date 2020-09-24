


// try...catch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

function doSomethingWhichDoesntCareAboutTheValueThrown() {
    console.log('1')
}



(function() {
    // throw 999
    try {
        throw 0

    } catch (e) {
        doSomethingWhichDoesntCareAboutTheValueThrown();
        console.log(e)
    }
})()