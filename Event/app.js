let btn1=document.getElementById('button');
// btn1.onclick = ()=>{
//     // console.log('btn1 was clicked');
//     alert('Btn1 Was Clicked!')
//    let c=25;
//    c++;
//    console.log(c);
// };
btn1.onclick = (e)=>{
    // console.log('btn1 was clicked');
    console.log(e.type);
   console.log(e.target);
   console.log(e.clientY, e.clientX);
};