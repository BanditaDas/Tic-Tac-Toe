console.log("Welcome");
let t = "X"
let w =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
]

let change = ()=>{
    return t === "X" ? "0" : "X"
}
let win = ()=>{
    for (let p of w){
        let p1 = box[p[0]].innerText;
        let p2 = box[p[1]].innerText;
        let p3 = box[p[2]].innerText;
        if(p1 !== "" && p2 !== "" && p3 !== ""){
            if(p1 === p2 && p2 === p3){
                document.querySelector(".if").innerHTML = p1 + " won ";
                document.querySelector(".imgbox img").style.width = "10vw";
            }
        }
    }
}

let box = document.querySelectorAll(".box");
box.forEach(elem =>{
    let bt = elem.querySelector(".boxtxt")
    elem.addEventListener("click",(e)=>{
        if(bt.innerHTML === ''){
            bt.innerHTML = t;
            t = change();
            document.getElementsByClassName("if")[0].innerHTML = "Turn :" + t;
            win();
        }
    })
})


let reset = document.querySelector("#reset");

reset.addEventListener("click",()=>{
    let bt = document.querySelectorAll(".boxtxt")
    bt.forEach(elem =>{
        elem.innerHTML = "";
        document.getElementsByClassName("if")[0].innerHTML = "Turn :" + t;
        document.querySelector(".imgbox img").style.width = 0;
    })
})