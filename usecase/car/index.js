const carRepo = require("../../repository/car");

exports.getCars = (manufacture, type, rentPerDay, description, capacity, transmission, year) => {
  const data = carRepo.getCars(manufacture, type, rentPerDay, description, capacity, transmission, year);
  return data;
};

exports.getCar = (id) => {
  const data = carRepo.getCar(id);
  return data;
};

exports.addCars = (payload) => {
  const data = carRepo.addCars(payload);
  return data;
};

exports.putCar = (editor) => {
  const data = carRepo.putCar(editor);
  return data;
};

exports.delCar = (del) => {
  const data = carRepo.delCar(del);
  return data;
};