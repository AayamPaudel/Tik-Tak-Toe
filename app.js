let a = document.querySelectorAll(".button")
let resetbtn = document.getElementById("reset")
let result = document.getElementById("winner")
let turn = true

let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
]

a.forEach((a) => {
    a.addEventListener("click", () => {
        if (turn) {
            a.innerText = "X"
            turn = false
        }
        else {
            a.innerText = "O"
            turn = true
        }
        check()
        a.disabled = true
        
    })
})


const check = () => {
    for (let pattern of arr) {
        let pos1 = a[pattern[0]].innerText
        let pos2 = a[pattern[1]].innerText
        let pos3 = a[pattern[2]].innerText

        if (pos1 != "" && pos1 === pos2 && pos2 === pos3) {
            win()
            a.forEach((a) => {
                a.disabled = true
            })
        }
    }
}

function win() {
    result.innerText = turn ? "Winner: O" : "Winner: X"
}

resetbtn.addEventListener("click", () => {
    reset()
})

function reset() {
    a.forEach((a) => {
        a.innerText = ""
        a.disabled = false
    })
    count = 0
    result.innerText = "Winner: "
    turn = true
}
