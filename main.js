// Utils
function cl(i) {
    console.log(i);
}

const myLibrary = [
    {
        author: 'Asimov',
        title: 'Fundatia',
        pages: 233,
        read: false,
    }
];


const btn = document.querySelector('#submit');
const bookShelf = document.querySelector('.bookShelf');

cl(bookShelf);

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(event) {
    event.preventDefault(); 

    let author = document.querySelector("#author").value;
    let title = document.querySelector("#title").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;

    let book = new Book(author, title, pages, read);
    
    myLibrary.push(book);
    list();
}


btn.addEventListener('click', addBookToLibrary);

function list() {
    bookShelf.innerHTML = ""; 

    for (let i = 0; i < myLibrary.length; i++) { 
        const div = document.createElement("div");
        div.classList.add('book');

            // Display title
            const  titleElement = document.createElement("p");
            titleElement.appendChild(document.createTextNode("Title: " + myLibrary[i].title));
            div.append(titleElement);

            // Display author
            const authorElement = document.createElement("p");
            authorElement.appendChild(document.createTextNode("Author: " + myLibrary[i].author));
            div.append(authorElement);

            // Display nr of pages
            const  pagesElement = document.createElement("p");
            pagesElement.appendChild(document.createTextNode("Nr of pages: " + myLibrary[i].pages));
            div.append(pagesElement);

            // Read Status
            let status = myLibrary[i].read;
            if (status === true) {
                status = "yes";
            } else {
                status = "no";
            }

            const  readElement = document.createElement("p");
            readElement.appendChild(document.createTextNode("Read: " + status));
            div.append(readElement);

            //Remove book from library
            const remove = document.createElement("button")
            remove.innerHTML = "Remove Book";
            remove.classList.add('btn', 'btn-remove');
            div.append(remove);
            remove.addEventListener("click", function() {
                myLibrary.splice(i, 1); 
                list(); 
            });

        

            //Update read status
            let currentStatus = myLibrary[i].read;
            if (currentStatus != true) {
                const updateReadStatus = document.createElement("button")
                updateReadStatus.remove();
                updateReadStatus.innerHTML = "Update Read Status";
                updateReadStatus.classList.add('btn', 'btn-update');
                div.append(updateReadStatus);
                updateReadStatus.addEventListener("click", function() {
                    myLibrary[i].read = true; 
                    updateReadStatus.remove();
                    list(); 
                }); 
            } 


        bookShelf.appendChild(div);
    }
    
}

list();