const myLibrary = []
const cardSection = document.querySelector('.main .spacing')
const addBookButton = document.querySelector('.add-book')
const form = document.querySelector('dialog form')
const dialog = document.querySelector('dialog')

let id = 0

function Book(title, author, read) {
    this.title = title
    this.author = author
    this.read = read
    this.key = id++ + ''
}

function addBookToLibrary(title, author, read, key) {
    const book = new Book(title, author, read, key)
    myLibrary.push(book)
}

function displayBooks() {
    const createElement = (text, ...classNames) => {
        const element = document.createElement('div')

        if (text) element.textContent = text
        if (classNames.length) element.classList.add(...classNames)

        return element
    }

    const createCard = (title, author, read, key) => {
        const card = createElement(null, 'card')
        card.dataset.key = key  
        card.appendChild(createElement(title, 'title'))
        card.appendChild(createElement(author, 'author'))

        const readButton = createElement(read ? 'Read' : 'Not Read', 'read', 'button')
        const removeBookButton = createElement('Remove Book', 'remove', 'button')
        card.appendChild(readButton)
        card.appendChild(removeBookButton)

        readButton.addEventListener('click', (e) => {
            const book = myLibrary[myLibrary.findIndex(element => element.key === card.dataset.key, 1)]
            book.read = !book.read

            displayBooks()
        })

        removeBookButton.addEventListener('click', () => {
            myLibrary.splice(myLibrary.findIndex((element) => element.key === card.dataset.key), 1)
            displayBooks()
        })

        return card
    }

    cardSection.innerHTML = ''

    myLibrary.forEach(book => {
        cardSection.appendChild(createCard(book.title, book.author, book.read, book.key))
    })
}

addBookToLibrary('Discipline is Destiny', 'Ryan Holiday', true)
addBookToLibrary('The Obstacle is the Way', 'Ryan Holiday', false)
addBookToLibrary('Meditations', 'Marcus Aurelius', false)
displayBooks()

addBookButton.addEventListener('click', () => {
    dialog.showModal()
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const title = formData.get('book-title')
    const author = formData.get('book-author')
    const read = formData.has('book-read')

    addBookToLibrary(title, author, read)
    displayBooks()
    dialog.close()
    form.reset()
})

dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
        dialog.close()
    }
})