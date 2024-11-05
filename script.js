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
    const createCard = (title, author, read) => {
        const card = document.createElement('div')
        const titleText = document.createElement('p')
        const authorText = document.createElement('p')
        const readDiv = document.createElement('div')

        card.appendChild(titleText)
        card.appendChild(authorText)
        card.appendChild(readDiv)

        card.classList.add('card')
        titleText.textContent = title
        titleText.classList.add('title')
        authorText.textContent = author
        authorText.classList.add('author')
        readDiv.textContent = read
        readDiv.classList.add('read')

        return card
    }

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