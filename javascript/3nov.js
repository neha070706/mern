// let a=20;
// let b=20;
// let c="20";
// console.log(a+b+c); // 4030no

// // console.log(a==b);
// // console.log(b==c);
// console.log(a===c);

//all the operators in js
// let a=10;
// let b=20;
//arithmetic operators
// console.log(a+b); //30
// console.log(a-b); //-10  
// console.log(a*b); //200
// console.log(b/a); //2
// console.log(b%a); //0
// console.log(++a); //11
// console.log(--b); //19
// console.log(a**2); //100
// console.log(b**3); //8000
// console.log(a++); //10
// console.log(a); //11
// console.log(b--); //20
// console.log(b); //19
//assignment operators
// a+=5; // a=a+5
// console.log(a); //15
// b-=5; // b=b-5
// console.log(b); //15
// a*=2; // a=a*2
// console.log(a); //20
// b/=2; // b=b/2
// console.log(b); //10
// a%=3; // a=a%3

// console.log(a); //2

//comparison operators
// console.log(a==b); //false
// console.log(a!=b); //true
// console.log(a>b); //false
// console.log(a<b); //true
// console.log(a>=b); //false
// console.log(a<=b); //true
//logical operators
// console.log(a>5 && b>15); //true
// console.log(a>15 || b>15); //true
// console.log(!(a>b)); //true
//bitwise operators
// console.log(a & b); //0
// console.log(a | b); //30
// console.log(a ^ b); //30
// console.log(~a); //-11
// console.log(a << 2); //40
// console.log(b >> 2); //5
//ternary operator
// let result = (a>b) ? "a is greater" : "b is greater";
// console.log(result); //b is greater
//typeof operator
// console.log(typeof a); //number
// console.log(typeof "hello"); //string
// console.log(typeof true); //boolean
// console.log(typeof {}); //object
// console.log(typeof undefined); //undefined
// console.log(typeof null); //object
// instanceof operator
// let arr = [1,2,3];
// console.log(arr instanceof Array); //true
// console.log(arr instanceof Object); //true
// console.log(a instanceof Number); //false
// console.log("hello" instanceof String); //false
// console.log(new String("hello") instanceof String); //true
//delete operator
// let obj = {name: "John", age: 30};
// delete obj.age;
// console.log(obj); //{name: "John"}
// void operator
// function test() {
//     return "Hello World";
// }
// console.log(void test()); //undefined
// console.log(test()); //Hello World
//comma operator
// let x = (a=5, b=10, a+b);
// console.log(x); //15
//spread operator
// let arr1 = [1,2,3];
// let arr2 = [...arr1,4,5,6];
// console.log(arr2); //[1,2,3,4,5,6]
// 
    //rest operator
    // function sum(...args) {
    //   let total = 0;
    //  for (let num of args) {
    //    total += num;
    // }
    //  return total;
    // }
    // console.log(sum(1,2,3,4,5)); //15
    // console.log(sum(10,20,30)); //60
    // console.log(sum()); //0
    // optional chaining operator
    // let person = {
    //  name: "Alice",
    //  
    address: {
        //    city: "Wonderland"
        // }
        
            // };
            // console.log(person.address?.city); //Wonderland
            // 
                
                // console.log(person.contact?.phone); //undefined
                // 
                    // nullish coalescing operator
                    // let val1 = null;
                    //  
                    // let val2 = val1 ?? "default value";
                    // console.log(val2); //default value
                    // 
                        // let val3 = 0;
                        // let val4 = val3 ?? 42;
                        // console.log(val4); //0
                        // exponentiation operator
                        // console.log(2 ** 3); //8
                        // console.log(5 ** 4); //625
                        // bigint operator
                        // let big1 = 9007199254740991n;
                        // let big2 = 12345678901234567890n;
                        // console.log(big1 + big2); //21352878155975558881n
                        //  
                        // console.log(big2 - big1); //3338479646493574899n
                        // console.log(big1 * 2n); //18014398509481982n
                        // console.log(big2 / 3n); //4115226300411522630n
                        // console.log(big2 % 7n); //4n
                        // console.log(big1 ** 2n); //81129638414606663681390495662081n
                        // console.log(big2 ** 3n); //1881676377434183981909562699945981901000n
                        // console.log(typeof big1); //bigint
                        // console.log(typeof big2); //bigint
                        // console.log(big1 > big2); //false
                        // console.log(big1 < big2); //true
                        //  
                        // console.log(big1 == big2); //false
                        // console.log(big1 != big2); //true
                        // 
                            // console.log(big1 >= 9007199254740991n); //true
                            // console.log(big2 <= 12345678901234567890n); //true
                            // console.log(big1 && big2); //12345678901234567890n
                            // console.log(big1 || big2); //9007199254740991n
                            // console.log(!big1); //false
                            // console.log(~big2); //-12345678901234567891n
                            // console.log(big1 << 2n); //36028797018963964n
                            // 
                            // console.log(big2 >> 3n); //1543209862654320986n
                            // console.log(big1 & big2); //9007199254740990n
                            // console.log(big1 | big2); //12345678901234567891n
                            // console.log(big1 ^ big2); //12345678901234567801n
                            // console.log(delete big1); //true
                            // console.log(void big2); //undefined
                            //  
                            // console.log((big1=10n, big2=20n, big1+big2)); //30n
                            // let bigArr1 = [1n,2n,3n];
                            // let bigArr2 = [...bigArr1,4n,5n,6n];
                            // console.log(bigArr2); //[1n,2n,3n,4n,5n,6n]
                            // function bigSum(...args) {
                            // let total = 0n;
                            // for (let num of args) {
                            // total += num;
                            // }
                            // return total;
                            // 
                                // console.log(bigSum(1n,2n,3n,4n,5n)); //15n
                                // console.log(bigSum(10n,20n,30n)); //60n
                                // console.log(bigSum()); //0n
                                // let bigPerson = {
                                // name: "Bob",
                                // address: {
                                // city: "Builderland"
                                // }
                                // };
                                // console.log(bigPerson.address?.city); //Builderland
                                // console.log(bigPerson.contact?.phone); //undefined
                                // let bigVal1 = null;
                                // let bigVal2 = bigVal1 ?? 42n;
                                // console.log(bigVal2); //42n
                                // let bigVal3 = 0n;
                                // let bigVal4 = bigVal3 ?? 9007199254740991n;
                                // console.log(bigVal4); //0n`
                            // }                        }
                            // }
                            // return total;
                            // }
                            // }

                            //


                           // once see the logical opertaor vid for better understanding
    