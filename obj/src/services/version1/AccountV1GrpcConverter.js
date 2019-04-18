"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let messages = require('../../../../src/protos/accounts_v1_pb');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
class AccountV1GrpcConverter {
    static fromError(err) {
        if (err == null)
            return null;
        let description = pip_services_commons_node_1.ErrorDescriptionFactory.create(err);
        let obj = new messages.ErrorDescription();
        obj.getType(description.type);
        obj.setCategory(description.category);
        obj.setCode(description.code);
        obj.setCorrelationId(description.correlation_id);
        obj.setStatus(description.status);
        obj.setMessage(description.message);
        obj.setCause(description.cause);
        obj.setStackTrace(description.stack_trace);
        AccountV1GrpcConverter.setMap(obj.getDetailsMap(), description.details);
        return obj;
    }
    static toError(obj) {
        if (obj == null || (obj.getCategory() == "" && obj.getMessage() == ""))
            return null;
        let description = {
            type: obj.getType(),
            category: obj.getCategory(),
            code: obj.getCode(),
            correlation_id: obj.getCorrelationId(),
            status: obj.getStatus(),
            message: obj.getMessage(),
            cause: obj.getCause(),
            stack_trace: obj.getStackTrace(),
            details: AccountV1GrpcConverter.getMap(obj.getDetailsMap())
        };
        return pip_services_commons_node_2.ApplicationExceptionFactory.create(description);
    }
    static setMap(map, values) {
        if (values == null)
            return;
        for (let propName in values) {
            if (values.hasOwnProperty(propName))
                map[propName] = values[propName];
        }
    }
    static getMap(map) {
        let values = {};
        AccountV1GrpcConverter.setMap(values, map);
        return values;
    }
    static toJson(value) {
        if (value == null || value == "")
            return null;
        return JSON.stringify(value);
    }
    static fromJson(value) {
        if (value == null || value == "")
            return null;
        return JSON.parse(value);
    }
    static fromAccount(account) {
        if (account == null)
            return null;
        let obj = new messages.Account();
        obj.setId(account.id);
        obj.setLogin(account.login);
        obj.setName(account.name);
        obj.setAbout(account.about);
        obj.setCreateTime(pip_services3_commons_node_1.StringConverter.toString(account.create_time));
        obj.setDeleted(account.deleted);
        obj.setActive(account.active);
        obj.setTimeZone(account.timezone);
        obj.setLanguage(account.language);
        obj.setTheme(account.theme);
        obj.setCustomHdr(AccountV1GrpcConverter.toJson(account.custom_hdr));
        obj.setCustomDat(AccountV1GrpcConverter.toJson(account.custom_dat));
        return obj;
    }
    static toAccount(obj) {
        let account = {
            id: obj.getId(),
            login: obj.getLogin(),
            name: obj.getName(),
            about: obj.getAbout(),
            create_time: pip_services3_commons_node_2.DateTimeConverter.toDateTime(obj.getCreateTime()),
            deleted: obj.getDeleted(),
            active: obj.getActive(),
            timezone: obj.getTimeZone(),
            language: obj.getLanguage(),
            theme: obj.getTheme(),
            custom_hdr: AccountV1GrpcConverter.fromJson(obj.getCustomHdr()),
            custom_dat: AccountV1GrpcConverter.fromJson(obj.getCustomDat())
        };
        return account;
    }
    static fromAccountPage(page) {
        if (page == null)
            return null;
        let obj = new messages.AccountPage();
        obj.setTotal(page.total);
        let data = _.map(page.data, AccountV1GrpcConverter.fromAccount);
        obj.setDataList(data);
        return obj;
    }
    static toAccountPage(obj) {
        if (obj == null)
            return null;
        let data = _.map(obj.getDataList(), AccountV1GrpcConverter.toAccount);
        let page = {
            total: obj.getTotal(),
            data: data
        };
        return page;
    }
}
exports.AccountV1GrpcConverter = AccountV1GrpcConverter;
//# sourceMappingURL=AccountV1GrpcConverter.js.map