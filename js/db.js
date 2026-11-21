import{createClient}from"https://esm.sh/@supabase/supabase-js@2.57.4";
export const supabase=createClient("https://yhkdbatgiwefaylwfuvc.supabase.co","sb_publishable_uZolkpgHlAz_V6Dqxp5ibA_PvYTWjVb");
export const money=n=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(Number(n||0));
export const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
export async function user(){return(await supabase.auth.getUser()).data.user}
export async function owner(id){if(!id)return false;const r=await supabase.from("profiles").select("is_owner").eq("id",id).maybeSingle();return r.data?.is_owner===true}
export function toast(s){let e=document.querySelector("#toast");if(!e){e=document.createElement("div");e.id="toast";e.className="toast";document.body.append(e)}e.textContent=s;setTimeout(()=>e.remove(),3000)}
export const cartKey="ssm_cart";export const cart=()=>JSON.parse(localStorage.getItem(cartKey)||"[]");export function saveCart(v){localStorage.setItem(cartKey,JSON.stringify(v));const n=document.querySelector("#bag-count");if(n)n.textContent=v.reduce((a,x)=>a+x.quantity,0)}
