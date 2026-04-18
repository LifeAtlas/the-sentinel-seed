---
title: "Personal Health Digital Twins as the Glue for Cross-Border Patient Data"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: health digital twin, medical tourism, cross-border healthcare, patient data sovereignty, interoperability, FHIR, HL7, SMILE methodology, personal health record, jurisdictional fragmentation, data portability, Actor-Network Theory, design science research
status: ready
date: 2026-04-16
---

# Personal Health Digital Twins as the Glue for Cross-Border Patient Data

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-16

---

## Abstract

Medical tourism — the movement of patients across national borders to receive healthcare — generates a data fragmentation problem that existing health information architectures are structurally incapable of solving. The patient's health record is distributed across the systems of their home country's providers, the destination country's treating institution, any transit care providers, and the patient's own wearable and home monitoring devices. No single institution owns a complete record. No interoperability standard currently deployed at scale is able to unify these fragments across the jurisdictional, regulatory, and technical barriers that separate them. This paper reports analysis from a 65-minute session with a hospital consortium engaged in exactly this problem: how to provide continuity of care for patients who receive treatment in one country and follow-up care in another. We argue, following the SMILE methodology, that the patient IS the persistent layer across jurisdictions — the only actor who crosses every institutional boundary and has a stake in the completeness of their own health record. From this premise, we derive an architecture in which the patient's personal health digital twin is the data integration point: a sovereign personal health record that the patient carries, controls, and presents to each care provider at each institutional boundary. We analyse this architecture through ANT, identifying the actants whose enrollment is required and the translations that must be performed to make patient-sovereign data integration operationally viable. We engage the primary counter-argument — that patients cannot be trusted to maintain accurate health records — and argue that this counter-argument confuses data custody with data accuracy, and that audit trail requirements on the patient-sovereign record can preserve accuracy accountability without removing custody. Three falsifiable propositions are stated regarding cross-border care continuity outcomes, patient record completeness, and institutional adoption dynamics. This paper contributes to the growing literature on personal health data sovereignty and the architectural conditions under which sovereign patient records become viable at national and supranational scale.

**Keywords:** health digital twin, medical tourism, cross-border healthcare, patient data sovereignty, interoperability, FHIR, HL7, SMILE methodology, personal health record, jurisdictional fragmentation, data portability, Actor-Network Theory, design science research

---

## 1. Introduction: The Record That Lives Nowhere

Consider a patient who undergoes elective orthopaedic surgery at a specialist facility in one country, receives post-operative care at a rehabilitation centre in a second country, and returns home to their GP in a third country for ongoing management and physiotherapy referral. At each institutional boundary, the receiving clinician faces the same problem: they have a patient in front of them whose health record is, in the most operationally important sense, absent. The surgical record is in the operating institution's system. The rehabilitation notes are in a second system. The GP's own records contain the patient's pre-surgical history but nothing that happened abroad.

This is not a data standards problem in the narrow technical sense. HL7 FHIR [1], the most widely adopted health data interoperability standard, provides a technically adequate mechanism for representing and exchanging the clinical information that each institution holds. The problem is that no institution in this pathway has a mandate, an incentive, or a technical mechanism for assembling the complete record from all three jurisdictions and making it available to the next care provider in the sequence.

The hospital consortium whose session grounds this paper was grappling with this problem in a specific operational context: a network of facilities that had identified medical tourism patients as a growing patient segment, were experiencing avoidable adverse events attributable to information gaps at care transitions, and had engaged with a digital health platform to explore whether a shared patient record infrastructure could solve the problem. The session explored the technical and institutional barriers to this solution.

Our analysis diverges from the consortium's initial framing. The consortium's instinct was to build a shared institutional record: a central repository that each facility in the network would write to and read from. We argue that this framing misidentifies the architecture's persistent layer. Institutions come and go; networks dissolve; systems are replaced. The patient is always there. The patient is the only actant who has continuous presence across the entire care pathway, regardless of which institutions are involved. The patient's personal health digital twin should be the persistent layer — and the institutions should be the contributors to and consumers of that layer, not its custodians.

---

## 2. Theoretical Framework

### 2.1 The Patient as Persistent Layer: SMILE Applied

The SMILE methodology (Waern 2026a, DOI: 10.5281/zenodo.19587944) provides the primary design framework. The as-is state is a medical tourism patient whose health record is fragmented across three or more institutional systems in two or more jurisdictions, producing information gaps at every care transition. The to-be state is a patient whose health digital twin is complete, current, portable, and authoritative at every care transition regardless of the institutional participants. The methodology requires that every design decision be evaluated by whether it moves toward the to-be state and whether it does so durably — without creating new dependencies that will recreate the fragmentation problem under different circumstances.

The key insight the methodology generates in this context is that institutional shared record architectures are architecturally fragile: they depend on the continued participation of all network members, the sustained maintenance of the shared infrastructure, and the ongoing alignment of each institution's system with the network's interoperability requirements. Patient-sovereign architectures depend on none of these: they require only that the patient has a device capable of presenting their record and that receiving institutions have a mechanism for reading it.

### 2.2 ANT and Healthcare Interoperability Networks

ANT [2][3] is appropriate for analysing healthcare interoperability because the barriers to cross-border health record integration are primarily institutional rather than technical: different national regulatory frameworks for health data, different liability regimes for clinical decision-making based on externally provided records, different institutional cultures around data provenance and trust.

The actors whose enrollment is required include: the patient (the primary beneficiary, but not the primary institutional actor); the care provider at each transition point (who needs reliable data and is exposed to liability for decisions made on incomplete information); the health information technology systems of each institution (non-human actants whose API capabilities and data models constrain what integration is technically possible); national health data regulatory authorities (whose frameworks define what data can cross borders and in what form); and the personal health record platform (the proposed network builder).

### 2.3 Jurisdictional Fragmentation as a Translation Problem

In ANT terms, the medical tourism data fragmentation problem is a translation failure: the patient's health journey crosses multiple obligatory passage points [3] — each institutional system, each national data governance framework — without an actor capable of performing the translation that would carry the patient's data through each passage point intact. The patient themselves is the only candidate for this translator role: only the patient has the standing to cross every institutional boundary and the motivation to ensure their own data is complete.

The translation the patient must perform: presenting their health record to each new institution in a form that the institution's clinicians can trust and their systems can ingest. This requires that the patient's record is structured according to a standard that the receiving institution's systems can parse (FHIR), that its provenance is auditable (institutional signatures on each contributed record segment), and that the patient's access to and presentation of the record does not compromise its integrity (immutable record with patient-controlled access layer, not patient-editable record).

---

## 3. The Medical Tourism Data Problem in Detail

### 3.1 The Magnitude of the Gap

Medical tourism volumes are substantial and growing. A 2023 industry analysis estimated 15–23 million medical tourism visits annually, concentrated in specific corridors (Western Europe to Turkey, Germany and UK to Thailand and India, North America to Mexico and Costa Rica) where cost differentials for specific procedure categories create persistent demand flows [4]. Each visit generates a health record segment that the patient's home country GP will almost certainly never see.

The clinical consequences are observable. Adverse drug reactions from medications prescribed abroad that interact with home country medications; delayed follow-up care because referral letters are not transmitted or are transmitted in a language the GP cannot read; rehabilitation programmes that are inconsistent with post-operative protocols because the physiotherapist has not seen the operative notes. These are not rare edge cases; they are systematic consequences of a care delivery model that crosses jurisdictional data boundaries that health information architectures are not designed to bridge.

### 3.2 Why Current Standards Do Not Solve This

FHIR provides a technically adequate data exchange standard. The FHIR specification defines resource types for all relevant clinical data — Condition, Observation, Procedure, MedicationRequest, DiagnosticReport, Encounter — and a RESTful API for exchanging these resources between systems. In principle, a hospital in one country could expose a FHIR-compliant API from which a GP in another country could retrieve the patient's records.

In practice, three barriers prevent this. First, FHIR adoption is highly uneven across jurisdictions: while several EU member states and the United States have mandated FHIR-compliant APIs for specific use cases, adoption is not universal and API capability is highly variable even among FHIR-compliant implementations. Second, cross-border health data exchange raises national regulatory questions — under GDPR, for instance, health data is special category data subject to additional transfer restrictions — that are not resolved by technical standards. The applicable transfer mechanism for medical tourism contexts is not the standard adequacy decision or standard contractual clauses, which apply to institutional data controllers; it is GDPR Article 49, which provides derogations for specific situations including the data subject's explicit consent and the protection of the data subject's vital interests [12]. In practice, a patient who explicitly consents to sharing their health record with a treating institution in a third country satisfies the Article 49 explicit consent derogation; a patient receiving emergency care when unconscious satisfies the vital interests derogation. The patient-sovereign architecture described in this paper is compatible with both derogations: the patient's act of presenting their personal health digital twin to a receiving institution constitutes explicit consent, and the architecture supports emergency access under vital interests conditions through a separately authorised emergency access token. Third, and most fundamentally, there is no directory mechanism: a GP in one country has no reliable way to find the FHIR endpoint of a hospital in another country, authenticate to it, and know they are requesting the records of the correct patient.

Patient-mediated record presentation — the patient presents their record to each provider — solves the directory problem and the authentication problem simultaneously. The patient is the directory. The patient's presence is the authentication. The record they present is the data.

### 3.3 The Consortium's Architecture Challenge

The hospital consortium session identified three specific technical and governance requirements for a viable cross-border personal health record:

**Provenance and trust.** Receiving clinicians must be able to verify that the records presented by a patient are authentic — that they originated from a registered healthcare institution and have not been modified by the patient. This requires institutional digital signatures on each record segment, using a public key infrastructure (PKI) that receiving institutions can verify without prior relationship with the originating institution.

**Structured data at handoff.** The personal health record must contain structured, machine-readable data — FHIR resources — not only PDF documents or unstructured summaries. PDF handover documents are widely used but are not machine-processable; they cannot be imported into a receiving institution's electronic health record system, cannot trigger clinical decision support rules, and cannot contribute to population health analytics.

**Minimal footprint patient custody.** The patient must be able to maintain their record without requiring technical sophistication. This points toward a mobile-first architecture in which the record is stored in a form that a non-technical patient can carry on a smartphone, present via QR code or NFC, and update by approving contributions from care providers after each encounter.

---

## 4. Architecture: The Personal Health Digital Twin as Integration Point

### 4.1 Core Design Principles

Following Waern (2025a, DOI: 10.5281/zenodo.17462962), the personal health digital twin architecture must be sovereign by design: the patient controls what data is in the record, who can see it, and under what conditions. Sovereignty is not a policy option layered on top of a technical architecture; it is an architectural property inscribed in the system design.

The architecture has three layers. The first is the personal health record store: a FHIR-native data store that holds the patient's longitudinal health record, structured as a bundle of FHIR resources with institutional signatures on each contributed segment. The second is the access control layer: a patient-controlled interface through which the patient grants, revokes, and audits access to their record by care providers. The third is the presentation interface: a mobile application that generates a time-limited access token (QR code, NFC tag, or OAuth2 code) that a receiving institution can use to retrieve the patient's record from the personal health record store.

### 4.2 Edge-Native Design for Travel Contexts

A critical design requirement for the medical tourism context is offline resilience. A patient in a foreign country, receiving emergency care, may not have reliable internet connectivity. The personal health record must be accessible without connectivity.

Following Waern (2025b, DOI: 10.5281/zenodo.17464804), the edge-native design principle requires that the patient's device stores a complete, locally accessible copy of their health record. The local copy is the primary record; the cloud synchronisation is secondary. When connectivity is available, the record synchronises with a personal cloud store and with any contributing institutions' systems. When connectivity is not available, the patient's device presents their record directly from local storage.

### 4.3 Institutional Adoption Pathway

Patient-sovereign architectures face a chicken-and-egg adoption problem: patients will not invest in maintaining a personal health record that receiving institutions cannot read; receiving institutions will not invest in read capability for a personal health record format that patients do not use. The enrollment strategy must break this symmetry.

The consortium's medical tourism context provides a natural enrollment entry point: the destination institution has a direct operational interest in receiving complete pre-operative records from patients who have had prior care abroad. If the destination institution provides patients with a personal health record at discharge — pre-populated with the records from their treatment — it simultaneously solves its own discharge documentation problem and gives the patient a record to present at their next care encounter. The patient arrives home with a FHIR-structured record that their GP's system can (if FHIR-capable) ingest directly.

---

## 5. Counter-Argument: Can Patients Be Trusted With Their Own Records?

The dominant institutional objection to patient-sovereign health records is that patients will modify their records — removing unflattering diagnoses, adding medications they want to appear to be taking, presenting records from other patients. This objection conflates data custody with data integrity, and it conflates the risk of malicious modification with the risk of inadvertent error.

The architecture described in Section 4.1 addresses this directly. Institutional contributions to the record are digitally signed: a clinician cannot verify the authenticity of a record segment without a valid institutional signature. A patient who removes a signed segment produces a record with a gap that is visible to any clinician who looks at the record's audit trail. A patient who adds an unsigned segment produces a record in which the unsigned segment is clearly marked as patient-entered, with a different provenance status from institutionally signed segments.

The more serious risk is inadvertent data loss: a patient who loses their device, forgets their password, or simply does not maintain their record. This risk is real. It is also the risk that characterises all current health record architectures: the patient's records are currently distributed across institutional systems that the patient cannot access, that may be decommissioned when an institution changes systems, and that the patient's GP may never see. Patient-sovereign records are not less reliable than the current fragmented system; they are a different distribution of reliability risk, trading institutional custody risk for patient custody risk. For medical tourism patients, whose records are already crossing institutional boundaries that produce systematic information loss, the patient custody risk is the better option.

---

## 6. Falsifiable Propositions

1. **The care continuity proposition:** Medical tourism patients who arrive at receiving institutions with a FHIR-structured personal health digital twin containing their pre-travel health record will experience fewer medication-related adverse events in the post-operative period than matched controls who present without a structured pre-travel record, as measured by documented adverse drug reaction rates in the 30 days post-discharge. This proposition can be falsified by a randomised study showing no significant difference in adverse event rates between FHIR-record and no-record groups.

2. **The record completeness proposition:** Personal health digital twin architectures in which the destination institution populates the patient's record at discharge (rather than requiring the patient to request and import their own discharge summary) will achieve discharge record capture rates exceeding 90%, versus below 40% in architectures that require patient-initiated record requests. This proposition can be falsified by a comparative study of record capture rates across both models in matched patient populations.

3. **The institutional adoption proposition:** Destination institutions in medical tourism corridors that offer patient-sovereign health record services as a differentiating feature will achieve higher patient satisfaction scores and higher rate-of-return visit rates than matched institutions that do not, reflecting patient valuation of health data sovereignty. This proposition can be falsified by a patient survey showing that health data portability features do not influence institution selection decisions in medical tourism contexts.

---

## 7. Limitations and Future Research

The analysis is grounded in a 65-minute session with a hospital consortium; the consortium's specific operational context — including its geographic corridor, specialisation mix, and patient demographic — was not disclosed in detail. The architecture proposed is a design artefact in the DSR sense: it has not been implemented or evaluated in the medical tourism context described.

The FHIR adoption landscape changes rapidly. The regulatory environment for cross-border health data exchange — particularly under GDPR and its national implementations — is subject to ongoing evolution; specific legal constraints on cross-border health data flows not addressed here may affect implementation.

Future research should: (1) conduct a prospective study of personal health record completeness and clinical outcome effects in a medical tourism corridor with sufficient volume for statistical power; (2) develop and evaluate the PKI infrastructure required for cross-jurisdictional institutional signature verification in the medical tourism context; (3) assess patient willingness and ability to maintain personal health digital twins across age and digital literacy strata, identifying support interventions needed for low-digital-literacy patient populations.

---

## 8. Conclusion

The medical tourism patient navigates a health system that was not designed for them. Their care crosses institutional and national boundaries that health data architectures treat as impermeable. The result is systematic information loss at every transition — not because clinicians do not care about care continuity, but because the architecture offers no mechanism for achieving it.

The patient-sovereign health digital twin is not an idealistic proposal. It is an architectural necessity. When no institution has a complete record, only the patient can hold the complete record. When no technical standard bridges all jurisdictions, only the patient can cross all jurisdictions. When no interoperability agreement covers all possible care pathways, only the patient can carry their own data through pathways that no agreement anticipated.

The architecture requires institutional digital signatures for record provenance, FHIR-structured discharge records for machine-readable data, and mobile-first edge-native design for offline resilience. None of these are technically novel. What is novel is making the patient, not the institution, the integration point — and designing every other component around the patient's custody and control.

The hospital consortium exploring this problem is not alone. Every healthcare system that is developing patient data portability infrastructure is discovering the same architectural truth: the patient is the persistent layer. The architecture that recognises this will achieve interoperability that no institutional data sharing agreement has managed to produce.

---

## References

[1] HL7 International. FHIR Release 4 (R4). HL7, 2019. Available: https://hl7.org/fhir/R4/

[2] Callon M. Some elements of a sociology of translation. In: Law J (ed.) *Power, Action and Belief.* Routledge, 1986: 196–223.

[3] Latour B. *Science in Action.* Harvard University Press, 1987.

[4] Patients Beyond Borders. *Medical Tourism Industry Report.* 8th edn. Healthy Travel Media, 2023.

[5] Eysenbach G, Jadad AR. Evidence-based patient choice and consumer health informatics in the internet age. *Journal of Medical Internet Research* 2001;3(2):E19.

[6] European Commission. Proposal for a Regulation on the European Health Data Space. COM(2022) 197 final. 2022.

[7] Vest JR, Gamm LD. Health information exchange: persistent challenges and new strategies. *Journal of the American Medical Informatics Association* 2010;17(3):288–94.

[8] Mandl KD, Mandel JC, Kohane IS. Driving innovation in health systems through an apps-based information economy. *Cell Systems* 2015;1(1):8–13.

[9] Waern N. Designing the Life Programmable Interface: A Modular Architecture for Personal Health AI Sovereignty. Zenodo, 2025. DOI: 10.5281/zenodo.17462962.

[10] Waern N. Edge-Native Biological Digital Twins: Architecture Principles for Local-First Personal Health Intelligence. Zenodo, 2025. DOI: 10.5281/zenodo.17464804.

[11] Waern N. SMILE: A Methodology for Impact-First Digital Twin Deployment in Complex Sociotechnical Systems. Zenodo, 2026. DOI: 10.5281/zenodo.19587944.

[12] Voigt P, Von dem Bussche A. *The EU General Data Protection Regulation (GDPR): A Practical Guide.* Springer, 2017. See in particular discussion of Article 49 derogations for specific situations, including explicit consent of the data subject and protection of vital interests.
