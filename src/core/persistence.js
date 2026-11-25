import {validateProject} from '../formats/projectFormat.js';
const KEY='wmk-map-autosave-v1';
export function autosave(project){localStorage.setItem(KEY,JSON.stringify({date:new Date().toISOString(),project}));}
export function recover(){const raw=localStorage.getItem(KEY);if(!raw)throw Error('Nenhum autosave disponível.');return validateProject(JSON.parse(raw).project);}
export async function readProject(file){if(file.size>20*1024*1024)throw Error('Arquivo acima de 20 MB.');return validateProject(JSON.parse(await file.text()));}
export async function saveProject(project){const text=JSON.stringify(project,null,2);const name=project.name.replace(/[^\p{L}\p{N}_-]/gu,'_')+'.project.json';if(window.showSaveFilePicker){const handle=await window.showSaveFilePicker({suggestedName:name,types:[{description:'Projeto JSON',accept:{'application/json':['.json']}}]});const writer=await handle.createWritable();await writer.write(text);await writer.close();return true;}const url=URL.createObjectURL(new Blob([text],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);return false;}
