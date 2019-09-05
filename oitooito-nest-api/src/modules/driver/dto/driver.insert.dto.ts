export class DriverInsertDto {
    public name: string;
    public licenseType: string;
    public email?: string;

    public constructor(name:string, licenseType: string, email?: string) {
        this.name = name;
        this.licenseType = licenseType;
        this.email = email;
    }
}