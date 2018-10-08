const isObj = (maybeObj: unknown): maybeObj is object =>
    typeof maybeObj === 'object' && maybeObj !== null;

export default isObj;
