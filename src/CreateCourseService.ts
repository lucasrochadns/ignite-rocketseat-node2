
interface Course{
    name: string;
    duration: number;
    educator: string;
}

export default class CreateCourseService
{
    private name: string;
    private duration: number;
    private educator: string;

    constructor(dados: Course) {
       this.name = dados.name;
       this.duration = dados.duration;
       this.educator = dados.educator;
    }
     
    getName(): string {
        return this.name;
    }

    getDuration(): number {
        return this.duration;
    }
    getEducator(): string {
        return this.educator;
    }
    setEducator(educator: string) 
    {
        this.educator = educator;
    }
    setName(name: string) 
    {
        this.name = name;
    }   
    setDuration(duration: number) 
    {
        this.duration = duration;
    }
   
}

