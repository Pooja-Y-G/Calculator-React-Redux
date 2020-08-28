export const r1addition = (text) => {
  return {
    type: "ADD_ELEM",
    text,
  };
};

export const r1clear = () => ({ type: "CLEAR" });

export const r1equals = (value) => ({ type: "EQUAL", value });
