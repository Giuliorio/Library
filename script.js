const myLibrary = []
const cardSection = document.querySelector('.main .spacing')
const addBookButton = document.querySelector('.add-book')
const form = document.querySelector('dialog form')
const dialog = document.querySelector('dialog')

function Book(title, author, read) {
    this.title = title
    this.author = author
    this.read = read
}

function addBookToLibrary(title, author, read) {
    const book = new Book(title, author, read)
    myLibrary.push(book)
}

function displayBooks() {
    const createElement = (text, ...classNames) => {
        const element = document.createElement('div')

        if (text) element.textContent = text
        if (classNames.length) element.classList.add(...classNames)

        return element
    }

    const createCard = (title, author, read) => {
        const card = createElement(null, 'card')
        card.appendChild(createElement(title, 'title'))
        card.appendChild(createElement(author, 'author'))
        card.appendChild(createElement(read ? 'Read' : 'Not Read', 'read', 'button'))
        card.appendChild(createElement('Remove Book', 'remove', 'button'))

        return card
    }

    cardSection.innerHTML = ''

    myLibrary.forEach(book => {
        cardSection.appendChild(createCard(book.title, book.author, book.read))
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

    console.log(read)

    addBookToLibrary(title, author, read)
    displayBooks()
    dialog.close()
})

dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
        dialog.close()
    }
})