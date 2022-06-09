var bat = 0
function color(){
    let input = document.getElementById("input")
    
    input.style = "Background-color: hsl(0, 0%, 100%); color:hsl(25, 97%, 53%)"
}

    function trade() {
    let li = document.getElementsByTagName("li")[0]
    li.style = "background-color: hsl(25, 97%, 53%)"
    bat++
    console.log(bat)
}

function trade1() {
    let li = document.getElementsByTagName("li")[1]
    li.style = "background-color: hsl(25, 97%, 53%)"
    localStorage.getItem("teste", "b")
    bat = 2
    console.log(bat)

}

function trade2() {
    let li = document.getElementsByTagName("li")[2]
    li.style = "background-color: hsl(25, 97%, 53%)"
    bat = 3
    console.log(bat)

}

function trade3() {
    let li = document.getElementsByTagName("li")[3]
    li.style = "background-color: hsl(25, 97%, 53%)"
    bat = 4
    console.log(bat)
}

function trade4() {
    let li = document.getElementsByTagName("li")[4]
    li.style = "background-color: hsl(25, 97%, 53%)"
    bat = 5
    console.log(bat)

}


function alo() {
    let input = document.getElementById("input")
    let img1 = document.getElementById("img")
    let img = document.getElementById("img2")
    let h1 = document.getElementsByTagName("h1")[0]
    let p = document.getElementsByTagName("p")[1]
    let p1 = document.getElementsByTagName("p")[0]
    let ul = document.getElementsByTagName("ul")[0]
    input.style = "Background-color: hsl(0, 0%, 100%); color:hsl(25, 97%, 53%)"
    if (bat == 1) {
        img1.style = "display:none"
        img.style = "display: block; margin: auto"
        h1.innerText = "Thank you!"
        h1.style = "text-align: center"
        p.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
        p.style = "text-align: center"
        ul.style = "display: none"
        p1.innerText = "You selected 1 out of 5"
        p1.style = "background-color: hsl(216, 12%, 8%);"
        input.style = "display: none"

    }
    if (bat == 2) {
        img1.style = "display:none"
        img.style = "display: block; margin: auto"
        h1.innerText = "Thank you!"
        h1.style = "text-align: center"
        p.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
        p.style = "text-align: center"
        ul.style = "display: none"
        p1.innerText = "You selected 2 out of 5"
        p1.style = "background-color: hsl(216, 12%, 8%);"
        input.style = "display: none"

    }
    if (bat == 3) {
        img1.style = "display:none"
        img.style = "display: block; margin: auto"
        h1.innerText = "Thank you!"
        h1.style = "text-align: center"
        p.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
        p.style = "text-align: center"
        ul.style = "display: none"
        p1.innerText = "You selected 3 out of 5"
        p1.style = "background-color: hsl(216, 12%, 8%);"
        input.style = "display: none"

    }
    if (bat == 4) {
        img1.style = "display:none"
        img.style = "display: block; margin: auto"
        h1.innerText = "Thank you!"
        h1.style = "text-align: center"
        p.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
        p.style = "text-align: center"
        ul.style = "display: none"
        p1.innerText = "You selected 4 out of 5"
        p1.style = "background-color: hsl(216, 12%, 8%);"
        input.style = "display: none"

    }
    if (bat == 5) {
        img1.style = "display:none"
        img.style = "display: block; margin: auto"
        h1.innerText = "Thank you!"
        h1.style = "text-align: center"
        p.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
        p.style = "text-align: center"
        ul.style = "display: none"
        p1.innerText = "You selected 5 out of 5"
        p1.style = "background-color: hsl(216, 12%, 8%);"
        input.style = "display: none"

    }
}




