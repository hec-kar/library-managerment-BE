const btnLogOut = document.getElementById('logout-form');

const imgLibrary = document.querySelector('.img-library');
const divContent = document.querySelector('.content')

const management = document.querySelector('.management')

const listBookHtmls = `<div class="list-book">
<div class="header-list-book">
    <div class="search-book">
        <p>Danh sách Sách</p>
        <div class="input-search">
            <input type="search" placeholder="Nhập tiêu đề..." class="search-title">
            <input type="search" placeholder="Nhập tên tác giả..." class="search-author">
        </div>
    </div>
    <button class="add-book">
        <p>Thêm sách</p>
    </button>
</div>

<div class="content-list-book">
    <div class="property-book">
        <div id="id-book">
            <p>Mã sách</p>
        </div>
        <div id="title">
            <p>Tiêu đề</p>
        </div>
        <div id="condition">
            <p>Tình trạng</p>
        </div>
        <div id="price">
            <p>Giá sách</p>
        </div>
        <div id="author">
            <p>Tác giả</p>
        </div>
        <div id="view">
            <p>Lượt xem</p>
        </div>
        <div id="page">
            <p>Số trang</p>
        </div>
        <div id="warehouse">
            <p>Kho</p>
        </div>
        <div id="quantity">
            <p>Số bản</p>
        </div>
        <div id="delete-book">
            <p>Xóa</p>
        </div>
    </div>
</div>
</div>`

const listItems = []
const listTitleBook = []
const listAuthorBook = []
const listID = []
let length

{/* <div class="list-content-book">
    <div id="list-id-book">
        <p>1</p>
        <p>1</p>
    </div> 
    <div id="list-title-book">
        <p>1</p>
        <p>1</p>
    </div> 
    <div id="list-condition-book">
        <p>1</p>
        <p>1</p>
    </div>
    <div id="list-price-book">
        <p>1</p>
        <p>1</p>
    </div> 
    <div id="list-author-book">
        <p>1</p>
        <p>1</p>
    </div> 
    <div id="list-view-book">
        <p>1</p>
        <p>1</p>
    </div> 
    <div id="list-page-book">
        <p>1</p>
        <p>1</p>
    </div> 
    <div id="list-warehouse-book">
        <p>1</p>
        <p>1</p>
    </div> 
    <div id="list-quantity-book">
        <p>1</p>
        <p>1</p>
    </div> 
    <div id="list-condition-book">
        <button id="delete-book-item1">Xóa</button>
        <button id="delete-book-item2">Xóa</button>
    </div>  
</div> */}



btnLogOut.onsubmit = function(event) {
    event.preventDefault();
    location.assign('./login.html')
}

management.addEventListener('click', render)

function render() {
    imgLibrary.classList.add('hidden')

    divContent.innerHTML = listBookHtmls;
    
    getDataFromBublicAPI()
    
}


async function getDataFromBublicAPI() {
    const responseAPI = await fetch('https://jsonplaceholder.typicode.com/users')
    const datas = await responseAPI.json();
    const listDataBook = document.querySelector('.content-list-book');
    datas.forEach((data) => {
        const idBookItem = document.createElement('div');
        listItems.push(idBookItem)
        listID.push(data.id)
        idBookItem.className = 'list-content-book';
        idBookItem.innerHTML = `
        <div class="${data.id}">
            <p>${data.id}</p>
        </div> 
        <div class="list-title-book-${data.id}">
            <p>${data.name}</p>
        </div> 
        <div class="list-condition-book">
            <p>${data.name}</p>
        </div>
        <div class="list-price-book">
            <p>${data.id}</p>
        </div> 
        <div class="list-author-book-${data.id}">
            <p>${data.name}</p>
        </div> 
        <div class="list-view-book">
            <p>${data.id}</p>
        </div> 
        <div class="list-page-book">
            <p>${data.id}</p>
        </div> 
        <div class="list-warehouse-book">
            <p>${data.id}</p>
        </div> 
        <div class="list-quantity-book">
            <p>${data.id}</p>
        </div> 
        <div class="list-condition-book">
            <button id="delete-book-item-${data.id}">Xóa</button>
        </div>  
        `
        listDataBook.appendChild(idBookItem)
    });
    length = listID.length;
    //search tittle
    (function searchTitle() {
        const searchTitle = document.querySelector('.search-title')
        listID.forEach((id) => {
            const titleBook = document.querySelector(`.list-title-book-${id}`)
            listTitleBook.push(titleBook)
        })
        searchTitle.addEventListener('input', (e) => filerInput(e.target.value, listTitleBook))
    })();
    //search author
    (function searchAuthor(){
        const searchAuthor = document.querySelector('.search-author')
        listID.forEach((id) => {
            const authorBook = document.querySelector(`.list-author-book-${id}`)
            listAuthorBook.push(authorBook)
        })
        searchAuthor.addEventListener('input', (e) => filerInput(e.target.value, listAuthorBook))    
    })();
    //delete book
    // (function deleteBooks() {
    //     listID.forEach((id, index) => {
    //         const numberBook = document.getElementById(`delete-book-item-${id}`)
    //         numberBook.addEventListener('click', () => deleteBook(index))
    //     })
    // })()
}

function filerInput(keySearch, listSearch) {
    const searchTerm = keySearch.toLowerCase()
    for(let i = 0; i < listSearch.length; i++) {
        if(listTitleBook[i%length].innerText.toLowerCase().includes(searchTerm)) {
            listItems[i%length].classList.remove('hidden')
        } else {
            listItems[i%length].classList.add('hidden')
        }
    } 
}
// listItems
// function deleteBook(index) {
//     listItems[index%length].classList.add('hidden')
// }