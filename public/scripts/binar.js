function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Binar {
  static populateCars = (cars) => {
    return cars.map((car) => {
      const isPositive = getRandomInt(0, 1) === 1;
      const timeAt = new Date();
      const mutator = getRandomInt(1000000, 100000000);
      const availableAt = new Date(
        timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
      );

      return {
        ...car,
        availableAt,
      };
    });
  };

  static async listCars(passengerSeats) {
    let cars;
    let cachedCarsString = localStorage.getItem("CARS");

    if (!!cachedCarsString) {
      const cacheCars = JSON.parse(cachedCarsString);
      cars = this.populateCars(cacheCars);
    } else {
      const response = await fetch(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      );
      const body = await response.json();
      cars = this.populateCars(body);

      localStorage.setItem("CARS", JSON.stringify(cars));
    }

    if (passengerSeats > 0) {
      cars = cars.filter((car) => car.capacity >= passengerSeats);
    }
    return cars;
  }
}

async function filteredCars() {
  let inputTotalofPassenger = document.getElementById("passengerSeats").value;
  let carContainerElement = document.getElementById("cars-container");
  carContainerElement.innerHTML = "";
  let filterCar = await Binar.listCars(inputTotalofPassenger);
  console.log(filterCar);
  if (filterCar.length < 1) {
    carContainerElement.innerHTML = `<div class="alert alert-danger alert-dismissible fade show d-flex" role="alert">
  <strong>There is no result</strong> 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
    return;
  }
  filterCar.forEach((car) => {
    let carObj = new Car(car);
    carContainerElement.innerHTML += carObj.render();
  });
  return;
}

function displayCars(cars) {
  let carsContainer = document.getElementById("cars-container");
  carsContainer.innerHTML = '';

    if (cars.length === 0) {
        carsContainer.innerHTML = '<div class="no-cars-message text-danger">No available car</div>';
        return;
    }

    cars.forEach(car => {
        let carObject = new Car(car);
        carsContainer.innerHTML += carObject.render();
    });
}


async function results(car){
  const data = await fetch(`http://localhost:3000/cars?manufacture=${car}`)
  const res = await data.json();
  return res;
}

async function listedCar() {
  const list = window.location.search;
  const urlCar = new URLSearchParams(list);
  const manufacture = urlCar.get( "manufacture" );
  if  (manufacture) {
    const carResults = await results(manufacture);
    displayCars(carResults.data);
}
}

listedCar();
