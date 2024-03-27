import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
    expect(service.add(1, 2)).toEqual(3);
  });

  it('should subtract two numbers', () => {
    expect(service.subtract(5, 3)).toEqual(2);
  });

  it('should multiply two numbers', () => {
    expect(service.multiply(2, 3)).toEqual(6);
  });

  it('should divide two numbers', () => {
    expect(service.divide(6, 3)).toEqual(2);
  });

  it('should throw error when dividing by zero', () => {
    expect(() => service.divide(6, 0)).toThrowError(
      'Division by zero is not allowed'
    );
  });

  it('should handle negative numbers in addition', () => {
    expect(service.add(-5, 3)).toEqual(-2);
  });

  it('should handle negative numbers in subtraction', () => {
    expect(service.subtract(5, -3)).toEqual(8);
  });

  it('should handle negative numbers in multiplication', () => {
    expect(service.multiply(-2, 3)).toEqual(-6);
  });

  it('should handle negative numbers in division', () => {
    expect(service.divide(6, -3)).toEqual(-2);
  });

  it('should handle decimal numbers in addition', () => {
    expect(service.add(0.1, 0.2)).toBeCloseTo(0.3, 10);
  });

  it('should handle decimal numbers in subtraction', () => {
    expect(service.subtract(0.3, 0.1)).toBeCloseTo(0.2, 10);
  });

  it('should handle decimal numbers in multiplication', () => {
    expect(service.multiply(0.1, 0.2)).toBeCloseTo(0.02, 10);
  });

  it('should handle decimal numbers in division', () => {
    expect(service.divide(0.6, 0.3)).toBeCloseTo(2, 10);
  });

  it('should handle large numbers in addition', () => {
    expect(service.add(Number.MAX_VALUE, 1)).toEqual(Number.MAX_VALUE);
  });

  it('should handle large numbers in subtraction', () => {
    expect(service.subtract(Number.MAX_VALUE, Number.MAX_VALUE)).toEqual(0);
  });

  it('should handle large numbers in multiplication', () => {
    expect(service.multiply(Number.MAX_VALUE, 2)).toEqual(Infinity);
  });

  it('should handle large numbers in division', () => {
    expect(service.divide(Number.MAX_VALUE, 0.5)).toEqual(Number.MAX_VALUE * 2);
  });
});
