const myLibrary = []
const body = document.querySelector('body')

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, read) {
    const book = new Book(title, author, read)
    myLibrary.push(book)
}

function displayBooks() {
    const createCard = (title, author) => {
        const card = document.createElement('div')
        const titleText = document.createElement('p')
        const authorText = document.createElement('p')

        card.appendChild(titleText)
        card.appendChild(authorText)

        card.classList.add('card')
        titleText.textContent = title
        titleText.classList.add('title')
        authorText.textContent = author
        authorText.classList.add('author')

        return card
    }

    myLibrary.forEach(book => {
        body.appendChild(createCard(book.title, book.author, book.read))
    })
}

addBookToLibrary('Discipline is Destiny', 'Ryan Holiday', true)
addBookToLibrary('The Obstacle is the Way', 'Ryan Holiday', false)
addBookToLibrary('Meditations', 'Marcus Aurelius', false)
displayBooks()