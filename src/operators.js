import { fromEvent, interval } from 'rxjs';
import { reduce, switchMap, take, tap } from 'rxjs/operators';

fromEvent(document, 'click')
  .pipe(
    switchMap(() => {
      return interval(1000).pipe(
        tap((value) => console.log('Tap: ', value)),
        take(5),
        reduce((acc, value) => acc + value, 0),
      );
    }),
  )
  .subscribe({
    next: (value) => console.log('Next: ', value),
    complete: () => console.log('Complete'),
  });

// const stream$ = interval(1000).pipe(
//   tap((value) => console.log('Tap: ', value)),
//   map((value) => value * 3),
//   filter((value) => value % 2 === 0),
//   take(5),
//   takeLast(5),
//   takeWhile((value) => value < 7),
//   scan((acc, value) => acc + value, 0),
//   reduce((acc, value) => acc + value, 0),
// );
//
// stream$.subscribe({
//   next: (value) => console.log('Next: ', value),
//   complete: () => console.log('Complete'),
// });
