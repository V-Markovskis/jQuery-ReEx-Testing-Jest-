

//https://jestjs.io/docs/expect#tohavebeenlastcalledwitharg1-arg2-
export const invalidAlert = (name: string, attribute: string) => {
    return alert(`Invalid ${attribute}: ${name}`);
};