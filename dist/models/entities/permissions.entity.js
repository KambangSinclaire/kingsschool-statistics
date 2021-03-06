"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permissions = void 0;
const typeorm_1 = require("typeorm");
let Permissions = class Permissions {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Permissions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Permissions.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        name: 'created_at',
        comment: 'creation time',
    }),
    __metadata("design:type", Date)
], Permissions.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        name: 'updated_at',
        comment: 'last update time',
    }),
    __metadata("design:type", Date)
], Permissions.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        type: 'timestamp',
        name: 'delete_at',
        comment: 'Delete',
    }),
    __metadata("design:type", Date)
], Permissions.prototype, "deleteAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String, default: "" }),
    __metadata("design:type", String)
], Permissions.prototype, "description", void 0);
Permissions = __decorate([
    (0, typeorm_1.Entity)()
], Permissions);
exports.Permissions = Permissions;
//# sourceMappingURL=permissions.entity.js.map