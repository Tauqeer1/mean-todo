export const successHandler = (res, data) => {
  res.status(201).json({
    success: true,
    data,
    error: null
  });
};

export const errorHandler400 = (res, error) => {
  res.status(400).json({
    success: false,
    data: null,
    error
  });
};

export const errorHandler401 = (res, error) => {
  res.status(401).json({
    success: false,
    data: null,
    error
  });
};

export const errorHandler403 = (res, error) => {
  res.status(403).json({
    success: false,
    data: null,
    error
  });
};

export const errorHandler404 = (res, error) => {
  res.status(404).json({
    success: false,
    data: null,
    error
  });
};

export const serverErrorHandler = (res, error) => {
  res.status(500).json(error);
};
