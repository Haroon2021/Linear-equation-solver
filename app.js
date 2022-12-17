const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // Line below takes the form data from the HTML page and we have to make sure that 
    // the name tags are filled in the HTML elements otherwise we will not get proper key pair values
    // when the data is transformed
    const linesData = new FormData(form);
    // The linke below transforms the data into data with Key value pairs
    const linesDataTransformed = Object.fromEntries(linesData);

    // Picking out the SUVAT values from the transformed data 
    const a = parseFloat(linesDataTransformed['a']);
    const b = parseFloat(linesDataTransformed['b']);
    const c = parseFloat(linesDataTransformed['c']);

    if (a == 0) {
        document.querySelector(".errorhanger").innerText = `a = 0 so the equation is unsolvable`
    } else {
        document.querySelector(".part1").innerText = `
        Our equation is: \n ax + b = c 
       `

        document.querySelector(".part2").innerText = `
        Substuting values for a, b and c we get \n ${a}x + ${b} = ${c} 
       `

        document.querySelector(".part3").innerText = `
        Rearranging we get: \n ${a}x = ${c-b} \n x = ${(c-b)/a}`
    }
})