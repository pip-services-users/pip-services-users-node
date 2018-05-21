"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class AccountsHttpServiceV1 extends pip_services_net_node_1.CommandableHttpService {
    constructor() {
        super('v1/accounts');
        this._dependencyResolver.put('controller', new pip_services_commons_node_1.Descriptor('pip-services-accounts', 'controller', 'default', '*', '1.0'));
    }
}
exports.AccountsHttpServiceV1 = AccountsHttpServiceV1;
//# sourceMappingURL=AccountsHttpServiceV1.js.map