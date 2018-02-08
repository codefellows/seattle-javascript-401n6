// BAD: prints only 10
function countUpToTenNaiive() {
  for (var i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log()
      console.log("non-copier:", i);
    }, i * 1000);
  }
}

// BAD: prints only 9
function countUpToTenCopyAttempt() {
  for (var i = 0; i < 10; i++) {
    (function() {
      iCopy = i;

      setTimeout(function() {
        console.log("    copier:", iCopy);
      }, iCopy * 1000);
    })()
  }
}

// BAD: prints only 10
function countUpToTenES6Attempt() {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log("es6 function:", i);
    }, i * 1000);
  }
}


function countUpToTenSelfExecutingFunction() {
  for (var i = 0; i < 10; i++) {
    (function() {
      var iCopy = i;

      setTimeout(function() {
        console.log("var copier:", iCopy);
      }, iCopy * 1000);
    })()
  }
}

function countUpToTenLet() {
  for (let i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log("let copier", i);
    }, i * 1000);
  }
}

// bad ones
countUpToTenNaiive()
countUpToTenCopyAttempt()
countUpToTenES6Attempt()

// good ones
countUpToTenSelfExecutingFunction()
countUpToTenLet()
