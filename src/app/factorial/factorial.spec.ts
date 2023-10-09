import { factorial } from './factorial';
//this one is gonna be successfull
describe('factorial function', () => {
    it('Should return 0 if x is negative', () => {
        expect(factorial(-1)).toBe(0);
    });
    
    it('Should return 1 if x is 0', () => {
        expect(factorial(0)).toBe(1);
    });
    
    it('Should return 2 if x is 2', () => {
        expect(factorial(2)).toBe(2);
    });
    
    it('Should return 6 if x is 3', () => {
        expect(factorial(3)).toBe(6);
    });
    
    it('Should return 24 if x is 4', () => {
        expect(factorial(4)).toBe(24);
    });
    
    it('Should return 120 if x is 5', () => {
        expect(factorial(5)).toBe(120);
    });
    
    it('Should return 0 if x > 15', () => {
        expect(factorial(16)).toBe(0);
    });
});


/*
//this one its gonna be fail
describe('factorial function', () => {
    it('Should return 0 if x is negative', () => {
        expect(factorial(-1)).toBe(0);
    });
    
    it('Should return 1 if x is 0', () => {
        expect(factorial(0)).toBe(1);
    });
    
    it('Should return 2 if x is 2', () => {
        expect(factorial(2)).toBe(2);
    });
    
    it('Should return 6 if x is 3', () => {
        expect(factorial(3)).toBe(7);  // Modificado para hacer que la prueba falle
    });
    
    it('Should return 24 if x is 4', () => {
        expect(factorial(4)).toBe(24);
    });
    
    it('Should return 120 if x is 5', () => {
        expect(factorial(5)).toBe(120);
    });
    
    it('Should return 0 if x > 15', () => {
        expect(factorial(16)).toBe(0);
    });
});*/