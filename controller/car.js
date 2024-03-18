const carUsecase = require("../usecase/car");

exports.getCars = (req, res) => {
  const { manufacture, type, rentPerDay, description, capacity, transmission, year } = req.query;

  // call the usecase
  const data = carUsecase.getCars(manufacture, type, rentPerDay, description, capacity, transmission, year);

  const response = {
    data,
    message: null,
  };

  res.status(200).json(response);
};

exports.messageCars = (req, res) => {

  const response = {
    message: "ping succesfully",
  };

  res.status(200).json(response);
};

exports.getCar = (req, res) => {
  const { id } = req.params;

  const data = carUsecase.getCar(id);
  if (!data) {
    return res.status(404).json({
      data: null,
      message: `Student with id ${id} is not found!`,
    });
  }

  const response = {
    data: data,
    message: null,
  };

  res.status(200).json(response);
};


exports.addCars = (req, res) => {
  const { manufacture, type, rentPerDay, description, capacity, transmission, year} = req.body;

  if (!manufacture || manufacture == "") {
    return res.status(400).json({
      data: null,
      message: "manufacture must be filled!",
    });
  }
  if (!type || type == "") {
    return res.status(400).json({
      data: null,
      message: "type must be filled!",
    });
  }if (!rentPerDay || rentPerDay == "") {
    return res.status(400).json({
      data: null,
      message: "rentPerDay must be filled!",
    });
  }if (!description || description == "") {
    return res.status(400).json({
      data: null,
      message: "description must be filled!",
    });
}
    if (!capacity || capacity  == "") {
      return res.status(400).json({
        data: null,
        message: "capacity must be filled!",
      });
    }
    if (!transmission || transmission == "") {
      return res.status(400).json({
        data: null,
        message: "transmission must be filled!",
      });
    }
    if (!year || year == "") {
      return res.status(400).json({
        data: null,
        message: "year must be filled!",
      });
    }


  const data = carUsecase.addCars(req.body);

  res.status(201).json({
    data,
    message: null,
  });
};

exports.putCar = (req, res) => {
  // validate the request from user
  const { manufacture, type, rentPerDay, description, capacity, transmission, year } = req.body;
   if (!manufacture || manufacture == "") {
     return res.status(400).json({
       data: null,
       message: "manufacture must be filled!",
     });
   }
   if (!type || type == "") {
     return res.status(400).json({
       data: null,
       message: "type must be filled!",
     });
   }
   if (!rentPerDay || rentPerDay == "") {
     return res.status(400).json({
       data: null,
       message: "rentPerDay must be filled!",
     });
   }
   if (!description || description == "") {
     return res.status(400).json({
       data: null,
       message: "description must be filled!",
     });
   }
   if (!capacity || capacity == "") {
     return res.status(400).json({
       data: null,
       message: "capacity must be filled!",
     });
   }
   if (!transmission || transmission == "") {
     return res.status(400).json({
       data: null,
       message: "transmission must be filled!",
     });
   }
   if (!year || year == "") {
     return res.status(400).json({
       data: null,
       message: "year must be filled!",
     });
   }

 
  const data = carUsecase.putCar(req);

  res.status(200).json({
    data,
    message: null,
  });
};

exports.delCar = (req, res) => {
  const data = carUsecase.delCar(req);
  // Response
  res.status(200).json({
    message: "Success",
  });
};



