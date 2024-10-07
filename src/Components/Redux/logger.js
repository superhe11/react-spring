export const loggerMiddleware = ({ getState }) => (next) => (action) => {
    console.log('Dispatching action:', action);
    const result = next(action);
    console.log('Next state:', getState()); 
    return result; 
};
