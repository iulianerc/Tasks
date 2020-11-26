class Cell {
  constructor([cell1, cell2, cost]) {
    this.cell1 = cell1
    this.cell2 = cell2
    this.cost = cost
  }
}

class CellList {
  constructor(linkCell, cost) {
    this.list = [{linkCell, cost}]
  }
  
  pushLink(linkCell, cost) {
    this.list.forEach(link => {
      if (link.linkCell === linkCell) {
        return ''
      }
    })
    this.list.push({linkCell, cost})
  }
}

class CellRelation {
  constructor() {
    this.arr = []
    this.cell = {}
  }
  
  notSetRelation(rel, arg) {
    return (rel.cell1 === arg[0]) && (rel.cell2 === arg[1])
      || (rel.cell2 === arg[0]) && (rel.cell1 === arg[1])
  }
  
  addRelation(...arg) {
    let isRel = 1
    this.arr.forEach(rel => {
      if (this.notSetRelation(rel, arg)) {
        isRel = 0
      }
    })
    if (isRel) {
      this.arr.push(new Cell(arg))
    }
    this.cell[arg[0]] ? this.cell[arg[0]].pushLink(arg[1], arg[2]) : this.cell[arg[0]] = new CellList(arg[1], arg[2])
    this.cell[arg[1]] ? this.cell[arg[1]].pushLink(arg[0], arg[2]) : this.cell[arg[1]] = new CellList(arg[0], arg[2])
  }
  
  getRelations() {
    return this.arr
  }
  
  getCellList() {
    return this.cell
  }
}

const cellRelation = new CellRelation()

const moveCell = (cell) => {
  const cellStyle = getComputedStyle(cell)
  let x
  let y
  const dragStart = (event) => {
    x = Number(event.pageX) - Number(cellStyle.left.replace('px', ''))
    y = Number(event.pageY) - Number(cellStyle.top.replace('px', ''))
    setTimeout(() => {
      cell.hidden = true
    }, 0)
  }
  const dragEnd = (event) => {
    cell.hidden = false
    cell.style.cssText = (`
      left: ${event.clientX - x}px;
      top: ${event.clientY - y}px;
      `)
  }
  cell.addEventListener("dragstart", dragStart)
  cell.addEventListener("dragend", dragEnd)
}
const addCell = document.getElementById("addCell")
addCell.addEventListener("click", async () => {
  const cell = document.createElement("div")
  cell.classList.add("cell")
  cell.draggable = true
  await document.body.appendChild(cell)
  moveCell(cell)
  cell.addEventListener("dblclick", () => {
    cell.id = 'editing'
    cell.innerHTML = `
      <input type="text" class="inputName" onfocusout="changeName(event)" placeholder="name" value="${cell.innerText}">
    `
  })
})
const changeName = (event) => {
  const currentCell = document.getElementById("editing")
  currentCell.innerText = event.target.value
  currentCell.removeAttribute("id")
}

const addCostButton = document.getElementById("addCost")
const addCost = () => {
  let cell1
  let cell2
  let foundedCell = 0
  const selectCell = (event) => {
    let isCell = event.target.classList
    isCell = [...isCell].includes('cell')
    if (isCell) {
      if (!cell1) {
        cell1 = event.target
        foundedCell++
      }
      if ((cell1) && (cell1 !== event.target)) {
        cell2 = event.target
        foundedCell++
      }
    }
    if (foundedCell === 2) {
      document.removeEventListener("click", selectCell)
      const cell1Top = cell1.offsetTop + 40
      const cell1Left = cell1.offsetLeft + 40
      const cell2Top = cell2.offsetTop + 40
      const cell2Left = cell2.offsetLeft + 40
      const svg = document.getElementById("svgPlato")
      svg.innerHTML += `
        <line x1="${cell1Left}" y1="${cell1Top}" x2="${cell2Left}" y2="${cell2Top}" style="stroke: black;stroke-width:2" />
      `
      const cost = Number(prompt(`Dati costul drumului ${cell1.innerText} - ${cell2.innerText}`))
      cellRelation.addRelation(cell1.innerText, cell2.innerText, cost)
    }
  }
  document.addEventListener("click", selectCell)
}
addCostButton.addEventListener("click", addCost)
document.addEventListener("contextmenu", (event) => {
  if (event.ctrlKey) {
    event.preventDefault()
    const cellList = document.querySelectorAll(".cell")
    const cellListArr = [...cellList]
    let ok = cellListArr.find(cell => cell.innerText === '')
    if (!ok) {
      addCost()
    } else {
      alert('Dati valoare tuturor celulelor !')
    }
  }
})

// Comis voiajor

const greedy = document.getElementById("greedy")
const heuristic = document.getElementById("heuristic")
const backtracking = document.getElementById("backtracking")
greedy.addEventListener("click", () => {
  console.log()
})
heuristic.addEventListener("click", () => {
  
})
backtracking.addEventListener("click", () => {
  const shortestWay = []
  const points = Object.keys(cellRelation.getCellList())
  const length = points.length - 1
 /* console.log(length)
  console.log(points)
  console.log(cellRelation.getCellList())*/
  const compareCost = () => {
    console.log(shortestWay)
  }
  const notRepeat = (k) => {
    for (let i = 0; i < k; i++) {
      console.log(i<k)
      if ((shortestWay[k] === shortestWay[i] && (k !== i ))) return 0
    }
    return 1
  }
  const backTrac = (k) => {
    for (let i = 0; i < length; i++) {
      shortestWay[k] = points[i]
      if (notRepeat(k)) {
        if (k === length) {
          compareCost()
        } else {
          backTrac(k + 1)
        }
      }
    }
  }
  backTrac(0)
})