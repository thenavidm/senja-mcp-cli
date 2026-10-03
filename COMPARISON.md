# Senja comparison

Reviewed2026-10-03.

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
| Task tokens | Actual matched Codex measurement pending | No percentage or zero-total-token claim |

MCP clients can load all schemas, defer discovery, or load selected schemas; the mode changes input overhead. CLI use still needs command/schema discovery and model-readable results. --agent and --select can reduce formatting/output for an appropriate task, but do not prove smaller total cost.

Codex is the current verification client. No completed matched provider task/token comparison has been measured for this release. Record actual model/client/package versions, dates, loading settings, prompt/result sizes, successful equivalent outcomes and API usage before publishing numbers. Do not estimate tokens from characters or reuse another client's measurements. Installed skills may incur recurring listing and one-time reading costs, and caching changes billed cost separately from token counts.
