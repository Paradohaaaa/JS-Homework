
function foobar(text, number) {
        document.write(`<ul>`)
        for (let i = 0; i < number; i++) {
                document.write(`
        <li>${text}</li>
        `)
        }
        document.write(`</ul>`)
}

foobar('Hello', 5);