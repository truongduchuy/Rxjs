import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { count } from 'rxjs/operators';
import { Subject } from 'rxjs';

let all_nums = of(1, 7, 5, 10, 10, 20);
let final_val = all_nums.pipe(count());
let test = final_val.subscribe(x => console.log("The count is "+x));
test.unsubscribe();

const subject_test = new Subject();

subject_test.subscribe({
   next: (v) => console.log(`From Subject : ${v}`)
});

subject_test.subscribe({
   next: (v) => console.log(`From Subject: ${v}`)
});

// subcribes will be call when subject call next() fuction and stop if it call complete()
subject_test.next("test");
subject_test.complete();
subject_test.next("test subject");

// error
subject_test.subscribe({
   error: (e) => console.log(`From Subject : ${e}`)
});
subject_test.subscribe({
   error: (e) => console.log(`From Subject : ${e}`)
});
subject_test.error(new Error("There is an error"));