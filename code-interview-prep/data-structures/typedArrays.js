/*
Create a buffer that is 64-bytes, and then create a Int32Array typed,
with a vier called i32View
*/
let byteSize = 64; // 64 bytes
let buffer = new ArrayBuffer(byteSize);
let i32View = new Int32Array(buffer);

console.log(i32View); // Returns a 16x1 array of [0, 0, ...]
// The element size in Int32Array is 4 bytes so there are 16 elements = 64bytes / 4