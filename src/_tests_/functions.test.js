const {sum, sayHello} = require('../functions');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})

test('sum does not return NaN', () => {
    expect(sum(2, 2)).not.toBeNaN()
})

test('sayHello says hello', () => {
    expect(sayHello()).toBe('hello');
})

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
})

test('expect true to be truthy', () => {
    expect(true).toBeTruthy()
})

test('expect false to be falsy', () => {
    expect(false).not.toBeTruthy()
})

let names = ['John', 'Ariel', 'Zach'];

test('names contains Ariel', () => {
    expect(names).toContain('Ariel')
    expect(names).not.toContain('Matt')
})