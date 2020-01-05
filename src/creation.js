import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

// const stream$ = of(1, 2, 3, 4);
//
// stream$.subscribe((val) => {
//   console.log('Value: ', val);
// });

// const arr$ = from([1, 2, 3, 4]);
// arr$
//   .pipe(scan((acc, v) => acc.concat(v), []))
//   .subscribe((val) => console.log(val));

fromEvent(document.querySelector('canvas'), 'mousemove')
  .pipe(
    map((e) => ({
      x: e.offsetX,
      y: e.offsetY,
      ctx: e.target.getContext('2d'),
    })),
  )
  .subscribe((pos) => {
    pos.ctx.fillRect(pos.x, pos.y, 2, 2);
  });

const clear$ = fromEvent(document.getElementById('clear'), 'click');

clear$.subscribe(() => {
  const canvas = document.querySelector('canvas');
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
});

// const sub = interval(500).subscribe((v) => console.log(v));
// setTimeout(() => sub.unsubscribe(), 4000);

// timer(2500).subscribe((v) => console.log(v));

// range(42, 10).subscribe((v) => console.log(v));
