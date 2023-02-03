"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    constructor(dados) {
        this.name = dados.name;
        this.duration = dados.duration;
        this.educator = dados.educator;
    }
    getName() {
        return this.name;
    }
    getDuration() {
        return this.duration;
    }
    getEducator() {
        return this.educator;
    }
    setEducator(educator) {
        this.educator = educator;
    }
    setName(name) {
        this.name = name;
    }
    setDuration(duration) {
        this.duration = duration;
    }
}
exports.default = CreateCourseService;
