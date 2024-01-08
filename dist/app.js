"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const authentication_1 = require("./middleware/authentication");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(authentication_1.authenticateToken);
app.use('/api', userRoutes_1.default);
exports.default = app;
