import { JasmineIntroService } from './jasmine-intro.service';

describe('JasmineIntroService', () => {
  let service: JasmineIntroService;
  beforeAll(() => {
    console.log('beforeAll');
    service = new JasmineIntroService();
  });

  beforeEach(() => {
    console.log('beforeEach');
  });

  it('should add two numbers', () => {
    const result = service.addNumber(1, 2);

    expect(result).toEqual(3);
  });

  it('should subtract two numbers', () => {
    const result = service.subtractNumber(1, 2);

    expect(result).toEqual(-1);
  });

  it('should multiply two numbers', () => {
    const result = service.multiplyNumber(1, 2);

    expect(result).toEqual(2);
  });

  it('should division two numbers', () => {
    const result = service.divisionNumber(2, 1);

    expect(result).toEqual(2);
  });

  afterEach(() => {
    console.log('afterEach');
  });

  afterAll(() => {
    console.log('afterAll');
  });
});
