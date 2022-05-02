/* eslint-disable @typescript-eslint/no-empty-function */
export class CoursesService {
    constructor() { }

    public getCourses(courses: any) {
        const sortedArray: any = [];
        courses.forEach((element: any) => {
            const desiredIndex = sortedArray.indexOf(element.desiredCourse);
            const requiredIndex = sortedArray.indexOf(element.requiredCourse);
            if(desiredIndex >= 0 && requiredIndex >= 0){
                if(requiredIndex >  desiredIndex){
                    const requiredOfRequiredString = courses.find((course: any) => course.desiredCourse === element.requiredCourse).requiredCourse;
                    const requiredOfRequiredIndex = sortedArray.indexOf(requiredOfRequiredString);
                    if(requiredOfRequiredIndex >= 0){
                        sortedArray.splice(requiredIndex, 1);
                        sortedArray.splice(requiredOfRequiredIndex, 1);
                        sortedArray.splice(desiredIndex, 0, requiredOfRequiredString)
                        sortedArray.splice(desiredIndex + 1, 0, element.requiredCourse)
                    }else {
                        sortedArray.splice(requiredIndex, 1);
                        sortedArray.splice(desiredIndex, 0, element.requiredCourse)
                    }
                }
            }else if(desiredIndex >= 0){
                if(element.requiredCourse){
                    sortedArray.splice(desiredIndex, 0, element.requiredCourse);
                }
            }else if(requiredIndex >= 0){
                sortedArray.splice(requiredIndex + 1, 0, element.desiredCourse);
            } else {
                sortedArray.push(element.requiredCourse)
                sortedArray.push(element.desiredCourse)
            }
        });
        return sortedArray;
    }
}