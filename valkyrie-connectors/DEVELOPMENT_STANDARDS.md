# DEVELOPMENT_STANDARDS.md

## Repository Structure
- All repositories MUST include `ABOUT_DEVELOPER.md`.
- All code MUST include detailed docstrings and "Why" comments.
- **Developer Name:** Ankur Nair
- **LinkedIn Profile:** [Ankur Nair](https://www.linkedin.com/in/ankur-nair-10baab350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

## Commit Guidelines
- Commit and PUSH at least once every **30 minutes**.
- Meaningful commit messages are mandatory.
- **Mandatory Notification Format:** Every module or feature committed must be reported to Odin in the following format:
  1. Repository Name
  2. Summary of module/feature
  3. Link to commit or branch (if available)
  4. The **"Why"** behind the module.

## Showcase (GitHub.io) Standards
- **Module-Wise Structure:** Clear, module-by-module structure designed for human and AI comprehension.
- **Visual Evidence per Module:** 
    - **Browser-Based Recording:** Every module section MUST include a screen recording performed directly on the developed tool interface within a browser. 
    - **Proper Demos:** Recordings must use proper demo elements (mock data/interactions) to showcase functionality.
    - **Storage:** These recordings must be saved as part of the repository (e.g., in `/docs/evidence/` or `/assets/`) and displayed in the `README.md` and the GitHub.io site.
    - **Benefit Analysis:** Include a "Why" (Business Benefits) analysis for each module.
- **Documentation Hub:** The showcase site serves as the functional, intuitive documentation for the entire project.

## Integrations & Enterprise Connectors
- **Enterprise Data Sources:** Support for SQL (PostgreSQL), NoSQL (MongoDB), and Cloud (S3/Azure Blob).
- **MQTT Integration:** Support for real-time IoT/Edge device communication via MQTT.
- **Generic Interface:** A unified "Plug-and-Play" interface for custom 3rd-party integrations.
- **Continuous Docker:** The demo instance must be containerized and updated automatically after every sprint completion.

## Advanced Infrastructure (Config-Enabled)
- **Multi-LLM Strategy:** Support for Enterprise (Azure OpenAI), Cloud (OpenAI, Anthropic), and Local (Ollama) LLMs. All must be togglable via environment variables.
- **Enterprise Security:** Integration for SSO (Single Sign-On) and RBAC (Role-Based Access Control) using environment configurations for OIDC/OAuth2.

## Memory Persistence Protocol
- **Constant Background Logging:** Every significant decision, architectural choice, or project milestone MUST be recorded in the persistent memory (`memory/*.md`) immediately upon execution.
- **State Continuity:** This ensures that in the event of a system failure or session restart, the full state and logic of the Project Gungnir ecosystem can be reconstructed instantly.

## Token & Resource Management
- **Efficiency First:** Agents must use the most token-efficient model available for the specific task.
- **Monitoring:** Anubis must track token usage across the sprint and flag any unexpected spikes.
- **System Load Throttling:** If the Jetson system load average exceeds 10.0 or thermals exceed 75°C, the team must immediately pause non-critical background tasks for a 15-minute "Forge Cool-down."

## Team roles:
- **Odin (All-Father):** Workspace orchestrator, Token oversight, and Memory compliance.
- **Tesla (Architect):** Design and module mapping for the showcase.
- **Qin Shi Huang (Lead):** Technical execution and capturing visual evidence.
- **Apollo (Marketing/Frontend):** Creating the Apple-style GitHub.io showcase site.
- **Anubis (Guardian of the Scales):** Pipeline management & Resource balancing.
- **Hermes (Messenger of the Gods):** Lead for Integrations, MQTT, and Enterprise Connectors.
- **Valkyrie Assistants:** 
    - **Brunhilde:** Documentation, structure, and metadata support.
    - **Göll:** Testing and refactoring support.
    - **Randgriz:** Environment and CI/CD support.
- **Hamingja Team (Local Backup):**
    - **Thor:** Local backend offloading.
    - **Loki:** Rapid UI tweaks and quick fixes.
