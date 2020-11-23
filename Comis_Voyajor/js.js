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
    let isLink = 1
    this.list.forEach(link => {
      if (link.linkCell === linkCell) {
        isLink = 0
      }
    })
    if (isLink) {
      
      this.list.push({linkCell, cost})
    }
  }
}

class CellRelation {
  constructor() {
    this.arr = []
    this.cell = {}
  }
  
  addRelation(...arg) {
    let isRel = 1
    this.arr.forEach(rel => {
      if (
        (rel.cell1 === arg[0]) && (rel.cell2 === arg[1])
        || (rel.cell2 === arg[0]) && (rel.cell1 === arg[1])) {
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
    if (event.target.className === 'cell') {
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
    let ok = 1
    cellList.forEach(cell => {
      if (cell.innerText === '') {
        ok = 0
      }
    })
    if (ok) {
      addCost()
    } else alert('Dati denumire tuturor celulelor')
  }
})

// Comis voiajor

const greedy = document.getElementById("greedy")
const heuristic = document.getElementById("heuristic")
const backtracking = document.getElementById("backtracking")
const direct = document.getElementById("direct")
greedy.addEventListener("click", () => {
  console.log()
})
heuristic.addEventListener("click", () => {

})
backtracking.addEventListener("click", () => {

})
direct.addEventListener("click", () => {
  const getArray = (list) => {
    return list.map( cell =>  cell.cost)
  }
  
  console.log( Math.min.apply(null, getArray(cellRelation.getRelations()) ))
})