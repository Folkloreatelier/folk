import * as types from '../types';

const normalizeKey = key => key.toLowerCase().replace(/[^a-z]+/gi, '');

const getType = type => {
    const typeKey = Object.keys(types).find(
        key => normalizeKey(key) === normalizeKey(type)
    );
    return types[typeKey] || null;
};

export default getType;
