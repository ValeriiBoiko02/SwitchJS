// export class Skill{
//     skillName:string;
//     yearsOfExperience: number;
//     skillIsMastered: boolean;
//
//     constructor(skill) {
//         this.skillName = skill.name;
//         this.yearsOfExperience = skill.experience;
//         this.skillIsMastered = skill.isMastered
//     }
// }
//
export class Skill {
    constructor(
        public skillName: string,
        public yearsOfExperience: number,
        public skillIsMastered: boolean
    ) {
    }
}
