// // const regEx= /very/g;

// const text="Harry is very very nice very awesome very nice lorem";

// console.log(text.replace("Harry","Lovely"));

const parseCode = (str) => {
    // your code here
    let regEx=/0+/g; //best use of Regular Expression bro
    let[a,b,c]=str.split(regEx);

    console.log(a,b,c);
    return {
        firstName:a,
        lastName:b,
        id:c
    
  };

}

  
  // Do not change the code below
  const str = prompt("Enter str: ");
  alert(JSON.stringify(parseCode(str)));
