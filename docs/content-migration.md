# Content migration

Source: frenchiefam/frenchiefam.github.io, recorded in migration-manifest.json.
All five original HTML pages and their media/assets are retained byte-for-byte under public/legacy. Existing bio is included verbatim after the new introduction. Original service summaries, process, digital services, case studies, clip samples, Fiverr, Gumroad, email and handyman links remain accessible. Existing GitHub identity added explicitly. Private Gitea is labeled as requiring tailnet access.

Only build/debug leftovers (logs, temporary renders, backup files, old task/deployment notes, Git metadata, and old CNAME) are excluded from the published snapshot. The complete original clone remains locally in ignored .migration/current-site. Old social images and branding remain intentionally preserved with the original pages.

No completed automatic Sonarr import/push-notification feature is claimed for Baddies GUI; those are separate integrations. Its project is marked Paused (Stable).

Known source issues are preserved: the gaming sample is marked coming soon and its media file is absent; it is not presented as a completed project. The legacy homepage's canonical URL/old metadata remain historical. Verify the handyman project route before any custom-domain cutover; it belongs to a separate site/repository.
