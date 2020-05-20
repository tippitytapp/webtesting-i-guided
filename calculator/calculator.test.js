const {add, sub, multiply, divide} = require('./calculator.js');


describe('calculator', () => {
    describe('add()', () => {
        it('should add two arguments', () => {
            expect(add(2,2)).toBe(4);
            expect(add(0,0)).toBe(0);
            expect(add(-1,0)).toBe(-1);
            expect(add(-1,1)).toBe(0);
        } )
        it('should add three arguments', () => {
            expect(add(2, 2, 1)).toBe(5)
        })
        it('should return the value with only one value is given', function() {
            expect(add(1)).toBe(1)
            expect(add(undefined, 2)).toBe(2)
        })
        it('should return 0 when no values given',() => {
            expect(add()).toBe(0)
        })

        it('if im given not a number', () => {
            expect(add('2', 3, 1)).not.toBe(6) 
            expect(add(2, {}, 1)).not.toBe()
            expect(add(2, 3, [])).not.toBe()
        }) 

    })
    describe('sub()', () => {
        it('should subtract two numbers', () => {
            expect(sub(10, 7)).toBe(3) 
        })
        it('should subtract three numbers', () => {
            expect(sub(10, 7, 1)).toBe(2)
        })
    })
    describe('multiply()', () => {
        it('should multipply two numbers', () => {
            expect(multiply(10, 7)).toBe(70)
        })
        it('should multiply three numbers', () => {
            expect(multiply(2, 2, 2)).toBe(8)
        })
    })
    describe('divide()', () => {
        it('should divide two numbers', () => {
            expect(divide(10, 5)).toBe(2)
        })
    })
})