// const { template } = require('@babel/core')
import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
import { products } from './data/products.js'

// const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
// const products = require('./data/products.js')

//64130500013 Chonticha Li
function paginateManagement(items, rows) {
  const rowsPerPage = rows
  const products = items
  console.log(getTotalPages(products, rowsPerPage))

  const showItemsOfCurrentPage = (currentPageNumber) => {
    const data = getItemsOfCurrentPage(products, currentPageNumber.target.id, rowsPerPage)
    const ulParent = document.getElementById('products')
    ulParent.textContent = ' '
    for (let i = 0; i <= data.length; i++) {
      const liElement = document.createElement("li") //<li></li>
      //liElement.textContent=`ID: ${items[i].id}, NAME: ${items[i].name}`
      let textValue = ''
      // for (const key in data[i]) {
      // for (let t = 0; t <= data.length; t++) {
      textValue = `ID: ${products[i].id}, NAME: ${products[i].name} `
      // textValue=textValue+ `${key}: ${data[i][key]} `
      // }
      liElement.textContent = textValue
      ulParent.appendChild(liElement)
    }
    console.log(data)
    console.log(currentPageNumber.target.id)
  }
  const pageHandler = (event) => {
    const check = event.target.id
    const before = check
    // const ulParent = document.getElementById('products')

    // if(Number(before)!==Number(check)){
      // ulParent.textContent = ''
      
      // removeAll(document.getElementById('products'));
      // function removeAll(el)
      // {
      //   var prevEl;
      //   while (prevEl = el.previousElementSibling)
      //     prevEl.parentNode.removeChild(prevEl);
      //   if (el.parentNode.tagName.toUpperCase() != 'BODY')
      //     removeAllBefore(el.parentNode);
      // }
    const focus = event.target.id
    const targetBtn = document.getElementById(focus)
    // const first = focus
    // const targetOldBtn = document.getElementById(focus)
    
    targetBtn.style = 'background-color: LightSteelBlue'
    // targetOldBtn.style='border: 1px solid #999'
    showItemsOfCurrentPage(event)
const myNode = document.getElementById("products");
      while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
      }
      showItemsOfCurrentPage(event)
    

  }
  const showPageNumbers = () => {
    const divBtn = document.querySelector('.pagination')
    const pNum = getTotalPages(products, rowsPerPage)
    // ulParentElement.textContent=''
    for (let i = 1; i <= pNum; i++) {
      const btnP = document.createElement('button')
      btnP.textContent = `${i}`
      btnP.setAttribute('id', `${i}`)
      divBtn.appendChild(btnP)
      btnP.addEventListener('click', pageHandler)
    }
  }

  return {
    showPageNumbers,
    pageHandler
  }
}
// module.exports = paginateManagement
export { paginateManagement }
const { showPageNumbers, pageHandler } = paginateManagement(products, 10)
showPageNumbers()
pageHandler()
// page=${page>=totalPage?1:page+1}, ${pageSize}
