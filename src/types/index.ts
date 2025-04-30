export interface Book{
    _id:string
    title:string
    description:string
    genre:string
    coverImage:string
    file:string
    author:Author






}

export interface Author{
    _id:string
    name:string
}


// {
//     "_id": "6804eb33e92aeada74f5f3b8",
//     "title": "Suman Saha Resume",
//     "author": {
//         "_id": "67ef9486052d3fdd22923530",
//         "name": "Suman Saha"
//     },
//     "genre": "CV",
//     "coverImage": "https://res.cloudinary.com/dbeeybmuh/image/upload/v1745152818/book-cover/nsfxxlrnveehiiykk0t5.jpg",
//     "file": "https://res.cloudinary.com/dbeeybmuh/raw/upload/v1745152819/book-pdf/mk75g1cpyppbacspegq1.pdf",
//     "createdAt": "2025-04-20T12:40:19.532Z",
//     "updatedAt": "2025-04-20T12:40:19.532Z",
//     "__v": 0,
//     "description": "This is a Resume of Suman Saha"
// }