"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuDto = void 0;
const openapi = require("@nestjs/swagger");
class menuDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { menuitem: { required: true, type: () => String }, menuprice: { required: true, type: () => String }, storeid: { required: true, type: () => String }, topping: { required: true, type: () => String }, itemdescription: { required: true, type: () => String }, menuimage: { required: true, type: () => String } };
    }
}
exports.menuDto = menuDto;
//# sourceMappingURL=menu-dto.dto.js.map