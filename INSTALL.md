# Install Senja MCP Server & CLI

One package has 12 shared tools, CLI and local stdio MCP binaries, and a released desktop archive. Node 22+ is required.

## Requirements

Install [Node](https://nodejs.org/en/download), then check node --version and npm --version in the runtime your client uses. Windows users may need npm.cmd if PowerShell policy blocks npm.ps1. No sudo or weakening execution policy is required. GUI apps, containers and remote runtimes need their own private settings and readable files.

## CLI

~~~bash
npm install -g @thenavidm/senja-mcp-cli@latest
senja-cli --version
senja-cli tools
senja-cli list-testimonials --help
senja-cli schema list-testimonials
~~~

A temporary alternative is npx -y --package @thenavidm/senja-mcp-cli@latest senja-cli tools. Make the shipped SKILL.md available in your agent's supported private skill location; npm does not register skills automatically.

## Private project setup

### Choose the intended project and private API key

1. Sign into [Senja](https://app.senja.io) and select the project whose testimonials you intend to use. Confirm the project before copying any credential. A key is a private project connection, not a general public widget ID.
2. Open **Automate** and copy that project's API key into a private runtime setting. Current [REST API documentation](https://support.senja.io/rest-api-wbnz4) covers Free, Starter and Pro. Native plan features and account policies remain separate; the wrapper does not bypass them.
3. Configure exactly one of **SENJA_API_KEY** or **SENJA_TOKEN_FILE**. The latter is an absolute, regular, non-symlink, token-only file outside repositories, at most 64 KiB. The client sends Authorization: Bearer; do not prefix the setting with Bearer or use your login password.
4. On macOS/Linux restrict the file to your owner with mode 0600 and its parent directory to your owner. On Windows restrict file and parent-directory ACLs separately. POSIX modes do not establish Windows privacy. Each server runtime must be able to read its own file; a GUI, Docker or remote host does not inherit a different terminal's environment automatically.
5. Run **senja-cli doctor** for local configuration. When you deliberately want an authenticated read, run **doctor --network**: it requests GET /testimonials?limit=1 and prints count/verification metadata, not customer records. This proves one project read, not ownership, permission for every endpoint, successful email delivery or an approved mutation.

The package does not load .env files, import browser cookies, create keys, connect OAuth or rotate credentials. login prints these setup instructions only. Keep resolved secrets out of code, screenshots, public issues, version control and AI prompts.

### Project profiles and revocation

SENJA_ACCOUNTS is a private JSON array of unique {name,api_key,token_file} profiles. Use one credential method per profile. SENJA_DEFAULT_ACCOUNT selects the default label and --account selects an exact label. An incomplete named profile never inherits a global key, another project or an official hosted session after a missing credential or 401/403.

list_accounts returns labels/default/auth/source only, without keys, token paths, native project identity or network traffic. Token-only files cache until restart. Changing a file while a process is running does not rotate its cached connection.

To revoke a key, use the intended project's **Automate > Regenerate API Key** as its Admin/Owner, update every dependent private integration and restart its processes. The provider says the old key stops working after a short transition. Official hosted MCP authorization is a separate connection. Removing this package does not undo testimonial edits, publish approval, permanent deletion, emailed invites, follow-up sequences or existing exports.

### Effects and local limits

There is no universal provider quota invented here. Local spacing defaults to 250 ms and request timeout 30 seconds; other processes share native project quotas. Bodies cap at 1 MiB and responses at 5 MiB. No automatic retry, redirect following or media download occurs. A failed write can have an unknown outcome; inspect native state before any explicit repeat.

send_invites uses a real forms[].id from list_links and that form's existing email/follow-up sequence. It is not a local draft, arbitrary email editor or test-send command. Its local 100-recipient cap is not a documented native quota. Receipt sent/skipped values do not prove delivered messages or consent. Only send to the actual approved recipients and purpose.


## Codex

Codex is the current validation priority. Private token paths must exist in the process or remote environment where the server runs.

~~~bash
codex mcp add senja -- npx -y @thenavidm/senja-mcp-cli@latest
codex mcp list
~~~

Account credentials must reach the server through private environment settings. `codex mcp add --env NAME=value` stores values in your local config, so never commit that config or put secrets in a shared command. In TOML, the equivalent server is:

~~~toml
[mcp_servers.senja]
command = "npx"
args = ["-y", "@thenavidm/senja-mcp-cli@latest"]
env_vars = ["SENJA_API_KEY", "SENJA_TOKEN_FILE", "SENJA_ACCOUNTS", "SENJA_DEFAULT_ACCOUNT", "SENJA_READ_ONLY", "SENJA_ALLOW_DESTRUCTIVE"]
~~~

`env_vars` forwards those names from the environment available to Codex. If that environment does not contain them, configure private env settings locally. Codex can also call the CLI directly with SKILL.md and `--agent` output.

## Claude Code

For a user-scoped connection, after privately configuring credentials:

~~~bash
claude mcp add --scope user senja -- npx -y @thenavidm/senja-mcp-cli@latest
claude mcp list
~~~

Use the client's private local environment settings for the account variable if they are not inherited. Claude's `-e NAME=value` registration option writes values into its config; only use it locally through your secret manager, with no shared command transcript. Never place credentials in a project .mcp.json. Reconnect and ask Claude to verify credentials.

Alternatively install the CLI, make SKILL.md available to Claude, and use shell commands. Registering both surfaces is optional.

## Claude Desktop

### Install the .mcpb extension

1. Download `senja-2.0.0.mcpb` from [GitHub Releases](https://github.com/thenavidm/senja-mcp-cli/releases/latest).
2. In a supported Claude Desktop build, open **Settings > Extensions > Advanced settings > Install Extension…** and select it.
3. Enter a private project API key in the sensitive setting, OR an absolute private token-only file path. Leave the unused method empty. Requests use Authorization: Bearer. Named profiles require private manual runtime settings.
4. Enable read-only if you want only the 6 read operations. Reconnect and verify the intended project with one deliberate read.

The bundle includes production dependencies and no credentials. Use a regular private token-only file if you prefer file-based credentials. The manifest requires Node 22 or newer from a compatible host. Organization policy may restrict custom extensions. Manual bundle updates require installing the new version; no automatic directory updates are promised. GUI installation remains unverified separately from archive/protocol checks.

### Manual config

Open **Settings > Developer > Edit Config**, or use your platform's config file:

| OS | Typical config path |
| --- | --- |
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| Linux | `~/.config/Claude/claude_desktop_config.json`; confirm the location through Edit Config in your installed build |

~~~json
{
  "mcpServers": {
    "senja": {
      "command": "npx",
      "args": ["-y", "@thenavidm/senja-mcp-cli@latest"],
      "env": {
        "SENJA_API_KEY": "YOUR_PRIVATE_API_KEY",
        "SENJA_TOKEN_FILE": ""
      }
    }
  }
}
~~~

Replace the placeholders only in your private file. Merge the server entry into an existing mcpServers object instead of replacing other integrations. Fully quit and reopen Claude Desktop. Do not enable an extension and a manual entry with the same name; choose one route.

If a Windows launcher cannot execute npx directly, use `"command": "cmd"` with `"args": ["/c", "npx", "-y", "@thenavidm/senja-mcp-cli@latest"]`. An absolute node executable and installed `dist/index.js` path also avoids launcher/PATH problems.

## Cursor

Use private user settings at `~/.cursor/mcp.json`, or **Settings > Tools & MCP**. [Cursor documents environment interpolation and envFile support](https://cursor.com/docs/mcp).

~~~json
{
  "mcpServers": {
    "senja": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@thenavidm/senja-mcp-cli@latest"],
      "env": {
        "SENJA_API_KEY": "${env:SENJA_API_KEY}",
        "SENJA_TOKEN_FILE": "${env:SENJA_TOKEN_FILE}"
      }
    }
  }
}
~~~

The environment values must exist for the Cursor process. If you use envFile, keep that file private and outside version control. A project's .cursor/mcp.json must not contain actual credentials. Reconnect the server after saving.

## VS Code and Copilot

Use **MCP: Open User Configuration**. [VS Code uses servers and secure inputs](https://code.visualstudio.com/docs/agent-customization/mcp-servers), rather than a mcpServers root:

~~~json
{
  "inputs": [
    {"type": "promptString", "id": "senja-api-token", "description": "Senja API key (leave empty for a private token file)", "password": true},
    {"type": "promptString", "id": "senja-token-file", "description": "Optional private token-file path (leave empty for API key)"}
  ],
  "servers": {
    "senja": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@thenavidm/senja-mcp-cli@latest"],
      "env": {
        "SENJA_API_KEY": "${input:senja-api-token}",
        "SENJA_TOKEN_FILE": "${input:senja-token-file}"
      }
    }
  }
}
~~~

Start Senja through the MCP controls, approve trust if prompted, and enter credentials in the private input prompts. Workspace .vscode/mcp.json may contain this placeholder-only structure, but never resolved secret values. Remote development runs the server in the selected remote environment, so local file paths refer to that environment.

## Windsurf

Open Cascade's MCP settings or edit the private user file `~/.codeium/windsurf/mcp_config.json`. Use the Claude Desktop manual mcpServers block above with your locally configured env values. See [Windsurf's current MCP documentation](https://docs.devin.ai/desktop/cascade/mcp). Restart or reconnect Senja in Cascade; project files must not contain secrets.

## Zed

Open **Settings > AI > MCP Servers > Add Server > Add Local Server**, or your user settings file. [Zed uses context_servers](https://zed.dev/docs/ai/mcp):

~~~json
{
  "context_servers": {
    "senja": {
      "command": "npx",
      "args": ["-y", "@thenavidm/senja-mcp-cli@latest"],
      "env": {
        "SENJA_API_KEY": "YOUR_PRIVATE_API_KEY",
        "SENJA_TOKEN_FILE": ""
      }
    }
  }
}
~~~

Enter actual values only in private user settings. Check the active-server indicator before prompting. Do not wrap command and args inside a nested command object from older Zed examples.

## Gemini CLI

Merge the Claude Desktop manual mcpServers block into your private `~/.gemini/settings.json`. Configure the private credential values locally, then restart Gemini CLI and inspect `/mcp`. See [Gemini CLI's MCP configuration](https://geminicli.com/docs/tools/mcp-server/). Its project settings must not contain real credentials. You can instead use the CLI from an agent shell.

Other local stdio clients use the same command and arguments, adapted to their config format. A client that only accepts a remote MCP URL cannot connect directly: this package does not ship a public HTTP listener. ChatGPT's remote connector setup is not a substitute for local stdio installation.

## Docker

Build locally from the reviewed source; no prebuilt registry image is claimed:

```bash
git clone https://github.com/thenavidm/senja-mcp-cli.git
cd senja-mcp-cli
docker build -t senja-mcp-cli .
docker run --rm -i -e SENJA_API_KEY senja-mcp-cli
```


## Cline and other local MCP clients

Use the client's **Add MCP server** flow with command `npx`, arguments `-y` and `@thenavidm/senja-mcp-cli@latest`, stdio transport, and private local SENJA_API_KEY or SENJA_TOKEN_FILE settings. UI names depend on the installed client. Reconnect and discover tools before an account call. Browser-only clients need a remote HTTPS connector; use Senja's official server rather than this local stdio command.



## Verify

~~~bash
senja-cli --version
senja-cli tools
senja-cli list-accounts --agent
senja-cli doctor
senja-cli doctor --network
senja-cli list-testimonials --limit 1 --agent --select total,testimonials.id
~~~

Only the final two commands intentionally contact Senja. The one-item example may return a private ID; use doctor --network if you only need verification metadata. Never create, approve, delete or email a testimonial merely to test installation. Fixtures/protocol discovery, actual provider outcomes, desktop GUI installation and completed Codex usage measurements are distinct checks.

## Several projects


SENJA_ACCOUNTS is a private JSON array of unique {name,api_key,token_file} profiles. Use one credential method per profile. SENJA_DEFAULT_ACCOUNT selects the default label and --account selects an exact label. An incomplete named profile never inherits a global key, another project or an official hosted session after a missing credential or 401/403.

list_accounts returns labels/default/auth/source only, without keys, token paths, native project identity or network traffic. Token-only files cache until restart. Changing a file while a process is running does not rotate its cached connection.

To revoke a key, use the intended project's **Automate > Regenerate API Key** as its Admin/Owner, update every dependent private integration and restart its processes. The provider says the old key stops working after a short transition. Official hosted MCP authorization is a separate connection. Removing this package does not undo testimonial edits, publish approval, permanent deletion, emailed invites, follow-up sequences or existing exports.



## Updates and removal

Restart npx@latest registrations to resolve the current version. Update a global CLI with npm install -g @thenavidm/senja-mcp-cli@latest and install a new .mcpb manually. Remove only the requested registration/skill/global package/extension, and revoke the intended project key separately. Uninstalling does not undo proof changes or send history.

~~~bash
npm install -g @thenavidm/senja-mcp-cli@latest
senja-cli --version
# Removal only when requested
npm uninstall -g @thenavidm/senja-mcp-cli
~~~

## Troubleshooting

| Symptom | Check |
| --- | --- |
| No binary or Node error | Node 22+, npm/PATH in the actual GUI/remote runtime; npm.cmd if Windows policy blocks npm.ps1 |
| Exit10 or unknown profile | Exact profile name and one private key/file; no fallback exists |
| Unreadable token file | Absolute owner-private regular non-symlink file under 64 KiB; restart after replacing it |
| 401/403 | Selected project/key/permissions and revocation; official hosted auth is separate |
| Old sort/per_page/language rejected | Use sort date/rating, order asc/desc, limit and lang |
| PATCH edit refused | Only approved/add_tags/remove_tags; use dashboard for text/customer/rating edits |
| Cannot send or delete | Explicit --confirm and local policy; inspect native permissions and real purpose |
| Invites skipped | Inspect native sent/skipped receipt and existing form sequence; do not blindly repeat |
| Export stopped at cap | Inspect page/offset/limit and resume to a different new private file |
| Existing output file | Choose a new file; never remove/overwrite unrelated data |
| Review hash mismatch | Preview the exact unchanged order/inputs/profile/schema again |
| 429 or uncertain write result | No automatic retry; inspect native state and available rate-limit guidance |
| Browser-only client | Use official hosted MCP; local stdio needs a supported server runtime |
| Desktop GUI blocked | Organization/client support and Node 22 runtime; archive discovery does not prove GUI acceptance |

## Development

~~~bash
git clone https://github.com/thenavidm/senja-mcp-cli.git
cd senja-mcp-cli
npm ci
npm run typecheck
npm run build
npm test
npm run check:counts
npm run check:discovery
npm run sync:api -- --check
npm run build:mcpb
~~~

Source mode uses node /absolute/path/senja-mcp-cli/dist/index.js after building. Keep credentials outside the checkout and archive.
