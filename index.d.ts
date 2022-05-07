export default ENV;
declare class ENV {
    constructor(envPath: string);
    addENV(name: string, value: string): void;
    removeENV(name: string): void;
    editENV(name: string, value: string): void;
    resetENV(): void;
    #private;
}
//# sourceMappingURL=index.d.ts.map