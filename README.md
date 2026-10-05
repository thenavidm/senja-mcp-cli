<img src="https://cdn.navid.me/tools/senja-icon.jpg" alt="Senja" width="88">

# Senja MCP Server & CLI

[![npm](https://img.shields.io/npm/v/@thenavidm/senja-mcp-cli?color=orange&label=npm)](https://www.npmjs.com/package/@thenavidm/senja-mcp-cli)
[![CI](https://github.com/thenavidm/senja-mcp-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/thenavidm/senja-mcp-cli/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/License-AGPL--3.0-green)](./LICENSE)
[![YouTube](https://img.shields.io/badge/YouTube-@thenavidm-red?logo=youtube&logoColor=white)](https://youtube.com/@thenavidm?sub_confirmation=1)
[![X](https://img.shields.io/badge/X-@thenavidm-black?logo=x)](https://x.com/thenavidm)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-thenavidm-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/thenavidm)

Senja MCP server and CLI for Codex and AI agents. 12 shared tools for current testimonials and invites, isolated private projects, exact reviewed tasks and bounded exports.

One package supplies both task CLI commands and local MCP tools, with a bundled Claude Desktop extension. Built and maintained by [Navid Moazzez](https://navid.me). Built on [Slipway](https://github.com/thenavidm/slipway), which turns one definition of each tool into the MCP server and the CLI. Full setup is on [navid.me](https://navid.me/mcp-servers/senja).

<img src="https://cdn.navid.me/repos/senja-mcp-cli-retina.gif" alt="Illustrated Senja workflow using the actual house terminal component" width="520">

This native terminal illustrates shipped tool names; it is not a recording of real customer messages. Use a private intended-project API key. Account features and email delivery remain subject to Senja. Official hosted MCP already supports search, links and invites; our local task workflows and limits are compared below.

## Two ways to use it

### Command line

~~~bash
npm install -g @thenavidm/senja-mcp-cli@latest
senja-cli --version
senja-cli tools
senja-cli login
~~~

### MCP server, for your AI app

~~~bash
codex mcp add senja -- npx -y @thenavidm/senja-mcp-cli@latest
~~~

Configure private credentials in the client/runtime before native requests. Ask it to find the relevant existing proof before proposing an approved change. Full setup is in [INSTALL.md](INSTALL.md).

### Which one

Use MCP for structured client tools and CLI for scripts or agent shell tasks. Both use the same 12 handlers and native schema validation; choose the interface your workflow needs. Neither eliminates provider costs or model context.

## Features

| Capability | CLI command | MCP tool |
| --- | --- | --- |
| List testimonials | `senja-cli list-testimonials` | `list_testimonials` |
| Read one testimonial | `senja-cli get-testimonial` | `get_testimonial` |
| Import a testimonial | `senja-cli create-testimonial` | `create_testimonial` |
| Update approval or tags | `senja-cli update-testimonial` | `update_testimonial` |
| Delete one testimonial | `senja-cli delete-testimonial` | `delete_testimonial` |
| Read project links | `senja-cli list-links` | `list_links` |
| Send form invites | `senja-cli send-invites` | `send_invites` |
| List configured accounts | `senja-cli list-accounts` | `list_accounts` |
| Inspect a current native operation | `senja-cli get-operation-schema` | `get_operation_schema` |
| Review exact ordered testimonial tasks | `senja-cli preview-testimonial-batch` | `preview_testimonial_batch` |
| Execute reviewed testimonial tasks | `senja-cli submit-testimonial-batch` | `submit_testimonial_batch` |
| Export bounded private testimonials | `senja-cli export-testimonials` | `export_testimonials` |

## Contents

| Number | Section | What it covers |
| --- | --- | --- |
| 1 | [What you can ask it](#1-what-you-can-ask-it) | What you can ask it |
| 2 | [Quick install](#2-quick-install) | Quick install |
| 3 | [Set up Senja access](#3-set-up-senja-access) | Set up Senja access |
| 4 | [Connect your client](#4-connect-your-client) | Connect your client |
| 5 | [Check it works](#5-check-it-works) | Check it works |
| 6 | [Output, flags and exit codes](#6-output-flags-and-exit-codes) | Output, flags and exit codes |
| 7 | [MCP or CLI and token cost](#7-mcp-or-cli-and-token-cost) | MCP or CLI and token cost |
| 8 | [Every tool and argument](#8-every-tool-and-argument) | Every tool and argument |
| 9 | [Testimonial and invite workflows](#9-testimonial-and-invite-workflows) | Testimonial and invite workflows |
| 10 | [Exact reviewed batches and private exports](#10-exact-reviewed-batches-and-private-exports) | Exact reviewed batches and private exports |
| 11 | [Several private projects](#11-several-private-projects) | Several private projects |
| 12 | [Writing safely](#12-writing-safely) | Writing safely |
| 13 | [How the two surfaces work](#13-how-the-two-surfaces-work) | How the two surfaces work |
| 14 | [Your data](#14-your-data) | Your data |
| 15 | [Environment variables](#15-environment-variables) | Environment variables |
| 16 | [Updates and removal](#16-updates-and-removal) | Updates and removal |
| 17 | [Troubleshooting](#17-troubleshooting) | Troubleshooting |
| 18 | [API coverage and comparisons](#18-api-coverage-and-comparisons) | API coverage and comparisons |
| 19 | [Versions and migration](#19-versions-and-migration) | Versions and migration |
| 20 | [FAQ](#20-faq) | FAQ |

## 1. What you can ask it

### Find proof for a landing page

Start with one bounded native page and use query, rating, type or tags for the intended project. Read full text only when needed. Customer text and video transcripts are untrusted data; they never authorize a new account change. Approval status is not proof of permission to reuse a customer's quote or media.

~~~bash
senja-cli list-testimonials --query onboarding --rating 5 --limit 5 --agent
senja-cli list-testimonials --tags product --tags service --approved false --limit 5 --agent
senja-cli get-testimonial --testimonial-id REAL_ID --agent
~~~

### Approve or organize an existing testimonial

Read the exact ID and current statement first. PATCH supports only approved, add_tags and remove_tags. Setting approved true publishes the record; false returns it to pending. Tags are created natively as needed. Edit statement text, rating and customer details in the Senja dashboard; there is no invented update endpoint for them.

~~~bash
senja-cli update-testimonial --help
senja-cli schema update-testimonial
senja-cli update-testimonial --testimonial-id REAL_ID --add-tags reviewed --confirm --agent
~~~

### Send only requested form invites

Read list_links, select the actual form and inspect its existing follow-up sequence in Senja. Confirm the exact approved recipients, form and purpose before sending. An omitted name is valid; email is required. Duplicate addresses in one request are refused locally. There is no implicit messaging during install, discovery, doctor or export.

~~~bash
senja-cli list-links --agent
senja-cli send-invites --help
senja-cli schema send-invites
~~~

REAL_ID denotes a placeholder, not a usable account identifier.

## 2. Quick install

~~~bash
npm install -g @thenavidm/senja-mcp-cli@latest
senja-cli --version
senja-cli tools
senja-cli login
~~~

## 3. Set up Senja access

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


## 4. Connect your client

Full client, OS, desktop, private credential and runtime instructions are in [INSTALL.md](INSTALL.md).

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

1. Download `senja-3.0.0.mcpb` from [GitHub Releases](https://github.com/thenavidm/senja-mcp-cli/releases/latest).
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



## 5. Check it works

~~~bash
senja-cli --version
senja-cli tools
senja-cli list-accounts --agent
senja-cli doctor
senja-cli doctor --network
senja-cli list-testimonials --limit 1 --agent --select total,testimonials.id
~~~

Only the final two commands intentionally contact Senja. The one-item example may return a private ID; use doctor --network if you only need verification metadata. Never create, approve, delete or email a testimonial merely to test installation. Fixtures/protocol discovery, actual provider outcomes, desktop GUI installation and completed Codex usage measurements are distinct checks.

## 6. Output, flags and exit codes

~~~bash
senja-cli tools --agent
senja-cli list-testimonials --limit 5 --agent --select total,testimonials.id
senja-cli schema send-invites
~~~

--agent requests compact JSON with no prompts and never confirms. `senja-cli which <words>` finds the command for a task. Repeated array flags collect tags; one --recipients or --tasks flag contains one JSON object. Whole native bodies use payload or an absolute regular non-symlink payload_file capped1MiB. Do not mix body methods.

| Exit | Meaning |
| --- | --- |
| 0 | Success |
| 1 | Unexpected error |
| 2 | Usage, invalid native input, a refused effect, an unknown command or a hidden write |
| 3 | Not found |
| 4 | Authentication/permission |
| 5 | Native API error |
| 7 | Rate limited |
| 10 | Missing/invalid private configuration |

## 7. MCP or CLI and token cost

MCP clients can load all schemas, defer discovery, or load selected schemas; the mode changes input overhead. CLI use still needs command/schema discovery and model-readable results. --agent and --select can reduce formatting/output for an appropriate task, but do not prove smaller total cost.

Measured on 2026-10-05 against 2.0.1, with Claude Code 2.1.286 on Claude Opus 5.5 (one short prompt with and without the server connected, the difference read from the API's own usage figures) and Codex 0.159.3 on gpt-6.1-sol:

| Cost | 2.0.1 | 3.0.0 |
| --- | --- | --- |
| Claude Code, every tool loaded, every message | 7,900 | 7,551 |
| Claude Code's default, tool search, every message | 742 | 742 |
| `SKILL.md`, read once | 2,358 | 2,440 |
| Codex over the CLI, one task, median of five | 125,564 | 126,370 |
| Codex over MCP, the same task, median of five | 44,983 | 45,393 |

The task was "find the command that sends testimonial invites, and the flags it requires". Every tool loaded costs less because the testimonial integrations and media are written once. Over the CLI, two 3.0.0 runs asked `which sends testimonial invites`, got the command's help in the answer and took three commands; the other three asked `which testimonial invites`, which fits three commands alike, and took five, as every 2.0.1 run did. The medians are both five-command runs, 806 tokens apart for 3.0.0's longer general help, and over all five runs 3.0.0 averaged 109,209 against 134,461. Over MCP, Codex now prints `create_testimonial` with its argument comments, 1,692 characters more. `SKILL.md` costs 82 more because it says how approval works over MCP and how `which` finds a command, and what exit codes 1 and 2 cover.

Tool-list bytes or characters divided by four are not API usage, and no other offering was measured.

## 8. Every tool and argument

#### list_testimonials

Read one native page with exact current search, tag, approval, language and date/rating filters.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `sort` | string | Optional | Native sort field; direction uses order. {"enum": ["date", "rating"]} |
| `order` | string | Optional | {"enum": ["asc", "desc"]} |
| `approved` | boolean | Optional | Exact native/schema value |
| `rating` | integer | Optional | {"minimum": 1, "maximum": 5} |
| `type` | string | Optional | {"enum": ["text", "video"]} |
| `integration` | string | Optional | {"enum": ["twitter", "product_hunt", "google", "facebook", "reddit", "capterra", "g2", "linkedin", "app_store", "trustpilot", "shopify", "play_store", "yelp", "slack", "discord", "apple_podcasts", "telegram", "whatsapp", "instagram", "youtube", "tiktok", "appsumo", "amazon", "zillow", "udemy", "chrome_web_store", "airbnb", "skillshare", "realtor", "sourceforge", "whop", "wordpress", "fiverr", "homestars", "web_page"]} |
| `tags` | array | Optional | {"maxItems": 100} |
| `query` | string | Optional | Native full-text search, including customer name/email; output may contain personal data. |
| `lang` | string | Optional | Native ISO 639 language selector. |
| `limit` | integer | Optional | Native page size. total counts only the current page. {"minimum": 1, "maximum": 1000} |
| `page` | integer | Optional | {"minimum": 1} |
| `account` | string | Optional | Exact configured private account profile label; not a tenant or provider account ID. |

~~~bash
senja-cli list-testimonials --help
senja-cli schema list-testimonials
~~~

~~~json
{
  "type": "object",
  "properties": {
    "sort": {
      "type": "string",
      "enum": [
        "date",
        "rating"
      ],
      "description": "Native sort field; direction uses order."
    },
    "order": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "approved": {
      "type": "boolean"
    },
    "rating": {
      "type": "integer",
      "minimum": 1,
      "maximum": 5
    },
    "type": {
      "type": "string",
      "enum": [
        "text",
        "video"
      ]
    },
    "integration": {
      "type": "string",
      "enum": [
        "twitter",
        "product_hunt",
        "google",
        "facebook",
        "reddit",
        "capterra",
        "g2",
        "linkedin",
        "app_store",
        "trustpilot",
        "shopify",
        "play_store",
        "yelp",
        "slack",
        "discord",
        "apple_podcasts",
        "telegram",
        "whatsapp",
        "instagram",
        "youtube",
        "tiktok",
        "appsumo",
        "amazon",
        "zillow",
        "udemy",
        "chrome_web_store",
        "airbnb",
        "skillshare",
        "realtor",
        "sourceforge",
        "whop",
        "wordpress",
        "fiverr",
        "homestars",
        "web_page"
      ]
    },
    "tags": {
      "type": "array",
      "maxItems": 100,
      "items": {
        "type": "string",
        "minLength": 1,
        "description": "Nonempty tag name."
      }
    },
    "query": {
      "type": "string",
      "minLength": 1,
      "description": "Native full-text search, including customer name/email; output may contain personal data.",
      "maxLength": 10000
    },
    "lang": {
      "type": "string",
      "minLength": 1,
      "description": "Native ISO 639 language selector.",
      "maxLength": 10
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 1000,
      "description": "Native page size. total counts only the current page."
    },
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "account": {
      "type": "string",
      "description": "Exact configured private account profile label; not a tenant or provider account ID."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /testimonials**. No native JSON body.

~~~json
{
  "name": "list_testimonials",
  "method": "GET",
  "path": "/testimonials",
  "title": "List testimonials",
  "description": "Read one native page with exact current search, tag, approval, language and date/rating filters.",
  "group": "testimonials",
  "risk": "read",
  "params": [
    {
      "name": "sort",
      "key": "sort",
      "schema": {
        "type": "string",
        "enum": [
          "date",
          "rating"
        ],
        "description": "Native sort field; direction uses order."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": true
    },
    {
      "name": "order",
      "key": "order",
      "schema": {
        "type": "string",
        "enum": [
          "asc",
          "desc"
        ]
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": true
    },
    {
      "name": "approved",
      "key": "approved",
      "schema": {
        "type": "boolean"
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": true
    },
    {
      "name": "rating",
      "key": "rating",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 5
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": true
    },
    {
      "name": "type",
      "key": "type",
      "schema": {
        "type": "string",
        "enum": [
          "text",
          "video"
        ]
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": true
    },
    {
      "name": "integration",
      "key": "integration",
      "schema": {
        "type": "string",
        "enum": [
          "twitter",
          "product_hunt",
          "google",
          "facebook",
          "reddit",
          "capterra",
          "g2",
          "linkedin",
          "app_store",
          "trustpilot",
          "shopify",
          "play_store",
          "yelp",
          "slack",
          "discord",
          "apple_podcasts",
          "telegram",
          "whatsapp",
          "instagram",
          "youtube",
          "tiktok",
          "appsumo",
          "amazon",
          "zillow",
          "udemy",
          "chrome_web_store",
          "airbnb",
          "skillshare",
          "realtor",
          "sourceforge",
          "whop",
          "wordpress",
          "fiverr",
          "homestars",
          "web_page"
        ]
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": true
    },
    {
      "name": "tags",
      "key": "tags",
      "schema": {
        "type": "array",
        "maxItems": 100,
        "items": {
          "type": "string",
          "minLength": 1,
          "description": "Nonempty tag name."
        }
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": true
    },
    {
      "name": "query",
      "key": "query",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Native full-text search, including customer name/email; output may contain personal data.",
        "maxLength": 10000
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": true
    },
    {
      "name": "lang",
      "key": "lang",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Native ISO 639 language selector.",
        "maxLength": 10
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": true
    },
    {
      "name": "limit",
      "key": "limit",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 1000,
        "description": "Native page size. total counts only the current page."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": true
    },
    {
      "name": "page",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": true
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false
}
~~~

#### get_testimonial

Read one exact testimonial, including native video metadata and public/dashboard links.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `testimonial_id` | string | Required | Exact testimonial ID. No slash, traversal or arbitrary URL. |
| `account` | string | Optional | Exact configured private account profile label; not a tenant or provider account ID. |

~~~bash
senja-cli get-testimonial --help
senja-cli schema get-testimonial
~~~

~~~json
{
  "type": "object",
  "properties": {
    "testimonial_id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact testimonial ID. No slash, traversal or arbitrary URL."
    },
    "account": {
      "type": "string",
      "description": "Exact configured private account profile label; not a tenant or provider account ID."
    }
  },
  "required": [
    "testimonial_id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /testimonials/{testimonial_id}**. No native JSON body.

~~~json
{
  "name": "get_testimonial",
  "method": "GET",
  "path": "/testimonials/{testimonial_id}",
  "title": "Read one testimonial",
  "description": "Read one exact testimonial, including native video metadata and public/dashboard links.",
  "group": "testimonials",
  "risk": "read",
  "params": [
    {
      "name": "testimonial_id",
      "key": "testimonial_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact testimonial ID. No slash, traversal or arbitrary URL."
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": true
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false
}
~~~

#### create_testimonial

Create one text/video testimonial from an authorized existing customer statement. Explicit approval is required.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `title` | string | Optional | Exact native/schema value |
| `text` | string | Optional | Exact native/schema value |
| `customer_name` | string | Optional | Exact native/schema value |
| `customer_company` | string | Optional | Exact native/schema value |
| `customer_tagline` | string | Optional | Exact native/schema value |
| `customer_username` | string | Optional | Exact native/schema value |
| `form_id` | string | Optional | Exact native/schema value |
| `url` | string | Optional | HTTPS URL without embedded credentials; provider retrieves media where supported. {"format": "uri"} |
| `thumbnail_url` | string | Optional | HTTPS URL without embedded credentials; provider retrieves media where supported. {"format": "uri"} |
| `customer_avatar` | string | Optional | HTTPS URL without embedded credentials; provider retrieves media where supported. {"format": "uri"} |
| `customer_company_logo` | string | Optional | HTTPS URL without embedded credentials; provider retrieves media where supported. {"format": "uri"} |
| `customer_url` | string | Optional | HTTPS URL without embedded credentials; provider retrieves media where supported. {"format": "uri"} |
| `video_url` | string | Optional | HTTPS URL without embedded credentials; provider retrieves media where supported. {"format": "uri"} |
| `type` | string | Optional | {"enum": ["text", "video"]} |
| `customer_email` | string | Optional | {"format": "email"} |
| `rating` | integer | Optional | {"minimum": 1, "maximum": 5} |
| `date` | string | Optional | {"format": "date-time"} |
| `approved` | boolean | Optional | Explicitly true publishes the testimonial; false keeps it pending. |
| `integration` | string | Optional | {"enum": ["twitter", "product_hunt", "google", "facebook", "reddit", "capterra", "g2", "linkedin", "app_store", "trustpilot", "shopify", "play_store", "yelp", "slack", "discord", "apple_podcasts", "telegram", "whatsapp", "instagram", "youtube", "tiktok", "appsumo", "amazon", "zillow", "udemy", "chrome_web_store", "airbnb", "skillshare", "realtor", "sourceforge", "whop", "wordpress", "fiverr", "homestars", "web_page"]} |
| `tags` | array | Optional | {"maxItems": 100} |
| `media` | array | Optional | {"maxItems": 100} |
| `media[].alt` | string | Optional | Exact native/schema value |
| `media[].url` | string | Required | {"format": "uri"} |
| `media[].type` | string | Required | {"enum": ["image", "video"]} |
| `account` | string | Optional | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | boolean | Optional | Set true only when the user asked for exactly this action. |
| `payload` | object | Optional | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload.title` | string | Optional | Exact native/schema value |
| `payload.text` | string | Optional | Exact native/schema value |
| `payload.customer_name` | string | Required | Exact native/schema value |
| `payload.customer_company` | string | Optional | Exact native/schema value |
| `payload.customer_tagline` | string | Optional | Exact native/schema value |
| `payload.customer_username` | string | Optional | Exact native/schema value |
| `payload.form_id` | string | Optional | Exact native/schema value |
| `payload.url` | string | Optional | HTTPS URL without embedded credentials; provider retrieves media where supported. {"format": "uri"} |
| `payload.thumbnail_url` | string | Optional | HTTPS URL without embedded credentials; provider retrieves media where supported. {"format": "uri"} |
| `payload.customer_avatar` | string | Optional | HTTPS URL without embedded credentials; provider retrieves media where supported. {"format": "uri"} |
| `payload.customer_company_logo` | string | Optional | HTTPS URL without embedded credentials; provider retrieves media where supported. {"format": "uri"} |
| `payload.customer_url` | string | Optional | HTTPS URL without embedded credentials; provider retrieves media where supported. {"format": "uri"} |
| `payload.video_url` | string | Optional | HTTPS URL without embedded credentials; provider retrieves media where supported. {"format": "uri"} |
| `payload.type` | string | Required | {"enum": ["text", "video"]} |
| `payload.customer_email` | string | Optional | {"format": "email"} |
| `payload.rating` | integer | Optional | {"minimum": 1, "maximum": 5} |
| `payload.date` | string | Optional | {"format": "date-time"} |
| `payload.approved` | boolean | Optional | Explicitly true publishes the testimonial; false keeps it pending. |
| `payload.integration` | string | Optional | {"enum": ["twitter", "product_hunt", "google", "facebook", "reddit", "capterra", "g2", "linkedin", "app_store", "trustpilot", "shopify", "play_store", "yelp", "slack", "discord", "apple_podcasts", "telegram", "whatsapp", "instagram", "youtube", "tiktok", "appsumo", "amazon", "zillow", "udemy", "chrome_web_store", "airbnb", "skillshare", "realtor", "sourceforge", "whop", "wordpress", "fiverr", "homestars", "web_page"]} |
| `payload.tags` | array | Optional | {"maxItems": 100} |
| `payload.media` | array | Optional | {"maxItems": 100} |
| `payload.media[].alt` | string | Optional | Exact native/schema value |
| `payload.media[].url` | string | Required | {"format": "uri"} |
| `payload.media[].type` | string | Required | {"enum": ["image", "video"]} |
| `payload_file` | string | Optional | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. |

~~~bash
senja-cli create-testimonial --help
senja-cli schema create-testimonial
~~~

~~~json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "text": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "customer_name": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "customer_company": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "customer_tagline": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "customer_username": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "form_id": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "url": {
      "type": "string",
      "minLength": 1,
      "description": "HTTPS URL without embedded credentials; provider retrieves media where supported.",
      "format": "uri"
    },
    "thumbnail_url": {
      "type": "string",
      "minLength": 1,
      "description": "HTTPS URL without embedded credentials; provider retrieves media where supported.",
      "format": "uri"
    },
    "customer_avatar": {
      "type": "string",
      "minLength": 1,
      "description": "HTTPS URL without embedded credentials; provider retrieves media where supported.",
      "format": "uri"
    },
    "customer_company_logo": {
      "type": "string",
      "minLength": 1,
      "description": "HTTPS URL without embedded credentials; provider retrieves media where supported.",
      "format": "uri"
    },
    "customer_url": {
      "type": "string",
      "minLength": 1,
      "description": "HTTPS URL without embedded credentials; provider retrieves media where supported.",
      "format": "uri"
    },
    "video_url": {
      "type": "string",
      "minLength": 1,
      "description": "HTTPS URL without embedded credentials; provider retrieves media where supported.",
      "format": "uri"
    },
    "type": {
      "type": "string",
      "enum": [
        "text",
        "video"
      ]
    },
    "customer_email": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "format": "email"
    },
    "rating": {
      "type": "integer",
      "minimum": 1,
      "maximum": 5
    },
    "date": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "format": "date-time"
    },
    "approved": {
      "type": "boolean",
      "description": "Explicitly true publishes the testimonial; false keeps it pending."
    },
    "integration": {
      "type": "string",
      "enum": [
        "twitter",
        "product_hunt",
        "google",
        "facebook",
        "reddit",
        "capterra",
        "g2",
        "linkedin",
        "app_store",
        "trustpilot",
        "shopify",
        "play_store",
        "yelp",
        "slack",
        "discord",
        "apple_podcasts",
        "telegram",
        "whatsapp",
        "instagram",
        "youtube",
        "tiktok",
        "appsumo",
        "amazon",
        "zillow",
        "udemy",
        "chrome_web_store",
        "airbnb",
        "skillshare",
        "realtor",
        "sourceforge",
        "whop",
        "wordpress",
        "fiverr",
        "homestars",
        "web_page"
      ]
    },
    "tags": {
      "type": "array",
      "maxItems": 100,
      "items": {
        "type": "string",
        "minLength": 1,
        "description": "Nonempty tag name."
      }
    },
    "media": {
      "type": "array",
      "maxItems": 100,
      "items": {
        "type": "object",
        "properties": {
          "alt": {
            "type": "string",
            "minLength": 1,
            "description": ""
          },
          "url": {
            "type": "string",
            "minLength": 1,
            "description": "",
            "format": "uri"
          },
          "type": {
            "type": "string",
            "enum": [
              "image",
              "video"
            ]
          }
        },
        "required": [
          "url",
          "type"
        ],
        "additionalProperties": false
      }
    },
    "account": {
      "type": "string",
      "description": "Exact configured private account profile label; not a tenant or provider account ID."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true for the requested mutation or exclusive private output file."
    },
    "payload": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "text": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "customer_name": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "customer_company": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "customer_tagline": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "customer_username": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "form_id": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "url": {
          "type": "string",
          "minLength": 1,
          "description": "HTTPS URL without embedded credentials; provider retrieves media where supported.",
          "format": "uri"
        },
        "thumbnail_url": {
          "type": "string",
          "minLength": 1,
          "description": "HTTPS URL without embedded credentials; provider retrieves media where supported.",
          "format": "uri"
        },
        "customer_avatar": {
          "type": "string",
          "minLength": 1,
          "description": "HTTPS URL without embedded credentials; provider retrieves media where supported.",
          "format": "uri"
        },
        "customer_company_logo": {
          "type": "string",
          "minLength": 1,
          "description": "HTTPS URL without embedded credentials; provider retrieves media where supported.",
          "format": "uri"
        },
        "customer_url": {
          "type": "string",
          "minLength": 1,
          "description": "HTTPS URL without embedded credentials; provider retrieves media where supported.",
          "format": "uri"
        },
        "video_url": {
          "type": "string",
          "minLength": 1,
          "description": "HTTPS URL without embedded credentials; provider retrieves media where supported.",
          "format": "uri"
        },
        "type": {
          "type": "string",
          "enum": [
            "text",
            "video"
          ]
        },
        "customer_email": {
          "type": "string",
          "minLength": 1,
          "description": "",
          "format": "email"
        },
        "rating": {
          "type": "integer",
          "minimum": 1,
          "maximum": 5
        },
        "date": {
          "type": "string",
          "minLength": 1,
          "description": "",
          "format": "date-time"
        },
        "approved": {
          "type": "boolean",
          "description": "Explicitly true publishes the testimonial; false keeps it pending."
        },
        "integration": {
          "type": "string",
          "enum": [
            "twitter",
            "product_hunt",
            "google",
            "facebook",
            "reddit",
            "capterra",
            "g2",
            "linkedin",
            "app_store",
            "trustpilot",
            "shopify",
            "play_store",
            "yelp",
            "slack",
            "discord",
            "apple_podcasts",
            "telegram",
            "whatsapp",
            "instagram",
            "youtube",
            "tiktok",
            "appsumo",
            "amazon",
            "zillow",
            "udemy",
            "chrome_web_store",
            "airbnb",
            "skillshare",
            "realtor",
            "sourceforge",
            "whop",
            "wordpress",
            "fiverr",
            "homestars",
            "web_page"
          ]
        },
        "tags": {
          "type": "array",
          "maxItems": 100,
          "items": {
            "type": "string",
            "minLength": 1,
            "description": "Nonempty tag name."
          }
        },
        "media": {
          "type": "array",
          "maxItems": 100,
          "items": {
            "type": "object",
            "properties": {
              "alt": {
                "type": "string",
                "minLength": 1,
                "description": ""
              },
              "url": {
                "type": "string",
                "minLength": 1,
                "description": "",
                "format": "uri"
              },
              "type": {
                "type": "string",
                "enum": [
                  "image",
                  "video"
                ]
              }
            },
            "required": [
              "url",
              "type"
            ],
            "additionalProperties": false
          }
        }
      },
      "required": [
        "type",
        "customer_name"
      ],
      "additionalProperties": false,
      "description": "Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **POST /testimonials**. Provide native body fields OR payload OR payload_file, never mixed. Native body required: type, customer_name

~~~json
{
  "name": "create_testimonial",
  "method": "POST",
  "path": "/testimonials",
  "title": "Import a testimonial",
  "description": "Create one text/video testimonial from an authorized existing customer statement. Explicit approval is required.",
  "group": "testimonials",
  "risk": "destructive",
  "params": [],
  "bodySchema": {
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "minLength": 1,
        "description": ""
      },
      "text": {
        "type": "string",
        "minLength": 1,
        "description": ""
      },
      "customer_name": {
        "type": "string",
        "minLength": 1,
        "description": ""
      },
      "customer_company": {
        "type": "string",
        "minLength": 1,
        "description": ""
      },
      "customer_tagline": {
        "type": "string",
        "minLength": 1,
        "description": ""
      },
      "customer_username": {
        "type": "string",
        "minLength": 1,
        "description": ""
      },
      "form_id": {
        "type": "string",
        "minLength": 1,
        "description": ""
      },
      "url": {
        "type": "string",
        "minLength": 1,
        "description": "HTTPS URL without embedded credentials; provider retrieves media where supported.",
        "format": "uri"
      },
      "thumbnail_url": {
        "type": "string",
        "minLength": 1,
        "description": "HTTPS URL without embedded credentials; provider retrieves media where supported.",
        "format": "uri"
      },
      "customer_avatar": {
        "type": "string",
        "minLength": 1,
        "description": "HTTPS URL without embedded credentials; provider retrieves media where supported.",
        "format": "uri"
      },
      "customer_company_logo": {
        "type": "string",
        "minLength": 1,
        "description": "HTTPS URL without embedded credentials; provider retrieves media where supported.",
        "format": "uri"
      },
      "customer_url": {
        "type": "string",
        "minLength": 1,
        "description": "HTTPS URL without embedded credentials; provider retrieves media where supported.",
        "format": "uri"
      },
      "video_url": {
        "type": "string",
        "minLength": 1,
        "description": "HTTPS URL without embedded credentials; provider retrieves media where supported.",
        "format": "uri"
      },
      "type": {
        "type": "string",
        "enum": [
          "text",
          "video"
        ]
      },
      "customer_email": {
        "type": "string",
        "minLength": 1,
        "description": "",
        "format": "email"
      },
      "rating": {
        "type": "integer",
        "minimum": 1,
        "maximum": 5
      },
      "date": {
        "type": "string",
        "minLength": 1,
        "description": "",
        "format": "date-time"
      },
      "approved": {
        "type": "boolean",
        "description": "Explicitly true publishes the testimonial; false keeps it pending."
      },
      "integration": {
        "type": "string",
        "enum": [
          "twitter",
          "product_hunt",
          "google",
          "facebook",
          "reddit",
          "capterra",
          "g2",
          "linkedin",
          "app_store",
          "trustpilot",
          "shopify",
          "play_store",
          "yelp",
          "slack",
          "discord",
          "apple_podcasts",
          "telegram",
          "whatsapp",
          "instagram",
          "youtube",
          "tiktok",
          "appsumo",
          "amazon",
          "zillow",
          "udemy",
          "chrome_web_store",
          "airbnb",
          "skillshare",
          "realtor",
          "sourceforge",
          "whop",
          "wordpress",
          "fiverr",
          "homestars",
          "web_page"
        ]
      },
      "tags": {
        "type": "array",
        "maxItems": 100,
        "items": {
          "type": "string",
          "minLength": 1,
          "description": "Nonempty tag name."
        }
      },
      "media": {
        "type": "array",
        "maxItems": 100,
        "items": {
          "type": "object",
          "properties": {
            "alt": {
              "type": "string",
              "minLength": 1,
              "description": ""
            },
            "url": {
              "type": "string",
              "minLength": 1,
              "description": "",
              "format": "uri"
            },
            "type": {
              "type": "string",
              "enum": [
                "image",
                "video"
              ]
            }
          },
          "required": [
            "url",
            "type"
          ],
          "additionalProperties": false
        }
      }
    },
    "required": [
      "type",
      "customer_name"
    ],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": false
}
~~~

#### update_testimonial

Change only native approval status and tag additions/removals. Text, rating and customer edits remain dashboard-only.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `testimonial_id` | string | Required | Exact testimonial ID. No slash, traversal or arbitrary URL. |
| `approved` | boolean | Optional | Exact native/schema value |
| `add_tags` | array | Optional | {"maxItems": 100} |
| `remove_tags` | array | Optional | {"maxItems": 100} |
| `account` | string | Optional | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | boolean | Optional | Set true only when the user asked for exactly this action. |
| `payload` | object | Optional | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload.approved` | boolean | Optional | Exact native/schema value |
| `payload.add_tags` | array | Optional | {"maxItems": 100} |
| `payload.remove_tags` | array | Optional | {"maxItems": 100} |
| `payload_file` | string | Optional | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. |

~~~bash
senja-cli update-testimonial --help
senja-cli schema update-testimonial
~~~

~~~json
{
  "type": "object",
  "properties": {
    "testimonial_id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact testimonial ID. No slash, traversal or arbitrary URL."
    },
    "approved": {
      "type": "boolean"
    },
    "add_tags": {
      "type": "array",
      "maxItems": 100,
      "items": {
        "type": "string",
        "minLength": 1,
        "description": "Nonempty tag name."
      }
    },
    "remove_tags": {
      "type": "array",
      "maxItems": 100,
      "items": {
        "type": "string",
        "minLength": 1,
        "description": "Nonempty tag name."
      }
    },
    "account": {
      "type": "string",
      "description": "Exact configured private account profile label; not a tenant or provider account ID."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true for the requested mutation or exclusive private output file."
    },
    "payload": {
      "type": "object",
      "properties": {
        "approved": {
          "type": "boolean"
        },
        "add_tags": {
          "type": "array",
          "maxItems": 100,
          "items": {
            "type": "string",
            "minLength": 1,
            "description": "Nonempty tag name."
          }
        },
        "remove_tags": {
          "type": "array",
          "maxItems": 100,
          "items": {
            "type": "string",
            "minLength": 1,
            "description": "Nonempty tag name."
          }
        }
      },
      "required": [],
      "additionalProperties": false,
      "description": "Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags."
    }
  },
  "required": [
    "testimonial_id"
  ],
  "additionalProperties": false
}
~~~

Native request: **PATCH /testimonials/{testimonial_id}**. Provide native body fields OR payload OR payload_file, never mixed. Native body requires at least one approval or nonempty tag change.

~~~json
{
  "name": "update_testimonial",
  "method": "PATCH",
  "path": "/testimonials/{testimonial_id}",
  "title": "Update approval or tags",
  "description": "Change only native approval status and tag additions/removals. Text, rating and customer edits remain dashboard-only.",
  "group": "testimonials",
  "risk": "destructive",
  "params": [
    {
      "name": "testimonial_id",
      "key": "testimonial_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact testimonial ID. No slash, traversal or arbitrary URL."
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": true
    }
  ],
  "bodySchema": {
    "type": "object",
    "properties": {
      "approved": {
        "type": "boolean"
      },
      "add_tags": {
        "type": "array",
        "maxItems": 100,
        "items": {
          "type": "string",
          "minLength": 1,
          "description": "Nonempty tag name."
        }
      },
      "remove_tags": {
        "type": "array",
        "maxItems": 100,
        "items": {
          "type": "string",
          "minLength": 1,
          "description": "Nonempty tag name."
        }
      }
    },
    "required": [],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": false
}
~~~

#### delete_testimonial

Permanently delete exactly the requested testimonial. Irreversible; confirmation required.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `testimonial_id` | string | Required | Exact testimonial ID. No slash, traversal or arbitrary URL. |
| `account` | string | Optional | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | boolean | Optional | Set true only when the user asked for exactly this action. |

~~~bash
senja-cli delete-testimonial --help
senja-cli schema delete-testimonial
~~~

~~~json
{
  "type": "object",
  "properties": {
    "testimonial_id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact testimonial ID. No slash, traversal or arbitrary URL."
    },
    "account": {
      "type": "string",
      "description": "Exact configured private account profile label; not a tenant or provider account ID."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true for the requested mutation or exclusive private output file."
    }
  },
  "required": [
    "testimonial_id"
  ],
  "additionalProperties": false
}
~~~

Native request: **DELETE /testimonials/{testimonial_id}**. No native JSON body.

~~~json
{
  "name": "delete_testimonial",
  "method": "DELETE",
  "path": "/testimonials/{testimonial_id}",
  "title": "Delete one testimonial",
  "description": "Permanently delete exactly the requested testimonial. Irreversible; confirmation required.",
  "group": "testimonials",
  "risk": "destructive",
  "params": [
    {
      "name": "testimonial_id",
      "key": "testimonial_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact testimonial ID. No slash, traversal or arbitrary URL."
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": true
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false
}
~~~

#### list_links

Read native form, widget, Wall of Love, quick-link, case-study and sizzle-reel groups with their IDs and URLs.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact configured private account profile label; not a tenant or provider account ID. |

~~~bash
senja-cli list-links --help
senja-cli schema list-links
~~~

~~~json
{
  "type": "object",
  "properties": {
    "account": {
      "type": "string",
      "description": "Exact configured private account profile label; not a tenant or provider account ID."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /links**. No native JSON body.

~~~json
{
  "name": "list_links",
  "method": "GET",
  "path": "/links",
  "title": "Read project links",
  "description": "Read native form, widget, Wall of Love, quick-link, case-study and sizzle-reel groups with their IDs and URLs.",
  "group": "project_links",
  "risk": "read",
  "params": [],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false
}
~~~

#### send_invites

Send email invites using a selected form and its existing follow-up sequence. Local cap100 recipients, not a documented provider quota.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `form_id` | string | Optional | Exact forms[].id from list_links. |
| `recipients` | array | Optional | {"minItems": 1, "maxItems": 100} |
| `recipients[].email` | string | Required | {"format": "email"} |
| `recipients[].name` | string | Optional | Exact native/schema value |
| `account` | string | Optional | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | boolean | Optional | Set true only when the user asked for exactly this action. |
| `payload` | object | Optional | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload.form_id` | string | Required | Exact forms[].id from list_links. |
| `payload.recipients` | array | Required | {"minItems": 1, "maxItems": 100} |
| `payload.recipients[].email` | string | Required | {"format": "email"} |
| `payload.recipients[].name` | string | Optional | Exact native/schema value |
| `payload_file` | string | Optional | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. |

~~~bash
senja-cli send-invites --help
senja-cli schema send-invites
~~~

~~~json
{
  "type": "object",
  "properties": {
    "form_id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact forms[].id from list_links."
    },
    "recipients": {
      "type": "array",
      "minItems": 1,
      "maxItems": 100,
      "items": {
        "type": "object",
        "properties": {
          "email": {
            "type": "string",
            "minLength": 1,
            "description": "",
            "format": "email"
          },
          "name": {
            "type": "string",
            "minLength": 1,
            "description": ""
          }
        },
        "required": [
          "email"
        ],
        "additionalProperties": false
      }
    },
    "account": {
      "type": "string",
      "description": "Exact configured private account profile label; not a tenant or provider account ID."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true for the requested mutation or exclusive private output file."
    },
    "payload": {
      "type": "object",
      "properties": {
        "form_id": {
          "type": "string",
          "minLength": 1,
          "description": "Exact forms[].id from list_links."
        },
        "recipients": {
          "type": "array",
          "minItems": 1,
          "maxItems": 100,
          "items": {
            "type": "object",
            "properties": {
              "email": {
                "type": "string",
                "minLength": 1,
                "description": "",
                "format": "email"
              },
              "name": {
                "type": "string",
                "minLength": 1,
                "description": ""
              }
            },
            "required": [
              "email"
            ],
            "additionalProperties": false
          }
        }
      },
      "required": [
        "form_id",
        "recipients"
      ],
      "additionalProperties": false,
      "description": "Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **POST /invites**. Provide native body fields OR payload OR payload_file, never mixed. Native body required: form_id, recipients

~~~json
{
  "name": "send_invites",
  "method": "POST",
  "path": "/invites",
  "title": "Send form invites",
  "description": "Send email invites using a selected form and its existing follow-up sequence. Local cap100 recipients, not a documented provider quota.",
  "group": "invites",
  "risk": "destructive",
  "params": [],
  "bodySchema": {
    "type": "object",
    "properties": {
      "form_id": {
        "type": "string",
        "minLength": 1,
        "description": "Exact forms[].id from list_links."
      },
      "recipients": {
        "type": "array",
        "minItems": 1,
        "maxItems": 100,
        "items": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string",
              "minLength": 1,
              "description": "",
              "format": "email"
            },
            "name": {
              "type": "string",
              "minLength": 1,
              "description": ""
            }
          },
          "required": [
            "email"
          ],
          "additionalProperties": false
        }
      }
    },
    "required": [
      "form_id",
      "recipients"
    ],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": false
}
~~~

#### list_accounts

Local profile labels/default/auth method only. No keys, token paths, provider identity or network request.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |

~~~bash
senja-cli list-accounts --help
senja-cli schema list-accounts
~~~

~~~json
{
  "type": "object",
  "properties": {},
  "required": [],
  "additionalProperties": false
}
~~~

#### get_operation_schema

Local reviewed method/path/query/body schema and provenance for one native tool. No credentials or provider request.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `operation` | string | Required | Exact native tool name, e.g. update_testimonial or send_invites. {"enum": ["list_testimonials", "get_testimonial", "create_testimonial", "update_testimonial", "delete_testimonial", "list_links", "send_invites"]} |

~~~bash
senja-cli get-operation-schema --help
senja-cli schema get-operation-schema
~~~

~~~json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "list_testimonials",
        "get_testimonial",
        "create_testimonial",
        "update_testimonial",
        "delete_testimonial",
        "list_links",
        "send_invites"
      ],
      "description": "Exact native tool name, e.g. update_testimonial or send_invites."
    }
  },
  "required": [
    "operation"
  ],
  "additionalProperties": false
}
~~~

#### preview_testimonial_batch

Local validation and SHA-256 of exact ordered testimonial/import/invite work, selected profile label and reviewed schema. No provider reads, key load, identity check, price or rollback guarantee.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `tasks` | array | Required | One to twenty exact ordered supported testimonial/import/invite operations. Invite requests may include up to 100 recipients each; review the exact complete recipient list and existing form follow-up sequence. {"minItems": 1, "maxItems": 20} |
| `tasks[].tool` | string | Required | {"enum": ["create_testimonial", "update_testimonial", "delete_testimonial", "send_invites"]} |
| `tasks[].arguments` | object | Required | Actual native tool arguments without account, confirm, payload_file or output_file. |
| `account` | string | Optional | Exact selected private account profile; binds label, not key ownership. |

~~~bash
senja-cli preview-testimonial-batch --help
senja-cli schema preview-testimonial-batch
~~~

~~~json
{
  "type": "object",
  "properties": {
    "tasks": {
      "type": "array",
      "minItems": 1,
      "maxItems": 20,
      "description": "One to twenty exact ordered supported testimonial/import/invite operations. Invite requests may include up to 100 recipients each; review the exact complete recipient list and existing form follow-up sequence.",
      "items": {
        "type": "object",
        "properties": {
          "tool": {
            "type": "string",
            "enum": [
              "create_testimonial",
              "update_testimonial",
              "delete_testimonial",
              "send_invites"
            ]
          },
          "arguments": {
            "type": "object",
            "description": "Actual native tool arguments without account, confirm, payload_file or output_file."
          }
        },
        "required": [
          "tool",
          "arguments"
        ],
        "additionalProperties": false
      }
    },
    "account": {
      "type": "string",
      "description": "Exact selected private account profile; binds label, not key ownership."
    }
  },
  "required": [
    "tasks"
  ],
  "additionalProperties": false
}
~~~

#### submit_testimonial_batch

Confirmed one-to-twenty ordered testimonial/import/invite tasks. Prevalidate all and verify exact hash before first request. Stop on first failure with known results/failed index/unattempted indices; no retries, rollback or implicit continuation.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `tasks` | array | Required | One to twenty exact ordered supported testimonial/import/invite operations. Invite requests may include up to 100 recipients each; review the exact complete recipient list and existing form follow-up sequence. {"minItems": 1, "maxItems": 20} |
| `tasks[].tool` | string | Required | {"enum": ["create_testimonial", "update_testimonial", "delete_testimonial", "send_invites"]} |
| `tasks[].arguments` | object | Required | Actual native tool arguments without account, confirm, payload_file or output_file. |
| `account` | string | Optional | Exact selected private account profile; binds label, not key ownership. |
| `confirm` | boolean | Optional | Set true only when the user asked for exactly this action. |
| `review_sha256` | string | Required | Exact preview_testimonial_batch hash for identical requests, profile label, schema and order. {"pattern": "^[a-f0-9]{64}$"} |

~~~bash
senja-cli submit-testimonial-batch --help
senja-cli schema submit-testimonial-batch
~~~

~~~json
{
  "type": "object",
  "properties": {
    "tasks": {
      "type": "array",
      "minItems": 1,
      "maxItems": 20,
      "description": "One to twenty exact ordered supported testimonial/import/invite operations. Invite requests may include up to 100 recipients each; review the exact complete recipient list and existing form follow-up sequence.",
      "items": {
        "type": "object",
        "properties": {
          "tool": {
            "type": "string",
            "enum": [
              "create_testimonial",
              "update_testimonial",
              "delete_testimonial",
              "send_invites"
            ]
          },
          "arguments": {
            "type": "object",
            "description": "Actual native tool arguments without account, confirm, payload_file or output_file."
          }
        },
        "required": [
          "tool",
          "arguments"
        ],
        "additionalProperties": false
      }
    },
    "account": {
      "type": "string",
      "description": "Exact selected private account profile; binds label, not key ownership."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this exact requested ordered batch."
    },
    "review_sha256": {
      "type": "string",
      "pattern": "^[a-f0-9]{64}$",
      "description": "Exact preview_testimonial_batch hash for identical requests, profile label, schema and order."
    }
  },
  "required": [
    "tasks",
    "review_sha256"
  ],
  "additionalProperties": false
}
~~~

#### export_testimonials

Confirmed paginated GET export to an exclusive new 0600 JSON file. Stop on short native page or local caps. Never downloads media, follows URLs, overwrites files, retries or implies an atomic complete backup.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `sort` | string | Optional | Native sort field; direction uses order. {"enum": ["date", "rating"]} |
| `order` | string | Optional | {"enum": ["asc", "desc"]} |
| `approved` | boolean | Optional | Exact native/schema value |
| `rating` | integer | Optional | {"minimum": 1, "maximum": 5} |
| `type` | string | Optional | {"enum": ["text", "video"]} |
| `integration` | string | Optional | {"enum": ["twitter", "product_hunt", "google", "facebook", "reddit", "capterra", "g2", "linkedin", "app_store", "trustpilot", "shopify", "play_store", "yelp", "slack", "discord", "apple_podcasts", "telegram", "whatsapp", "instagram", "youtube", "tiktok", "appsumo", "amazon", "zillow", "udemy", "chrome_web_store", "airbnb", "skillshare", "realtor", "sourceforge", "whop", "wordpress", "fiverr", "homestars", "web_page"]} |
| `tags` | array | Optional | {"maxItems": 100} |
| `query` | string | Optional | Native full-text search, including customer name/email; output may contain personal data. |
| `lang` | string | Optional | Native ISO 639 language selector. |
| `limit` | integer | Optional | Native page size. total counts only the current page. {"minimum": 1, "maximum": 1000} |
| `page` | integer | Optional | {"minimum": 1} |
| `account` | string | Optional | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | boolean | Optional | Set true only when the user asked for exactly this action. |
| `start_offset` | integer | Optional | Resume inside the first requested page using an export receipt offset and identical filters/page size. Provider state may have changed. {"minimum": 0, "maximum": 999} |
| `max_pages` | integer | Optional | Local request budget, default 10. {"minimum": 1, "maximum": 100} |
| `max_items` | integer | Optional | Local item budget, default 1000. May stop within a page; receipt records an offset. {"minimum": 1, "maximum": 10000} |
| `output_file` | string | Required | Absolute new file in an existing private directory. Restrict Windows ACLs separately. |

~~~bash
senja-cli export-testimonials --help
senja-cli schema export-testimonials
~~~

~~~json
{
  "type": "object",
  "properties": {
    "sort": {
      "type": "string",
      "enum": [
        "date",
        "rating"
      ],
      "description": "Native sort field; direction uses order."
    },
    "order": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "approved": {
      "type": "boolean"
    },
    "rating": {
      "type": "integer",
      "minimum": 1,
      "maximum": 5
    },
    "type": {
      "type": "string",
      "enum": [
        "text",
        "video"
      ]
    },
    "integration": {
      "type": "string",
      "enum": [
        "twitter",
        "product_hunt",
        "google",
        "facebook",
        "reddit",
        "capterra",
        "g2",
        "linkedin",
        "app_store",
        "trustpilot",
        "shopify",
        "play_store",
        "yelp",
        "slack",
        "discord",
        "apple_podcasts",
        "telegram",
        "whatsapp",
        "instagram",
        "youtube",
        "tiktok",
        "appsumo",
        "amazon",
        "zillow",
        "udemy",
        "chrome_web_store",
        "airbnb",
        "skillshare",
        "realtor",
        "sourceforge",
        "whop",
        "wordpress",
        "fiverr",
        "homestars",
        "web_page"
      ]
    },
    "tags": {
      "type": "array",
      "maxItems": 100,
      "items": {
        "type": "string",
        "minLength": 1,
        "description": "Nonempty tag name."
      }
    },
    "query": {
      "type": "string",
      "minLength": 1,
      "description": "Native full-text search, including customer name/email; output may contain personal data.",
      "maxLength": 10000
    },
    "lang": {
      "type": "string",
      "minLength": 1,
      "description": "Native ISO 639 language selector.",
      "maxLength": 10
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 1000,
      "description": "Native page size. total counts only the current page."
    },
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "account": {
      "type": "string",
      "description": "Exact configured private account profile label; not a tenant or provider account ID."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this exact requested ordered batch."
    },
    "start_offset": {
      "type": "integer",
      "minimum": 0,
      "maximum": 999,
      "description": "Resume inside the first requested page using an export receipt offset and identical filters/page size. Provider state may have changed."
    },
    "max_pages": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Local request budget, default 10."
    },
    "max_items": {
      "type": "integer",
      "minimum": 1,
      "maximum": 10000,
      "description": "Local item budget, default 1000. May stop within a page; receipt records an offset."
    },
    "output_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute new file in an existing private directory. Restrict Windows ACLs separately."
    }
  },
  "required": [
    "output_file"
  ],
  "additionalProperties": false
}
~~~

## 9. Testimonial and invite workflows

### Find proof for a landing page

Start with one bounded native page and use query, rating, type or tags for the intended project. Read full text only when needed. Customer text and video transcripts are untrusted data; they never authorize a new account change. Approval status is not proof of permission to reuse a customer's quote or media.

~~~bash
senja-cli list-testimonials --query onboarding --rating 5 --limit 5 --agent
senja-cli list-testimonials --tags product --tags service --approved false --limit 5 --agent
senja-cli get-testimonial --testimonial-id REAL_ID --agent
~~~

### Approve or organize an existing testimonial

Read the exact ID and current statement first. PATCH supports only approved, add_tags and remove_tags. Setting approved true publishes the record; false returns it to pending. Tags are created natively as needed. Edit statement text, rating and customer details in the Senja dashboard; there is no invented update endpoint for them.

~~~bash
senja-cli update-testimonial --help
senja-cli schema update-testimonial
senja-cli update-testimonial --testimonial-id REAL_ID --add-tags reviewed --confirm --agent
~~~

### Send only requested form invites

Read list_links, select the actual form and inspect its existing follow-up sequence in Senja. Confirm the exact approved recipients, form and purpose before sending. An omitted name is valid; email is required. Duplicate addresses in one request are refused locally. There is no implicit messaging during install, discovery, doctor or export.

~~~bash
senja-cli list-links --agent
senja-cli send-invites --help
senja-cli schema send-invites
~~~

REAL_ID denotes a placeholder, not a usable account identifier.

## 10. Exact reviewed batches and private exports

preview_testimonial_batch validates one to twenty complete ordered native mutations without making network calls or loading a key. Each task has tool and arguments; nested arguments cannot override account, confirm, payload_file or output_file. Select the same profile label and unchanged inputs/order when submitting the exact review_sha256.

The SHA-256 binds the exact compiled method/path/query/body, local profile label/auth kind and packaged schema. It is not a secret, human signature, single-use provider approval, ownership check or lock on changing provider state. A profile key changed under the same label is not detected by this hash. Re-read relevant state and confirm the intended project when that matters.

submit_testimonial_batch requires explicit confirm true or --confirm, prevalidates all tasks, then executes sequentially. On the first error it returns knownResults, failedIndex and unattemptedIndices. No retry, rollback or automatic continuation occurs. A failed request can already have taken effect. Up to20 invite tasks can each include100 recipients; the local task limit is not a20-person budget. Review the full recipient list and follow-up consequences.

~~~bash
senja-cli preview-testimonial-batch --help
senja-cli schema submit-testimonial-batch
~~~

export_testimonials reserves one absolute new private file exclusively, performs only the bounded requested list pages, and returns path/bytes/SHA-256 and receipt metadata. Defaults: 10 pages, 1,000 items, native page size 100. Local caps: 100 pages, 10,000 items and 5 MiB final JSON. A short native page signals exhaustion within the selected filters at that moment. Native total counts the current page, not the entire project.

When a local cap stops the walk, continuation reports page, offset and limit. Resume with that page, identical filters/page size and start_offset. Page changes can cause shifted records; no atomic snapshot, complete backup or deduplication guarantee is made. A second resume writes a different new file; it never appends to or overwrites the earlier export. Review/de-duplicate native IDs when combining evolving pages.

Failure removes only the file this export newly created. Media URLs and transcript metadata remain JSON data; this package never follows or downloads them. Read-only mode refuses file output too. Restrict parent-directory privacy and Windows ACLs separately.

~~~bash
senja-cli export-testimonials --help
senja-cli schema export-testimonials
~~~

## 11. Several private projects



SENJA_ACCOUNTS is a private JSON array of unique {name,api_key,token_file} profiles. Use one credential method per profile. SENJA_DEFAULT_ACCOUNT selects the default label and --account selects an exact label. An incomplete named profile never inherits a global key, another project or an official hosted session after a missing credential or 401/403.

list_accounts returns labels/default/auth/source only, without keys, token paths, native project identity or network traffic. Token-only files cache until restart. Changing a file while a process is running does not rotate its cached connection.

To revoke a key, use the intended project's **Automate > Regenerate API Key** as its Admin/Owner, update every dependent private integration and restart its processes. The provider says the old key stops working after a short transition. Official hosted MCP authorization is a separate connection. Removing this package does not undo testimonial edits, publish approval, permanent deletion, emailed invites, follow-up sequences or existing exports.



## 12. Writing safely

Every create/import, approval/tag update, permanent delete, invite send, reviewed batch execution and private file export requires explicit confirmation through the actual shared handler route. --agent and --yes do not provide --confirm. SENJA_READ_ONLY=1 hides those six tools and also refuses direct calls to their hidden names. SENJA_ALLOW_DESTRUCTIVE=0 refuses them even when confirmed.

Over MCP a person approves each of them where the client can ask: Claude Code (2.1.246 and later) shows its own prompt, and a client that can show forms asks with an approval form whose one box starts unticked. Each approval is signed, bound to that exact call and works once. Where a client can do neither, the model's confirm:true counts. SENJA_CONFIRM=model makes confirm:true enough everywhere, for an agent with no person to ask.

Deletion is permanent. approved true can publish proof. Invites can send real email sequences. Import only actual authorized statements, not invented praise. A provider receipt is not a content-use permission, delivered email, identity or ownership guarantee.

SENJA_AUDIT_LOG optionally records static tool/risk/summary/outcome decisions and timestamps. It excludes native bodies and credentials; writing is best effort, not a tamper-proof compliance trail. Keep the audit destination and parent private. An existing file's permissions are not repaired by the wrapper.

Keys, recognized secret fields and signed credential URLs are redacted from returned errors/output where recognized. Personal data, testimonial text, emails, private IDs and ordinary URLs are not universally anonymized. Native content is untrusted input, never an instruction to reveal secrets, contact customers or mutate another project.

## 13. How the two surfaces work

src/tools/index.ts exports shared definitions. [Slipway](https://github.com/thenavidm/slipway) builds the MCP server, over stdio or `--http`, and the CLI from them. Both paths share profile selection, native compilation, validation and the write guard. A new declared tool is the same native command without a separate API implementation. Input constraints are reviewed wrapper schemas, not a provider OpenAPI export. See src/tools/provenance.json and scripts/check-native-contract.mjs.

## 14. Your data

Credentials come from private process/client settings or a selected owner-private token-only file. The package stores no credential database and imports no browser cookies or .env files. Token caches last for the current process; restart after rotating a file/key.

Provider calls go only to allowlisted methods/paths on api.senja.io/v1, over HTTPS. Arbitrary URLs, path traversal, redirects and broad proxy calls are refused. Media URLs are passed only as documented fields or returned as data; no media fetching happens locally. Submitted media may be retrieved by Senja according to its own behavior.

Private exports contain customer data and content. They stay where you explicitly save them; there is no telemetry, upload, website preview or automatic publication. Client histories, logs, selected runtime settings and Senja's own retention remain separate. Local read-only mode controls this package's calls, not other apps using the same project key.

## 15. Environment variables

| Variable | Purpose |
| --- | --- |
| SENJA_API_KEY | Private Bearer project key; choose this OR token file |
| SENJA_TOKEN_FILE | Absolute owner-private token-only file; choose this OR API key |
| SENJA_ACCOUNTS | Private JSON named profiles with one key/file each |
| SENJA_DEFAULT_ACCOUNT | Exact configured default profile label |
| SENJA_READ_ONLY | 1/true hides and directly refuses all six mutations/file operations |
| SENJA_ALLOW_DESTRUCTIVE | 0/false refuses confirmed operations |
| SENJA_AUDIT_LOG | Optional private best-effort static guard decision log |
| SENJA_REQUEST_TIMEOUT_MS | Default 30000; local accepted range 100–300000 ms |
| SENJA_MIN_REQUEST_INTERVAL_MS | Default 250; local accepted range 0–10000 ms, not distributed native quota enforcement |
| SENJA_CONFIRM | human by default; model lets confirm:true alone approve over MCP, for an agent with no person to ask |
| SENJA_SURFACE | full by default; search lists three tools that find, describe and run the rest |
| SENJA_TOOL_TIMEOUT_MS | Give up on any tool after this long |
| SENJA_HTTP_PORT, SENJA_HTTP_HOST, SENJA_HTTP_TOKEN | For --http: port 8787 and host 127.0.0.1 by default; any other host needs the bearer token |
| SENJA_HTTP_ALLOWED_ORIGINS | Comma-separated browser origins allowed to call --http; a page from any other site is refused |
| SENJA_DEBUG | 1 prints debug lines on stderr |

## 16. Updates and removal

Use the update/removal steps in [INSTALL.md](INSTALL.md#updates-and-removal). Restart processes after key changes. File outputs and native effects remain until deliberately handled. Reinstall a new desktop bundle manually; npm@latest does not hot-replace a running server.

## 17. Troubleshooting

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

## 18. API coverage and comparisons

### Official hosted MCP

Senja already has [official account MCP](https://support.senja.io/how-do-i-connect-senja-to-claude-with-mcp-vhvfi) at https://mcp.senja.io. It searches testimonials, finds proof for a use case, creates testimonials, tags records, retrieves asset links/embeds and sends form invites. Current setup docs include Free, Starter and Pro. Hosted account authorization and client approvals are separate from this local API-key package.

Use the official connector when that native experience fits your task. A dedicated official task CLI was not identified in the provider material reviewed on October 3, 2026; this is not a universal or permanent absence claim. This package does not claim to add invites that the official MCP already supports, expose every Senja UI feature, create Studio graphics or replace native embed editing.

### Reviewed community server

[andrewconnell/senja-mcp](https://github.com/andrewconnell/senja-mcp) at commit 417445647eac47f94c2d12d9196a68d2e1d22559 exposes three testimonial MCP tools. Its inspected API client already uses Bearer auth, separate sort/order, lang/limit and repeated tag query values. Its package does not declare a standalone task CLI; its create handler has no mandatory confirmation argument. This says nothing about external clients' approval controls.

The reviewed interface describes a data array and paid-plan prerequisite; current provider documentation describes testimonials and current-page total, and covers Free/Starter/Pro. Our request/response fixtures follow current provider fields. Community customer_website is not the current documented customer_url field.

### Useful owned workflows and limits

The verified addition is a shared task CLI/local MCP with isolated named project profiles, mandatory mutation/file approval, direct read-only refusal, locally reviewed ordered writes and bounded private paginated export with explicit page/offset continuation. These controls are exercised in fixtures and real protocol/CLI processes. They do not establish overall superiority, authenticated account outcomes or token savings.

| Capability | This package | Existing alternatives |
| --- | --- | --- |
| Task interface | 12 shared MCP tools and task CLI commands | Official hosted MCP and reviewed community stdio MCP |
| Native public API | Seven reviewed documented endpoints | Official hosted tools may cover different native features |
| Project credentials | Unique local profiles, no global credential fallback | Official connector authorization stays native |
| Ordered changes | Exact local hash, prevalidation, stop on failure | Not a provider-state lock or replacement for client approval |
| Private export | Bounded pages/items/bytes and exclusive JSON file | Not an atomic complete backup, consent registry or media downloader |
| Task tokens | Measured against 2.0.1 in README section 7 | No comparison with another offering |

## 19. Versions and migration

| Component | Reviewed version |
| --- | --- |
| Package/desktop | 3.0.0 |
| Slipway | 0.1.20 |
| Native public API | v1; seven endpoints checked 2026-10-03 |
| Community source | 417445647eac47f94c2d12d9196a68d2e1d22559 |
| Node | >=22 |
| Historical private MCP | 1.0.0; three tools |
| Matched Codex task/token usage | Measured against 2.0.1 in README section 7 |

| Legacy caller | Current contract | Required change |
| --- | --- | --- |
| per_page | limit | Use native page-size field |
| language | lang | Use native language selector |
| date_asc/date_desc sort | sort date/rating plus order | Send field and direction separately |
| tags string | tags array | Repeat --tags or use a JSON array |
| create name/email/headline/company | customer_name/customer_email/customer_tagline/customer_company | Use native fields and required type |
| avatar_url/company_logo_url | customer_avatar/customer_company_logo | Use native HTTPS fields |
| url used as customer website | url is source; customer_url is customer website | Choose the actual intended field |
| Three tools with startup key requirement | 12 tools with credential-free discovery and guarded effects | Discover tools before private setup; update scripts for approval |
| No CLI binary | senja-cli and senja-mcp | Use @thenavidm scope and @latest |

[CHANGELOG.md](CHANGELOG.md) records the dated major update. Private legacy history stays private; source publishing starts from a clean verified snapshot, preserving AGPL-3.0.

## 20. FAQ

<details>
<summary><b>Does Senja already have an official MCP?</b></summary>

Yes. Its hosted connector already searches testimonials, creates proof, retrieves asset links and sends form invites. This package adds a shared terminal/local task interface and the documented local workflows. Use the official option when it fits your needs; the comparison does not claim ours replaces its full native feature set.

</details>

<details>
<summary><b>Why offer this CLI alongside MCP?</b></summary>

The CLI runs the same tools through the same handlers, input validation and write guard, built by [Slipway](https://github.com/thenavidm/slipway) from each tool's one definition. Scripts can use JSON, field selection and exit codes. A dedicated official task CLI was not identified in the reviewed provider material; that finding is dated, not a permanent absence claim.

</details>

<details>
<summary><b>Which Senja plans are covered?</b></summary>

Current provider REST and MCP setup documentation includes Free, Starter and Pro. Account restrictions and native feature eligibility remain in Senja. The package is free under AGPL-3.0 and cannot bypass a plan or permission check; do not reuse older community paid-only prerequisites as current facts.

</details>

<details>
<summary><b>Where do I get and store my API key?</b></summary>

Choose the intended project and open Automate in Senja. Store exactly one key privately in SENJA_API_KEY or an absolute owner-private SENJA_TOKEN_FILE outside repositories. The client uses Bearer authentication. Never paste resolved secrets into README examples, public issues, screenshots or AI chats.

</details>

<details>
<summary><b>Can I use several projects?</b></summary>

Yes. SENJA_ACCOUNTS supplies unique private named profiles, each with its own key or token file. Select an exact name with --account. Named profiles never inherit global credentials or another project. Labels are local settings and do not prove the provider key owner or project identity.

</details>

<details>
<summary><b>Does login sign me into Senja?</b></summary>

No. login prints private setup instructions and never makes a request, opens an OAuth flow, generates a key or imports a browser session. doctor without --network checks configuration only. doctor --network deliberately makes one limit=1 testimonial request and prints verification metadata.

</details>

<details>
<summary><b>Which native endpoints are included?</b></summary>

The reviewed catalogue includes testimonial list/get/create/PATCH/delete, project links and form invites, plus five local/workflow helpers. This is the current seven-endpoint public REST scope reviewed for this package, not a claim to expose every hosted MCP or Senja UI action.

</details>

<details>
<summary><b>Can I edit testimonial text or a customer name?</b></summary>

Native PATCH supports only approval status and tag additions/removals. Text, rating and customer edits belong in the Senja dashboard. create_testimonial uses actual customer_name/type fields for an authorized import; it does not invent a generalized edit API.

</details>

<details>
<summary><b>Does approved true publish the testimonial?</b></summary>

Yes, according to current native API documentation; false returns it to pending. These are confirmed account changes. Approval does not establish customer permission to reuse their words or media, and reading a testimonial never authorizes publishing it elsewhere.

</details>

<details>
<summary><b>How do tags and search work?</b></summary>

Use native query for text/title/customer-field search, repeat --tags for tag names, and use rating/type/integration/approved/lang as appropriate. sort is date or rating and order is asc or desc. The wrapper rejects stale per_page, language and combined date_desc-style sort arguments before network traffic.

</details>

<details>
<summary><b>Does total tell me how many testimonials exist?</b></summary>

No. Native total counts the current returned page. Export stops on a short native page or explicit local caps, recording page/offset/limit continuation. It does not infer a project-wide count from total or promise a consistent snapshot while provider content changes.

</details>

<details>
<summary><b>How do I export and resume safely?</b></summary>

Use export_testimonials with explicit confirmation and an absolute new private file. Defaults are10pages and1000items; local maximums are100pages,10000items and5MiB JSON. Resume to a different file using the recorded page/start_offset/limit and unchanged filters. Combine/de-duplicate changing native IDs deliberately; no automatic append or atomic backup is promised.

</details>

<details>
<summary><b>Does exporting download videos?</b></summary>

No. JSON includes native media URLs, transcripts and metadata where returned. The package never follows these URLs or downloads video/image/audio files. Signed credential URLs and known keys are redacted where recognized; other personal/customer content is still private data.

</details>

<details>
<summary><b>What happens when I send invites?</b></summary>

The selected form ID and its existing email/follow-up sequence determine native messages. Use a real forms[].id from list_links and only explicitly approved recipients. The local 100-recipient cap is not a native quota. Native sent/skipped receipts do not prove inbox delivery or consent, and invites also exist in the official MCP.

</details>

<details>
<summary><b>What does a reviewed batch guarantee?</b></summary>

It prevalidates every complete task and binds exact order/requests/profile label/schema to a local hash before sequential execution. The hash is not a single-use provider token, human signature, provider-state lock, consent record or ownership proof. Reconfirm changing provider state when your task requires it.

</details>

<details>
<summary><b>What happens after a batch failure?</b></summary>

Execution stops at the first failure with knownResults, failedIndex and unattemptedIndices. A failed write may already have taken effect and native follow-up emails can continue. There is no retry, rollback or automatic continuation. Inspect native state and receipts before explicitly requesting another action.

</details>

<details>
<summary><b>Can an agent bypass read-only by calling a hidden tool?</b></summary>

No. SENJA_READ_ONLY=1 both hides the six confirmed tools and refuses direct hidden calls through the actual handlers. It also refuses private file exports. SENJA_ALLOW_DESTRUCTIVE=0 disables these effects even when confirmed; --agent and --yes never provide explicit --confirm.

</details>

<details>
<summary><b>Does this work with Codex and other clients?</b></summary>

Codex and compatible local stdio clients can register npx -y @thenavidm/senja-mcp-cli@latest. INSTALL.md covers Claude Code/Desktop, Cursor, VS Code/Copilot, Windsurf, Zed, Gemini CLI, Docker and other stdio clients, plus Windows/macOS/Linux runtime notes. Browser-only clients need a remote connector such as the official hosted MCP.

</details>

<details>
<summary><b>Is the desktop bundle automatically updated?</b></summary>

The .mcpb includes production dependencies and asks for private sensitive settings or a token file, but compatible hosts still need a Node 22 runtime and organization support. Install newer bundle versions manually. npx@latest resolves the current registry version when the server is restarted; it does not replace a running process or provide guaranteed background updates.

</details>

<details>
<summary><b>Is the CLI cheaper or better overall?</b></summary>

In Claude Code the CLI costs nothing until it is used, plus about 2,440 tokens for `SKILL.md` once, where the server costs about 740 tokens a message with tool search and 7,600 with every tool loaded. In Codex, finding the command that sends testimonial invites and its flags took a median of 126,370 input tokens over the CLI and 45,393 over MCP. Section 7 has how each was measured. Proven fixture behavior and actual public artifact checks are listed separately from authenticated outcomes and desktop GUI acceptance.

</details>

## Questions

Open a [secret-free issue](https://github.com/thenavidm/senja-mcp-cli/issues). Read [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md).

## About the author

Navid Moazzez is a leading AI business strategist, and the host of the AI Creator Summit, watched by 100,000+ creators. He helps creators and founders master AI and build their own AI Operating System (AI OS) to automate their business and life. He creates useful free tools, MCP servers and CLIs that creators and founders can use in their own workflows.

**Links**

- Personal website: [navid.me](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=senja-mcp-cli&utm_content=readme)
- Link in bio: [navid.bio](https://navid.bio?utm_source=github&utm_medium=referral&utm_campaign=senja-mcp-cli&utm_content=readme)
- Navid Media: [navid.media](https://navid.media?utm_source=github&utm_medium=referral&utm_campaign=senja-mcp-cli&utm_content=readme)
- YouTube: [@thenavidm](https://youtube.com/@thenavidm?sub_confirmation=1) and [@thenavidai](https://youtube.com/@thenavidai?sub_confirmation=1)
- X: [@thenavidm](https://x.com/thenavidm)
- Instagram: [@thenavidm](https://instagram.com/thenavidm)
- LinkedIn: [thenavidm](https://linkedin.com/in/thenavidm)

If this is useful, star the repo and come say hi on [X](https://x.com/thenavidm).

## Dependencies

Runtime: Slipway, which brings the MCP TypeScript SDK, plus Ajv and ajv-formats. Development: TypeScript, Vitest, Vite and MCPB. Exact locked versions appear above. Packaging tools are excluded from desktop runtime.

## License

Preserves [AGPL-3.0](LICENSE) and existing private legacy history. Read [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). Senja service terms and trademarks remain separate.

---

© 2026 [Navid Media](https://navid.media?utm_source=github&utm_medium=referral&utm_campaign=senja-mcp-cli&utm_content=readme). Made with ❤️ by [Navid Moazzez](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=senja-mcp-cli&utm_content=readme).
