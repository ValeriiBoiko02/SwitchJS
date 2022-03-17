import {Skill} from "./skills";

abstract class Programmer {
    introduceMyself(): void {
        console.log("Hello, I'm a programmer!")
    };

    abstract myProgramingLanguage(): void;
}

interface IProgrammerJS {
    javaScriptKnowledge: boolean;
    typeScriptKnowledge: boolean;

}

export class ProgrammerJS<T> extends Programmer implements IProgrammerJS {
    javaScriptKnowledge: true;
    typeScriptKnowledge: true;


    constructor(public skills: T[]) {
        super();
    }

    showMySkills() {
        this.skills.forEach(skill => {
            if (skill instanceof Skill) {
                console.log(
                    `I've been learning ${skill.skillName} for ${skill.yearsOfExperience} years and I ${skill.skillIsMastered ? 'mastered it.' : 'keep it up!'}`
                )
            } else {
                console.log(skill)
            }
        })
    }

    myProgramingLanguage() {
        console.log("My programing language is JavaScript!")
    }
}