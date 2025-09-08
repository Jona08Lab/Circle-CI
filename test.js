// test.js
function suma(a, b) {
  return a + b;
}

// Test simple
if (suma(2, 3) === 5) {
  console.log("Test Passed ✅");
  process.exit(0); // 0 significa éxito
} else {
  console.log("Test Failed ❌");
  process.exit(1); // 1 significa error
}
