const sum = require('../sum'); // Arrange

test('adds 1 + 2 to equal 3', () => {
  // Act
  const result = sum(1, 2);
  
  // Assertefz
  expect(result).toBe(3);
});
