function listArray(array) {
    document.write(`<ul>`)
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}

listArray([1, 'text', 29, true])