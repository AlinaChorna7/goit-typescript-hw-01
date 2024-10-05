function showMessage (message: string):void {
     console.log(message);
}

function calc(num1: number, num2:number):number {
 return num1 + num2;
}

function customError():never {
 throw new Error('Error');
}

 // Використання функцій
 showMessage("Hello, world!"); 
 const result = calc(5, 10); 
 console.log(`The result of addition is: ${result}`);
 
 try {
     customError(); 
 } catch (error) {
     console.error(error);
 }
 