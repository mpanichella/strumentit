export class EncryptionFile {
    mime: string;
    data: string;

    constructor(mime:string,data: string) {
        this.data= data;
        this.mime= mime;
    }
}

export class EncryptionText {
    data: string;

    constructor(data: string) {
        this.data= data;
    }
}