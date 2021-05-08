# SugarScript

A language similar to TypeScript/JavaScript that transpiles to it

## Features

#### :async

```ts
setTimeout(:async, time)
//Transpiles to
new Promise(( resolve, reject ) => {
  setTimeout((err, data) => {
    if (err) {
	  reject(err);
	  return;
	}
	resolve(data);
  });
});
```

#### Method-Lambda call

```ts
[ 1, 2, 3 ].map<# * 2>;
//Transpiles to:
[ 1, 2, 3 ].map(_ => _ * 2);
```

## Quickstart

**SugarScript**
```ts
sleep(time) = setTimeout(:async, time);
mapDouble() = this.map<# * 2>;

for (const i of 10) {
	sleep(1000);
	log(i);
}

const arr = [ 1, 2, 3 ]
	.map<# + 3>
	:mapDouble();

const x, [ a, b ] = [ 1, 2, 3 ];
log(a, b, x[2]); //logs 1 2 3
```
**JavaScript**
```ts
import { range } from 'sugarscript/core';

const sleep = time => new Promise(res => setTimeout(res, time));
const mapDouble = () => this.map(_ => _ * 2);

for (const i of range(10)) {
	await sleep(1000);
	log(i);
}

const arr = mapDouble.call(
	[ 1, 2, 3 ].map(_ -> _ + 3)
)

const x = [ 1, 2, 3 ];
const [ a, b ] = x;
console.log(a, b, x[2]); //logs 1 2 3
```
