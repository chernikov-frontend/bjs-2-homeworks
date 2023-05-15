class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
      this.state = this.state * 1.5;
    }

    set state(fix) {
        if (fix < 0) {
            this._state = 0;
        } else if (fix >= 100) {
            this._state = 100;
        } else {
            this._state = fix;
        }
    }

    get state() {
        return this._state;
    }  
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) this.books.push(book);
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        const book = this.findBookBy('name', bookName);
        if (book) {
            this.books.splice(this.books.indexOf(book), 1);
        }
        return book;
    }
}


// Задача 3. Журнал успеваемости *

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) return;

        if (!(this.marks.hasOwnProperty([subject]))) {
            this.marks[subject] = [];
            this.marks[subject].push(mark); 
        } else this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!(this.marks.hasOwnProperty([subject]))) return 0;
        return this.marks[subject].reduce((acc, item) => acc + item, 0) / this.marks[subject].length;
    }

    getAverage(){
        if (Object.keys(this.marks).length === 0) return 0;

        let summ = 0;
        for (let i = 0; i < Object.keys(this.marks).length; i++) {
            let item = Object.keys(this.marks)[i];
            summ += this.getAverageBySubject(item);
        }
        return summ / Object.keys(this.marks).length;
    }
}
