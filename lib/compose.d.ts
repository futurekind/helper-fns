export declare enum Dir {
    RTL = -1,
    LTR = 1
}
export declare const _compose: (dir: Dir) => (fns: Function[], data: object | any[]) => object | any[];
declare const _default: import("./utils/curry").CurriedFunction2<Function[], object | any[], object | any[]>;
export default _default;
