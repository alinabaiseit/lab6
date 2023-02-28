function load () {
    console.log('Here are problems 4, 10 and 1.\n Please use function four("enter your name") for problem 4.\n Please use function ten(num1, num2) for problem 10.\n Please use function one() for problem 1.')
}

// Problem #4
    function four(name) {
        console.log(`Hi, ${name}! You've got a beutiful name:) Have a nice day!`);
    }

// Problem #10
    function ten(num1, num2) {
        if (num1 === num2) {
        console.log(`${num1} and ${num2} are equal`);
        } else {
        console.log(`${num1} and ${num2} are not equal`);
        }
    }

// Problem #1
    function one() {
        for (let i = 0; i < 3; i++) {
          console.log("Hello, World!\n");
        }
    }
