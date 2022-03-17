import {ProgrammerJS} from './programmer'
import {Skill} from "./skills";


let listOfSkills = [
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

let arrayOfSkills = []
listOfSkills.forEach(set => {
    arrayOfSkills.push(new Skill(set.name, set.experience, set.isMastered))
})

let arrayOfStrings = ['JS', 'TS', 'Node']

/////////////////////////////////////////////////

let programmerJS_SkillClass = new ProgrammerJS(arrayOfSkills)
programmerJS_SkillClass.showMySkills()








