export const handleErrorMsg = error => {
  if (typeof error === 'object' && error.message) {
    return error.message;
  }

  return error || 'Network Error';
};

export const isArrayEmpty = arr => !arr || arr.length === 0;

export const updateObject = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties,
});
