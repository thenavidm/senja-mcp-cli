export type Account={name:string;apiToken:string;tokenFile:string};
export type Config={accounts:Account[];defaultAccount:string;readOnly:boolean;allowDestructive:boolean;auditPath:string;timeoutMs:number;minIntervalMs:number};
function integer(v:string|undefined,fallback:number,min:number,max:number){const n=v?Number(v):fallback;if(!Number.isInteger(n)||n<min||n>max)throw Error('Invalid request timeout or pacing settings.');return n;}
export function loadConfig(env:NodeJS.ProcessEnv=process.env):Config{
 let entries:Record<string,unknown>[]=[];
 if(env.SENJA_ACCOUNTS){try{const v=JSON.parse(env.SENJA_ACCOUNTS);if(!Array.isArray(v))throw Error();entries=v;}catch{throw Error('SENJA_ACCOUNTS must be a private JSON array of named account profiles.');}}
 else if(env.SENJA_API_KEY||env.SENJA_TOKEN_FILE)entries=[{name:'default',api_key:env.SENJA_API_KEY,token_file:env.SENJA_TOKEN_FILE}];
 const accounts=entries.map(x=>{if(!x||typeof x!=='object'||typeof x.name!=='string'||!x.name.trim())throw Error('Every Senja profile requires a nonempty name.');for(const k of ['api_key','token_file'])if(x[k]!==undefined&&(typeof x[k]!=='string'||/[\r\n]/.test(x[k]as string)))throw Error('Private Senja profile settings must be strings without line breaks.');if(x.api_key&&x.token_file)throw Error('Select one private credential source per Senja profile.');if(Object.keys(x).some(k=>!['name','api_key','token_file'].includes(k)))throw Error('Unsupported private Senja profile setting.');return{name:x.name.trim(),apiToken:String(x.api_key??''),tokenFile:String(x.token_file??'')};});
 if(new Set(accounts.map(a=>a.name)).size!==accounts.length)throw Error('Senja profile names must be unique.');
 const defaultAccount=env.SENJA_DEFAULT_ACCOUNT??accounts[0]?.name??'';if(defaultAccount&&!accounts.some(a=>a.name===defaultAccount))throw Error('Unknown SENJA_DEFAULT_ACCOUNT.');
 return{accounts,defaultAccount,readOnly:/^(1|true)$/i.test(env.SENJA_READ_ONLY??''),allowDestructive:!/^(0|false)$/i.test(env.SENJA_ALLOW_DESTRUCTIVE??''),auditPath:env.SENJA_AUDIT_LOG??'',timeoutMs:integer(env.SENJA_REQUEST_TIMEOUT_MS,30000,100,300000),minIntervalMs:integer(env.SENJA_MIN_REQUEST_INTERVAL_MS,250,0,10000)};
}
export function selectAccount(c:Config,hint?:string):Account{const a=c.accounts.find(a=>a.name===(hint??c.defaultAccount));if(!a)throw Error(c.accounts.length?'Unknown profile; run list_accounts and use its exact label.':'No credentials configured. Set SENJA_API_KEY or SENJA_TOKEN_FILE privately; run senja-cli login.');return a;}
