# Tik-Tak-Toe
This is a tic tac toe game. click the boxes turn by ture to play. The rules are as usual. Align three of the same marks (X or O) horizontally, vertically or diagonally. Who does it first wins the game. I made this so that anyone can enjoy the game anytime, anywhere.
Following are the win conditions. The game checks all the win conditions.
```javascript
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
```
If the win conditions are met, the game decides the winner. If there is no winner, it is a tie.

```javascript
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
```
This code is the main block containing the logic of the game

The whole js file is like this:
```javascript
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
```
