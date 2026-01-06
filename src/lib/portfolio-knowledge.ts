import { resumeFacts } from "@/data/resumeFacts";
import { portfolioData } from "@/data/portfolio";
import { contactPreference } from "@/data/contactPreference";

export function buildPortfolioKnowledge() {
  return `
PROFILE:
- Name: ${resumeFacts.profile.name}
- Location: ${contactPreference.location}
- Open to: Remote=${
    contactPreference.openToWork.remote ? "Yes" : "No"
  }, Hybrid=${contactPreference.openToWork.hybrid ? "Yes" : "No"}, Onsite=${
    contactPreference.openToWork.onsite ? "Yes" : "No"
  }
- Target locations: ${contactPreference.targetLocations.join(", ")}

- Role: ${resumeFacts.profile.role}
- Experience: ${resumeFacts.profile.experienceYears} years
- Summary: ${resumeFacts.profile.summary}

CONTACT:
- Email: ${contactPreference.email}
- Scheduler: ${contactPreference.scheduler.label} — ${
    contactPreference.scheduler.url
  }


CORE SKILLS:
${resumeFacts.coreSkills.map((s) => `- ${s}`).join("\n")}

WORK EXPERIENCE:
${resumeFacts.experience
  .map(
    (e) => `
${e.company} (${e.period}) — ${e.role}
Product: ${e.product}
Key Impact:
${e.highlights.map((h) => `- ${h}`).join("\n")}
`
  )
  .join("\n")}

PROJECTS:
${resumeFacts.projects
  .map(
    (p) => `
${p.name}
Stack: ${p.stack.join(", ")}
Impact: ${p.impact}
`
  )
  .join("\n")}

CHAT CONTEXT:
- Greeting: ${portfolioData.chat.greeting}

IMPORTANT RULE:
Only answer questions using the facts above.
If the answer is not present, say you don’t have that information yet.
`.trim();
}
