//console.log('Client side javascript loaded.')

fetch("http://puzzle.mead.io/puzzle").then((response) => {
    response.json().then((data) => {
        console.log(data)
    })

})