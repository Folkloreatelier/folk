export const removeUndefined = obj => Object.keys(obj).reduce((values, key) => (
    typeof obj[key] !== 'undefined' ? {
        ...values,
        [key]: obj[key],
    } : values
), {});

const mergeWithoutUndefined = (target, ...args) => (
    Object.assign(target, ...args.map(arg => removeUndefined(arg)))
);

export default mergeWithoutUndefined;
