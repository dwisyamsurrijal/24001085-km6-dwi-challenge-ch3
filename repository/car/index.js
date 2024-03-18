const cars = require("../../data/cars.json");

exports.getCars = (
  manufacture,
  type,
  rentPerDay,
  description,
  capacity,
  transmission,
  year
) => {
  let data = cars.map((car) => car);

  data = data.filter((car) => {
    let filteredStatus = true;
    if (manufacture) {
      filteredStatus =
        filteredStatus &&
        car.manufacture.toLowerCase().includes(manufacture?.toLowerCase());
    }
    if (type) {
      filteredStatus =
        filteredStatus && car.type.toLowerCase().includes(type?.toLowerCase());
    }
    if (rentPerDay) {
      filteredStatus = filteredStatus && car.rentPerDay == rentPerDay;
    }
    if (description) {
      filteredStatus =
        filteredStatus &&
        car.description.toLowerCase().includes(description?.toLowerCase());
    }
    if (capacity) {
      filteredStatus = filteredStatus && car.capacity == capacity;
    }
    if (transmission) {
      filteredStatus =
        filteredStatus &&
        car.transmission.toLowerCase().includes(transmission?.toLowerCase());
    }
    if (year) {
      filteredStatus = filteredStatus && car.year == year;
    }

    return filteredStatus;
  });

  return data;
};

exports.getCar = (id) => {
  let data = cars.map((car) => car);

  data = data.filter((car) => car.id == id);
  if (data.length == 0) {
    return null;
  }

  return data[0];
};

exports.addCars = (payload) => {
  const lastCar = cars[cars.length - 1];
  payload = {
    id: lastCar.id + 1,
    ...payload,
  };
  cars.push(payload);

  return payload;
};

exports.putCar = (editor) => {
  const id = editor?.params?.id;
  const updatedCar = {
    id: id,
    ...editor.body,
  };

  // Update the data by id
  cars.map((car, index) => {
    if (car?.id == id) {
      cars[index] = updatedCar;
    }
  });

  return updatedCar;
};

exports.delCar = (del) => {
  const id = del?.params?.id;

  // Mini Challenge: Delete here, you can do with filter or for or another method
  index = cars.findIndex((car) => car.id === id);
  cars.splice(index, 1);

  return del;
};
