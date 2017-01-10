export class MaskPart {
    constructor(public index: number,
                public length: number,
                public start: number,
                public end: number) {

    }
}

export class Mask {
    constructor(public parts: Array<MaskPart>,
                public input: string) {

    }
}

export class Restrict {

    public static NUMERIC: string = 'numeric';
    public static ALPHA_NUMERIC: string = 'alphaNumeric';
    public static ALPHA: string = 'alpha';
    public static NONE: string = 'none';

    public static ALL: Array<string> = [
        Restrict.NUMERIC,
        Restrict.ALPHA_NUMERIC,
        Restrict.ALPHA,
        Restrict.NONE
    ];

    public static getRegExp(id: string) {
        switch (id) {
            case Restrict.NUMERIC:
                return RestrictRegExp.NUMERIC;
            case Restrict.ALPHA_NUMERIC:
                return RestrictRegExp.ALPHA_NUMERIC;
            case Restrict.ALPHA:
                return RestrictRegExp.ALPHA;
        }
        return null;
    }
}

export class RestrictRegExp {

    public static NUMERIC: RegExp = /^([0-9])+$/;
    public static ALPHA: RegExp = /^([A-Za-z])+$/;
    public static ALPHA_NUMERIC: RegExp = /^([A-Za-z0-9])+$/;

}
