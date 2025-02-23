function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

throwError("Hata");


let something: void = null;
let nothing: never = null;