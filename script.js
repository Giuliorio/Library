const myLibrary = []
const cardSection = document.querySelector('.main .spacing')

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