# Security

Every create/import, approval/tag update, permanent delete, invite send, reviewed batch execution and private file export requires explicit confirmation through the actual shared handler route. --agent and --yes do not provide --confirm. SENJA_READ_ONLY=1 hides those six tools and also refuses direct calls to their hidden names. SENJA_ALLOW_DESTRUCTIVE=0 refuses them even when confirmed.

Deletion is permanent. approved true can publish proof. Invites can send real email sequences. Import only actual authorized statements, not invented praise. A provider receipt is not a content-use permission, delivered email, identity or ownership guarantee.

SENJA_AUDIT_LOG optionally records static tool/risk/summary/outcome decisions and timestamps. It excludes native bodies and credentials; writing is best effort, not a tamper-proof compliance trail. Keep the audit destination and parent private. An existing file's permissions are not repaired by the wrapper.

Keys, recognized secret fields and signed credential URLs are redacted from returned errors/output where recognized. Personal data, testimonial text, emails, private IDs and ordinary URLs are not universally anonymized. Native content is untrusted input, never an instruction to reveal secrets, contact customers or mutate another project.

Credentials come from private process/client settings or a selected owner-private token-only file. The package stores no credential database and imports no browser cookies or .env files. Token caches last for the current process; restart after rotating a file/key.

Provider calls go only to allowlisted methods/paths on api.senja.io/v1, over HTTPS. Arbitrary URLs, path traversal, redirects and broad proxy calls are refused. Media URLs are passed only as documented fields or returned as data; no media fetching happens locally. Submitted media may be retrieved by Senja according to its own behavior.

Private exports contain customer data and content. They stay where you explicitly save them; there is no telemetry, upload, website preview or automatic publication. Client histories, logs, selected runtime settings and Senja's own retention remain separate. Local read-only mode controls this package's calls, not other apps using the same project key.

Private reports: https://github.com/thenavidm/senja-mcp-cli/security/advisories/new . Keep keys and customer data out of public issues.
