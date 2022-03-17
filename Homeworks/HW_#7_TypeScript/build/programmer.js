"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgrammerJS = void 0;
var skills_1 = require("./skills");
var Programmer = /** @class */ (function () {
    function Programmer() {
    }
    Programmer.prototype.introduceMyself = function () {
        console.log("Hello, I'm a programmer!");
    };
    ;
    return Programmer;
}());
var ProgrammerJS = /** @class */ (function (_super) {
    __extends(ProgrammerJS, _super);
    function ProgrammerJS(skills) {
        var _this = _super.call(this) || this;
        _this.skills = skills;
        return _this;
    }
    ProgrammerJS.prototype.showMySkills = function () {
        this.skills.forEach(function (skill) {
            if (skill instanceof skills_1.Skill) {
                console.log("I've been learning ".concat(skill.skillName, " for ").concat(skill.yearsOfExperience, " years and I ").concat(skill.skillIsMastered ? 'mastered it.' : 'keep it up!'));
            }
            else {
                console.log(skill);
            }
        });
    };
    ProgrammerJS.prototype.myProgramingLanguage = function () {
        console.log("My programing language is JavaScript!");
    };
    return ProgrammerJS;
}(Programmer));
exports.ProgrammerJS = ProgrammerJS;
