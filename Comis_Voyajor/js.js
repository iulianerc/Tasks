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

const addCost = document.getElementById("addCost")
addCost.addEventListener("click", async () => {
  const costBlock = document.createElement("div")
  costBlock.classList.add("costBlock")
  costBlock.innerHTML = `<input type="text" onfocusout="" value="">`
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
      const cell1Top = cell1.offsetTop
      const cell1Left = cell1.offsetLeft
      const cell2Top = cell2.offsetTop
      const cell2Left = cell2.offsetLeft
      const width = Math.round(Math.sqrt(Math.abs(cell1Top - cell2Top) ** 2 + Math.abs(cell1Left - cell2Left) ** 2))
      const deg = Math.asin(Math.abs((cell1Left - cell2Left)) / width) * 180 / Math.PI
      console.log(deg)
      console.log(Math.abs((cell1Top - cell2Top)) / width)
      costBlock.style.cssText = `
       width: ${width}px;
       transform: rotate(${cell1Top > cell2Top ? deg + 90 : -(deg + 90)}deg);
       left: ${cell1Left > cell2Left ? cell2Left : cell1Left}px;
       top: ${cell1Top > cell2Top ? (cell1Top - cell2Top) / 2 + cell2Top : (cell2Top - cell1Top) / 2 + cell1Top}px;
      `
    }
  }
  document.addEventListener("click", selectCell)
  document.body.appendChild(costBlock)
})