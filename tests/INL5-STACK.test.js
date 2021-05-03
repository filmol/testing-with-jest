const stack = require('../src/stack');

test('peek on stack with two or more elements removes the top element', () => {
    stack.push(5);
    stack.push("hej");
    stack.push(12);
    expect(stack.pop()).toBe(12);
});
