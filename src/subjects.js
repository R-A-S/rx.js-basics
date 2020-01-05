import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

document.addEventListener('click', () => {
  const stream1$ = new Subject();
  stream1$.subscribe((value) => console.log('Value: ', value));
  stream1$.next('Hello');
  stream1$.next('Rx');
  stream1$.next('JS');

  const stream2$ = new BehaviorSubject('First!');
  stream2$.subscribe((value) => console.log('Value: ', value));
  stream2$.next('Hello');
  stream2$.next('Rx');
  stream2$.next('JS');

  const stream3$ = new ReplaySubject(2);
  stream3$.next('Hello');
  stream3$.next('Rx');
  stream3$.next('JS');
  stream3$.subscribe((value) => console.log('Value: ', value));
});
