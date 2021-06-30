// import React from 'react'
// import ReactDom from 'react-dom'

// stateless functional component
// always return JSX

// function Greeting() {
//   return  <h4>This is Santosh, It's my first component </h4>;
// }

// const Greeting = () => {
//   return React.createElement('h1', {}, 'Hello World');
// }

// function Greeting () {
//   return (
//     <div>
//       <h3>Hello People</h3>
//       <ul>
//         <li>
//           <a href='#'>Hello World</a>
//           </li>
//           <img src='' alt='' />
//           <input type='text' name='' id=''></input>
//       </ul>
//     </div>
//   );
// }

// nested components, react tools

// function Greeting () {
//   return (
//     <div> 
//       <Person /> 
//       <Message />
//     </div>
//   );
// }
//  const Person = () => <h2>happpy</h2>;
//  const Message = () => {
//    return <p>This is Message</p>;
//  };

// import React from 'react';
// import ReactDom from 'react-dom';


// function BookList () {
//   return (
//     <section>
//       <Book />
//     </section>
//   );
// }

// const Book = () => {
//   return (
//   <article>
//     <Image />
//     <Title />
//     <Author />
//   </article>
//   );
// };
// const Image = () => (
//   <img 
//     src='https://onlinejpgtools.com/resize-jpg' 
//          alt='' 
//   />
//  );

//  const Title = () => <h1>Begining Of Indian Cricketers</h1>;
//  const Author = () => <h4>Happy</h4>;
// ReactDom.render(<BookList />, document.getElementById('root')
// );



// import React from 'react';
// import ReactDom from 'react-dom';

// // css
// import './index.css';
// // stup vars
// const author = 'Kam Dev';
// const title = 'Kamasutra';
// const img = 'https://media.istockphoto.com/photos/close-up-of-kamasutra-scenes-on-the-wall-of-konark-sun-temple-odisha-picture-id1323520087?s=612x612'
// function BookList() {
//   return (
//     <section className='booklist'>
//       <Book />
//       <Book />
//     </section>
//   );
// }
// const Book = () => {
//   return (
//     <article className='book'>
//       <img src={img} alt='' />    
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

import React from 'react';
import ReactDom from 'react-dom';

// css
import './index.css';
const book = [
  {
    id: 1,
  img:
      'https://images.unsplash.com/photo-1622495488655-498a6e9bb902?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80',
      title: 'The Cycle Rider',
      author: 'BSDK',
}
,
{
  id: 2,
  img:
      'https://images.unsplash.com/photo-1624956741711-9e4001049662?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      title: 'The Dogy',
      author: 'NMT',
},
{
  id: 3,
  img: 
      'https://images.unsplash.com/photo-1624943041233-14323fd2f98d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
       title: 'The Car',
       author: 'RMD',
}
];

function BookList () {
  return (
    <section className='booklist'>
    {book.map((book)=> {
    return <Book key={book.id} book={book}></Book>
  })}
  </section>
);
}

const Book = ({img, ti tle, author}) => {
 // attribiute, evevntHandler
 // onClick, OnMouseOver

  return (
  <article className='book'>
  <img src={img} alt='' />
  <h1>{title}</h1>
  <h4>{author}</h4>
  <button type="button" onClick  ></button>
  </article>
);
};

ReactDom.render(<BookList />, document.getElementById('root'));