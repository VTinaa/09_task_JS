// 1. Напишіть функцію, яка приймає 2 числа і повертає -1, якщо перше менше, ніж друге; 1 - якщо перше більше, ніж друге; 0 - якщо числа рівні.

{
    let num1 = parseInt(prompt("Enter the first number:"));
    let num2 = parseInt(prompt("Enter the second number:"));

    let compareNumbers = (num1, num2) => {
        if (num1 < num2) {
            return -1;
        } else if (num1 > num2) {
            return 1;
        } else {
            return 0;
        }
    }

    console.log(compareNumbers(num1, num2));

    // console.log(compareNumbers(5, 6));
    // console.log(compareNumbers(23, 6));
    // console.log(compareNumbers(23, 23));
}

// 2. Напишіть функцію, яка вираховує факторіал переданого їй числа.

{
    let num = parseInt(prompt("Enter number"));
    let factorial = (num) =>{
        let result = 1;
        for(let i = 2; i <= num; i++) {
          result *= i;
        }
        return result;
      }

    console.log(factorial(num));
}

// 3. Напишіть функцію, яка приймає три окремі цифри і перетворює їх на одне число. Наприклад: цифри 1, 4, 9 перетворяться на число 149.

{
    let numeric = () => {
        let num1 = prompt("Enter the first number:");
        let num2 = prompt("Enter the second number:");
        let num3 = prompt("Enter the third number:");

        let combinedNumber = parseInt("" + num1 + num2 + num3);
        return combinedNumber;
    }

    console.log(numeric());
}

// 4. Напишіть функцію, яка приймає довжину та ширину прямокутника і обчислює його площу. Якщо у функцію передали 1 параметр, вона вираховує площу квадрата.

{
    let calculateArea = () =>{
        let length = prompt("Enter the length:");
        let width = prompt("Enter the width:");

        if (width == undefined) {
          return length * length;
        } else {
          return length * width;
        }
      }

      console.log(calculateArea());
}

// 5. Напишіть функцію, яка перевіряє, чи є передане їй число досконалим. Досконале число – це число, що дорівнює сумі всіх своїх власних дільників.

{
    let number = parseInt(prompt("Enter number: "));
    let perfectNumber = (number) => {
        let sum = 0;

        for (let i = 1; i < number; i++) {
            if (number % i === 0) {
                sum += i;
            }
        }

        if (sum === number) {
            return true;
        } else {
            return false;
        }
    }
    console.log(perfectNumber(number));
}