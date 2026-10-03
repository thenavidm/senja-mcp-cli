#!/usr/bin/env node
import{StdioServerTransport}from'@modelcontextprotocol/sdk/server/stdio.js';import{buildServer,VERSION}from'./server.js';import{runCli,exitCodeFor}from'./cli.js';import{runDoctor}from'./doctor.js';import{basename}from'node:path';
const HELP=`Senja MCP and shared task CLI ${VERSION}
senja-mcp                         Local stdio MCP
senja-cli <command> --help         Actual shared arguments
senja-cli schema <command>         Actual JSON input schema
senja-cli doctor [--network]       Local settings / explicit one-item testimonial read
senja-cli login                   Private setup instructions only
SENJA_API_KEY / SENJA_TOKEN_FILE   One private Bearer API key source
SENJA_ACCOUNTS                    Named isolated project profiles
SENJA_DEFAULT_ACCOUNT             Exact profile label
SENJA_READ_ONLY=1                 Hide and directly refuse mutations/file writes
SENJA_ALLOW_DESTRUCTIVE=0          Refuse all confirmed mutations/file writes
SENJA_REQUEST_TIMEOUT_MS          Default30000; no retries
SENJA_MIN_REQUEST_INTERVAL_MS     Default250; local pacing, not provider quota
`;
async function main():Promise<void>{const args=process.argv.slice(2),command=args[0];if(['--version','-v'].includes(command??'')){console.log(VERSION);return;}if(['--help','-h','help'].includes(command??'')){process.stdout.write(HELP);return;}if(command==='login'){console.log('Get the intended project API key from Automate in https://app.senja.io. The current provider API docs apply to Free, Starter and Pro. Store exactly one Bearer key privately in SENJA_API_KEY or an absolute owner-only SENJA_TOKEN_FILE; never paste it into public configs. Named SENJA_ACCOUNTS profiles do not inherit global credentials. Only project Admin/Owner can regenerate a key, and dependent integrations must be updated. Official https://mcp.senja.io uses a separate connection and already supports invites. login prints instructions only.');return;}if(command==='doctor'){if(args.slice(1).some(a=>a!=='--network')){process.exitCode=2;console.error(JSON.stringify({error:'doctor accepts only --network'}));return;}process.exitCode=await runDoctor(args.includes('--network'));return;}if(args.length||basename(process.argv[1]??'').startsWith('senja-cli')){process.exitCode=await runCli(args);return;}const server=buildServer();await server.connect(new StdioServerTransport());for(const signal of ['SIGTERM','SIGINT'])process.on(signal,()=>void server.close().then(()=>process.exit(0)));}
main().catch(e=>{console.error(JSON.stringify({error:e.message}));process.exitCode=exitCodeFor(e.message);});
