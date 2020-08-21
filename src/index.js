import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

// let final_val = ajax('https://jsonplaceholder.typicode.com/users').pipe(map(e => e.response));
// let subscriber1 = final_val.subscribe(a => console.log(a));
// let subscriber2 = final_val.subscribe(a => console.log(a));

const subject_test = new Subject();

subject_test.subscribe({
   next: (v) => console.log(v)
});
subject_test.subscribe({
   next: (v) => console.log(v)
});

let final_val = ajax('https://jsonplaceholder.typicode.com/users').pipe(map(e => e.response));
final_val.subscribe(subject_test);