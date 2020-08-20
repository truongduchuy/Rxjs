import { Observable } from 'rxjs';

var observer1 = new Observable(
   function subscribe(subscriber) {
      subscriber.next("My First Observable")
   }
);

observer1.subscribe(x => console.log(x));


var observer2 = new Observable(
    function subscribe(subscriber) {
       try {
          subscriber.next("My First Observable");
          subscriber.next("Testing Observable");
          subscriber.complete();
       } catch(e){
          subscriber.error(e);
       }
    }
 );
 observer2.subscribe(x => console.log(x), (e)=>console.log(e), 
    ()=>console.log("Observable is complete"));