
(async () => {


    const fs = require('fs')



    //prov, pass environment
    const id = 'e9c95945794e462d92fe07e34d26b368'
    const defaultPages = ['/about', '/projects', '/posts']
    let fileContent = defaultPages.join('\n')

    const postPages = await fetch(`https://notion-api.splitbee.io/v1/table/${id}`).then(res => res.json())


    fileContent += '\n'
    fileContent += postPages.map(resp => `/posts/${resp.id}`).join('\n')

    fs.writeFileSync('routes.txt', fileContent)

})()