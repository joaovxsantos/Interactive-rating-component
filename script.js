function color(){
    let input = document.getElementById("input")
    
    input.style = "Background-color: hsl(0, 0%, 100%); color:hsl(25, 97%, 53%)"

    addEventListener("mouseout", function(){
        let input = document.getElementById("input")
        input.style = "color: hsl(0, 0%, 100%); Background-color:hsl(25, 97%, 53%)"
    })
}




function trade(){
    let li = document.getElementsByTagName("li")[0]
    
    li.style = "background-color: hsl(25, 97%, 53%)"
}

function trade1(){
    let li = document.getElementsByTagName("li")[1]
    li.style = "background-color: hsl(25, 97%, 53%)"
    localStorage.getItem("teste", "b")
}

function trade2(){
    let li = document.getElementsByTagName("li")[2]
    li.style = "background-color: hsl(25, 97%, 53%)"

    
}

function trade3(){
    let li = document.getElementsByTagName("li")[3]
    li.style = "background-color: hsl(25, 97%, 53%)"

}

function trade4(){
    let li = document.getElementsByTagName("li")[4]
    li.style = "background-color: hsl(25, 97%, 53%)"

    
}




