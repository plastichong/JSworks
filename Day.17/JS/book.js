function Book(title,author,price){
    this.title = title;
    this.author = author;
    this.price = price;
}


let web = new Book("반응형 웹","조혜경",30000)
let java = new Book("혼자 공부하는 Java","신용권",25000)
let spring = new Book("스프링 프레임워크","spring",30000)


let bookList = [web,java,spring]

console.log(bookList[0].title);
console.log(bookList[1].title);
console.log(bookList[2].title);

//자료수정

bookList[1].author = "신동엽";
console.log(bookList[1]);

document.write("<h1>책 제목과 저자</h1>");
for(i=0;i<bookList.length;i++){
document.write("<p>"+bookList[i].title+" : "+bookList[i].author+"</p>");
}