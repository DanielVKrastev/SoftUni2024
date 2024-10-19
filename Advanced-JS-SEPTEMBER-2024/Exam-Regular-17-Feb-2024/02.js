class BookClub{
    constructor(library){
        this.library = library;
        this.books = new Map;
        this.members = [];
    }

    addBook (title, author){
        if(typeof title != 'string' || typeof author != 'string'){
            return;
        }

        if(this.books.has(title)){
            return `The book "${title}" by ${author} is already in ${this.library} library.`;
        }else{
            this.books.set(title, author);
            return `The book "${title}" by ${author} has been added to ${this.library} library.`;
        }
    }

    addMember (memberName){
        if(typeof memberName != 'string'){
            return;
        }

        if(this.members.includes(memberName)){
            return `Member ${memberName} is already a part of the book club.`;
        }else{
            this.members.push(memberName);
            return `Member ${memberName} has been joined to the book club.`
        }
    }

    assignBookToMember (memberName, bookTitle) {

        if( ! this.members.includes(memberName)){
            throw new Error(`Member ${memberName} not found.`);
        }

        if(! this.books.has(bookTitle)){
            throw new Error(`Book "${bookTitle}" not found.`);
        }

        const author = this.books.get(bookTitle);
        this.books.delete(bookTitle);

        return `Member ${memberName} has been assigned the book "${bookTitle}" by ${author}.`;
        
    }

    generateReadingReport () {
        if(this.members.length == 0){
            return "No members in the book club.";
        }

        if(this.books.size == 0){
            return "No available books in the library.";
        }

        let result = `Available Books in ${this.library} library:`;
        for (const [title, author] of this.books) {
            result += `\n"${title}" by ${author}`;
        }

        return result;
    }
}

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "The Da Vinci Code"));






