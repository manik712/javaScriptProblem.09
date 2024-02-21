// frist 100....100tk,
// second101-200....90tk
// third 200.....70tk.


function totalPrice (ticketQuantity){
        const perFirst100Ticket =100;
        const perSecond100Ticket=90;
        const perThird100Ticket=70;
        if(ticketQuantity<=100){
          const price =perFirst100Ticket*ticketQuantity;

           return price
        }

     else if (ticketQuantity<=200){
           const perFirst100TicketPrice = 100 * perFirst100Ticket;
           const extraTicketQuantity =ticketQuantity -100;
           const extraTicketPrice =extraTicketQuantity *perSecond100Ticket;
           const  totolPriceExtra= perFirst100TicketPrice +extraTicketPrice
              return totolPriceExtra;



     }

    else{
         
       const perFirst100TicketPrice = 100 * perFirst100Ticket;
       const perSecond100TicketPrice=100*perSecond100Ticket
        const extraTicket=ticketQuantity- 200;
        const extraTicketPrice2=extraTicket*perThird100Ticket;
        const totallllll =perFirst100TicketPrice +perSecond100TicketPrice+extraTicketPrice2;
        return totallllll;
    }



}



const myticket =totalPrice(250);
console.log(myticket);







