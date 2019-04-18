import { ObjectSchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';

export class AccountV1Schema extends ObjectSchema {
    public constructor() {
        super();
        this.withOptionalProperty('id', TypeCode.String);
        this.withRequiredProperty('login', TypeCode.String);
        this.withRequiredProperty('name', TypeCode.String);
        this.withOptionalProperty('create_time', null); //TypeCode.DateTime);
        this.withOptionalProperty('deleted', TypeCode.Boolean);
        this.withOptionalProperty('active', TypeCode.Boolean);
        this.withOptionalProperty('about', TypeCode.String);
        this.withOptionalProperty('time_zone', TypeCode.String);
        this.withOptionalProperty('language', TypeCode.String);
        this.withOptionalProperty('theme', TypeCode.String);
        this.withOptionalProperty('custom_hdr', null);
        this.withOptionalProperty('custom_dat', null);
    }
}
