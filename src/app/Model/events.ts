export class events{
    filter(arg0: (task: { taskName: string; }) => boolean): any[] {
      throw new Error('Method not implemented.');
    }
    id:number|undefined;
    taskName:string|undefined;
    deadline:string|undefined;
    status:string|undefined;
    comment:string|undefined
}