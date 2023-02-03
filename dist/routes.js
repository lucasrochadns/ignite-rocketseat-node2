"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function CreateCourse(request, response) {
    const objeto = { educator: 'LUCAS ROCHA DOS SANTOS', name: 'NodeJS', duration: 6 };
    const courseCreated = new CreateCourseService_1.default(objeto);
    const obj = JSON.parse(JSON.stringify(courseCreated));
    return response.status(200).json(obj);
}
exports.default = CreateCourse;
