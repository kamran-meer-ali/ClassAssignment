var customerName =[
 {
    names:'Kamran Ali',
    saleOut:'15 items',
    totalPrice:'Rs:12323',
    disPrice:'10%',
 },
 {
    names:'Arshamn Zeshan',
    saleOut:'3 items',
    totalPrice:'Rs:2323',
    disPrice:'5%',
 },
 {
    names:'Daniyal Ahmad',
    saleOut:'5 items',
    totalPrice:'Rs:5323',
    disPrice:'7%',
 },
 {
    names:'Sajjad Alee',
    saleOut:'6 items',
    totalPrice:'Rs:6323',
    disPrice:'8%',
 },
 {
    names:'Mahnoor Alee',
    
    totalPrice:'Rs:9323',
    disPrice:'8%',
 },
];

for(let i = 0 ; i<customerName.length ;  i++ ){
   console.log(customerName[i].names,
      customerName[i]?.saleOut,
      customerName[i]?.totalPrice,
      customerName[i]?.disPrice )
}