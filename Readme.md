# ch3 sourcemap

## To generate source map using babel

### we add sourceMaps:true inside .babelrc

### By adding --watch inside package.json build babel see the the changes in file ("build": "babel ./script.js -d lib --watch ")

## Ch 4 learn how to setup react with parcel

### first create src folder

#### first create npm init -y

#### inside create index.html, index.js and App.js file

#### inside index.js create root element

#### inside index.html inside script tag add type="module"

#### npm i react react-dom

#### npm i -D parcel

#### inside package.json add source:"src/index.html" and add script(start,build)

#### start project using npm start

## ch5 Learn about react component

#### fetching dummyjson api of products

#### rendering full products on the page

#### also pass props from parent to child component

## ch6 Learn about props and useState

#### props pass from parent to child

#### react does not track js variable so we have to use useState to create variables

## ch7 how use state works behind the scenes

#### useState only update value at once with onclick handler

#### Incase if you want to give previous value reference and want to update it to multiple times you have to use useState((previousState)=>count + 1) previous state with callback function but react keep tracks of it but it does not change the actual value like [count,setCount] it does not change count, at the previousState give it's value to count after completing it's operation.
