function one(cb = () => {}) {
    console.log('10')
    cb();
}

function two(cb = () => {}) {
    console.log('9')

    cb();
}

function three(cb = () => {}) {
    console.log('8')

    cb();
}

function four(cb = () => {}) {
    console.log('7')

    cb();
}

function five(cb = () => {}) {
    console.log('6')

    cb();
}
function six(cb = () => {}) {
    console.log('5')

    cb();
}
function seven(cb = () => {}) {
    console.log('4')

    cb();
}
function eight(cb = () => {}) {
    console.log('3')

    cb();
}
function nine(cb = () => {}) {
    console.log('2')

    cb();
}
function ten(cb = () => {}) {
    console.log('1')

    cb();
}
function final(cb = () => {}) {
    console.log('Happy Independence Day')

    cb();
}


function greet() {
  one(() => setTimeout(() => {
     two(() => setTimeout(() => {
       three(() => setTimeout(() => {
       four(() => setTimeout(() => {
       five(() => setTimeout(() => {
       six(() => setTimeout(() => {
       seven(() => setTimeout(() => {
       eight(() => setTimeout(() => {
       nine(() => setTimeout(() => {
       ten(() => setTimeout(() => {
       final();
     }, 1000));
     }, 1000));
     }, 1000));
     }, 1000));
     }, 1000));
     }, 1000));
     }, 1000));
     }, 1000));
     }, 1000));
  }, 1000));
}
greet();  
