function RandomName(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


class Book {
    constructor() {
        this.id = RandomName(3);
        this.title = RandomName(10);
        this.author = RandomName(10);
        this.pagecount = RandomName(10);
        this.content=[RandomName(5),RandomName(5), RandomName(5)]
    }
}
class Employee{
    constructor(firstname,lastname,phone,email){
        this.firstname=firstname,
            this.lastname=lastname;
        this.phone=phone;
        this.email=email;

    }
}


class Library {
    books=[];
    employees=[];
    addBook (book) {
        this.books.push(book);
    }

    getAllAuthor(){
        for(let i=0; i<this.books.length;i++){
            console.log(this.books[i].author);
        }
    }
    getBooksOfAuthor(a){
        let i=0;
        for(let i=0; i<this.books.length;i++){
            if(this.books[i].author==a){

                i++;


            }
            return i;
        }
    }
    authorReport(a){
        for (let i = 0; i<this.books.length; i++){
            if(this.books[i].author==a){
                console.log(a+" "+ this.books[i].title);
            }
        }
    }
    takeBook(id){
        for (let i = 0; i<this.books.length; i++){
            if(this.id==id){
                console.log(this.books[i]);
            }
        }
    }
    searchbyText(text){
        for(let i=0; i<this.books.length;i++){
            let index;
            for(let k=0;k<this.books[i].content.length;k++){
                if (this.books[i].content[k]=text){
                    index=i

                }
            }
            console.log(this.books[i]);
        }

    }
    addEmployee(Human){

        this.employees.push(Human);

    }
    removeEmployee(id){
        this.employees.slice(id);
    }
    editEmployee(id,firstname,lastname,phone,email){
        this.employees[id].firstname=firstname;
        this.employees[id].lastname=lastname;
        this.employees[id].phone=phone;
        this.employees[id].email=email;
    }
}

