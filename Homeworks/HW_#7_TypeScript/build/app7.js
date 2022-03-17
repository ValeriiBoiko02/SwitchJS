"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var programmer_1 = require("./programmer");
var skills_1 = require("./skills");
var listOfProgrammers = [
    {
        name: 'TypeScript',
        experience: 2,
        isMastered: true
    },
    {
        name: 'React',
        experience: 1,
        isMastered: false
    },
    {
        name: 'jQuery',
        experience: 5,
        isMastered: true
    }
];
var arrayOfSkills = listOfProgrammers.map(function (skillSet) {
    new skills_1.Skill(skillSet.name, skillSet.experience, skillSet.isMastered);
});
var programmerJS_SkillClass = new programmer_1.ProgrammerJS(arrayOfSkills);
programmerJS_SkillClass.showMySkills();
