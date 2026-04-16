const { findById, addCar, removeCar, listCars, updateCar } = require('../src/cars');

describe('Cars', () => {
  test('listCars deve retornar a lista de carros', () => {
    const result = listCars();
    expect(result.length).toBeGreaterThanOrEqual(3);
  });

  test('findById deve retornar o carro correto', () => {
    const car = findById(1);
    expect(car).toBeDefined();
    expect(car.model).toBe('Gol');
  });

  test('findById deve retornar undefined para id inexistente', () => {
    const car = findById(999);
    expect(car).toBeUndefined();
  });

  test('addCar deve adicionar um carro', () => {
    const newCar = { id: 4, model: 'Civic', brand: 'Honda', year: 2022 };
    const result = addCar(newCar);
    expect(result).toEqual(newCar);
    expect(findById(4)).toBeDefined();
  });

  test('updateCar deve atualizar um carro existente', () => {
    const updated = updateCar(1, { year: 2025 });
    expect(updated.year).toBe(2025);
  });

  test('updateCar deve retornar null para id inexistente', () => {
    const result = updateCar(999, { year: 2025 });
    expect(result).toBeNull();
  });

  test('removeCar deve remover e retornar o carro', () => {
    const removed = removeCar(4);
    expect(removed).toBeDefined();
    expect(removed.model).toBe('Civic');
  });

  test('removeCar deve retornar null para id inexistente', () => {
    const result = removeCar(999);
    expect(result).toBeNull();
  });
});