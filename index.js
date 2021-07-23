let ticketIncrese = document.getElementById('ticketAdd');
let ticketDecrese = document.getElementById('ticketRemove');
 let ticketIncrese2 = document.getElementById('ticketAdd2');
 let addTicket2 = document.getElementById('addCount2');
 let removeTicketcount = document.getElementById('removeCount');
 


// profile
let profile = document.querySelector('.profile');
let profileBox = document.querySelector('.profile-box');

profile.onclick = function(){
        profile.classList.toggle('active');
        profileBox.classList.toggle('active');
        overflow.classList.toggle('active');
}

let notification = document.querySelector('.notification');
let notificationBox = document.querySelector('.notification-box');
let overflow = document.querySelector('.overflow');

notification.onclick = function(){
        notification.classList.toggle('active');
        notificationBox.classList.toggle('active');
        overflow.classList.toggle('active');
}
let sideBar = document.querySelector('.sidebar');
let toggleMenu = document.querySelector('.navbar-toggler');
toggleMenu.onclick = function(){
        toggleMenu.classList.toggle('active');
        sideBar.classList.toggle('active');
        overflow.classList.toggle('active');
        
}
 
 ticketIncrese.addEventListener('click', function(){
        handleUpdateTicket(true);
 });


 ticketDecrese.addEventListener('click', function(){
        handleUpdateTicket(false)
 });

function handleUpdateTicket(counting){
        let countInputAdd = document.getElementById('ticketCountAdd');
        let addTicketCount = parseInt(countInputAdd.value);
        let result = addTicketCount;
        if(counting == true){
                result = addTicketCount + 1;
        }
        if(counting == false && addTicketCount > 0){
                result = addTicketCount - 1;
        }
       countInputAdd.value = result;
       
       let subtotal = result * 150;
       document.getElementById('tpTicket').innerText = '$'+ subtotal;

       let vat = subtotal/100*10;
       document.getElementById('vat').innerText = '$' + vat;

       let total = subtotal + vat;
       document.getElementById('total').innerText = '$' + total;
}


addTicket2.addEventListener('click', function(){
        handleInputRm(true);
})

removeTicketcount.addEventListener('click', function(){
        handleInputRm(false);
})

function handleInputRm(cunt){
        let input2count = document.getElementById('ticketCountAdd2');
        let filtCounting2 = parseInt(input2count.value);
      
        let result2 = filtCounting2;
        if(cunt == true){
                result2 = filtCounting2 + 1;
        }
        if(cunt == false && filtCounting2 > 0){
                result2 = filtCounting2 - 1;
        }
        input2count.value = result2;

           let subTotal2  = result2 * 100;
          document.getElementById('tpTicket').innerText ='$' + subTotal2;

          let tax = subTotal2/100*10;
          document.getElementById('vat').innerText = '$' + tax;
          let total2 = document.getElementById('total');
          total2.innerText ='$' +  subTotal2 + tax;
        
}

function myFunction(){
      let rsl1 = document.getElementById('form').value;
      document.getElementById('txt').innerText = rsl1;
}
function myFunction2(){
      let rsl2 = document.getElementById('form2').value;
      document.getElementById('txt2').innerText = rsl2;
}


let popUp = document.getElementById('submit');

popUp.onclick = function(){
        popUp.classList.toggle('active');
       let mBox = document.getElementById('popId');
       mBox.classList.toggle('active');
      let swhOverlay = document.getElementById('overlay2');
      swhOverlay.classList.toggle('active');
        
}



// ticketIncrese.addEventListener('click', function(){
//     // let countInputAdd = document.getElementById('ticketCountAdd');
//     // let addTicketCount = parseInt(countInputAdd.value);
//     // let result = addTicketCount + 1;
//     //  countInputAdd.value = result;


//     //  let subTotal = result * 500;
//     //  currentSubTotal.innerText = subTotal;

//     handleTicketUpdate(true);

// });

// ticketDecrese.addEventListener('click', function(){
//     handleTicketUpdate(false);


// });

// ticketIncrese2.addEventListener('click', function(){
//      let countInputAdd2 = document.getElementById('ticketCountAdd');
//      let addTicketCount2 = parseInt(countInputAdd2.value);
//      let result2 = addTicketCount2 + 1;
//      countInputAdd2.value = result2;

//      let subtotal2 = result2 * 500;
     
//      currentSubTotal.innerText = subtotal2;

// });


// function handleTicketUpdate2(addTicket2){
//     let countInputAdd2 = document.getElementById('betaTicket-input');
//     let addTicketCount2 = parseInt(countInputAdd2.value);
//     // let ticketResult = addTicketCount + 1;
//     let ticketResult2 = addTicketCount2;
//     if(addTicket2 == true){
//             ticketResult2 = addTicketCount2 + 1
//     }
//     if(addTicket2 == false && addTicketCount2 > 0){
//             ticketResult2 = addTicketCount2 - 1
//     }
//     // countInputAdd2.value = ticketResult;
//     countInputAdd2.value = ticketResult2

//     calculat();
 
// }


// form working code

