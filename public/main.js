console.log('main')
addCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './style.css')
    request.onreadystatechange = () => {
       if(request.readyState === 4 && request.status >= 200 && request.status < 300){
           const style = document.createElement("style")
           style.innerHTML = request.response
           document.head.appendChild(style)
       }
    }
    request.send()
}

addJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './2.js')
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const script = document.createElement("script")
            script.innerHTML = request.response
            document.body.appendChild(script)
        }
    }
    request.send()
}

addHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './3.html')
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const div = document.createElement("div")
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    }
    request.send()
}

addXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './4.xml')
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName("warning")[0].textContent.trim()
            console.log(text)
            alert(text)
        }
    }
    request.send()
}

addJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './5.json')
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >= 200 && request.status < 300) {
            console.log(request.response)
            const object = JSON.parse(request.response)
            console.log(object)
            myName.textContent = object.name
        }
    }
    request.send()
}

let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `./page${n+1}`)
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >= 200 && request.status < 300) {
            console.log(request.response)
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement("li")
                li.textContent = item.id
                xxx.appendChild(li)
                console.log(li)
            })
            n += 1    
        }
    }
    request.send()
}