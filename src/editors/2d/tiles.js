export const colors=['#53834b','#a6bd65','#b99a68','#557fa5','#777d87','#554b40','#b4a5a0','#c5d9e6'];
export function layer(name='Terreno'){return {id:crypto.randomUUID(),name,visible:true,locked:false,opacity:1,tiles:{}}}
export function paint(l,x,y,value){if(l.locked)return;const k=`${x},${y}`;if(value===null)delete l.tiles[k];else l.tiles[k]=value;}
export function line(a,b){let x=a.x,y=a.y;const dx=Math.abs(b.x-x),dy=-Math.abs(b.y-y),sx=x<b.x?1:-1,sy=y<b.y?1:-1;let err=dx+dy;const out=[];while(true){out.push({x,y});if(x===b.x&&y===b.y)break;const e=2*err;if(e>=dy){err+=dy;x+=sx}if(e<=dx){err+=dx;y+=sy}}return out;}
