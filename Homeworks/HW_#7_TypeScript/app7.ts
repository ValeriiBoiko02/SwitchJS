import {ProgrammerJS} from './programmer'
import {Skill} from "./skills";


let listOfProgrammers = [
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
]

let arrayOfSkills = listOfProgrammers.map(skillSet => {
    return new Skill(skillSet.name, skillSet.experience, skillSet.isMastered)
})

let programmerJS_SkillClass = new ProgrammerJS(arrayOfSkills)
programmerJS_SkillClass.showMySkills()
