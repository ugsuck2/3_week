const books = [
    { title: "자바스크립트 완벽 가이드", pages: 700, isAvailable: true },
    { title: "HTML/CSS 실전 가이드", pages: 250, isAvailable: true },
    { title: "리액트 입문", pages: 400, isAvailable: false },
    { title: "알고리즘 정복", pages: 350, isAvailable: true },
    { title: "Git & GitHub", pages: 180, isAvailable: false }
];
function getAvailableThickBooks(books) {
    let result = [];

    for(let i=0;i<books.length;i++) {
        if(books[i].isAvailable===true&&books[i].pages>=300) {
            // console.log(books[i].title);
            result.push(books[i].title);
        }
        else
            continue;
    }    
    return result;
}
const finalResult = getAvailableThickBooks(books);
console.log(finalResult);