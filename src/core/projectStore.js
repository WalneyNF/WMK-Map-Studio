import {validateProject} from '../formats/projectFormat.js';
export class ProjectStore {
 #data; #past=[]; #future=[]; #saved; #listeners=new Set();
 constructor(project){this.replace(project);}
 get data(){return structuredClone(this.#data)} get dirty(){return JSON.stringify(this.#data)!==this.#saved} get canUndo(){return this.#past.length>0} get canRedo(){return this.#future.length>0}
 subscribe(fn){this.#listeners.add(fn);return ()=>this.#listeners.delete(fn)}
 emit(){for(const fn of this.#listeners)fn()}
 replace(project,{dirty=false}={}){this.#data=structuredClone(validateProject(project));this.#past=[];this.#future=[];this.#saved=dirty?null:JSON.stringify(this.#data);this.emit()}
 change(fn){const next=this.data;fn(next);validateProject(next);if(JSON.stringify(next)===JSON.stringify(this.#data))return;this.#past.push(this.#data);if(this.#past.length>100)this.#past.shift();this.#data=next;this.#future=[];this.emit()}
 undo(){if(!this.canUndo)return;this.#future.push(this.#data);this.#data=this.#past.pop();this.emit()}
 redo(){if(!this.canRedo)return;this.#past.push(this.#data);this.#data=this.#future.pop();this.emit()}
 markSaved(){this.#saved=JSON.stringify(this.#data);this.emit()}
}
