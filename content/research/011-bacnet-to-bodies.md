# When Buildings and Bodies Finally Talk: From Automated to Programmable Environments

**Nicolas Waern**
WINNIIO AB, Gothenburg, Sweden
ORCID: [0000-0001-7970-2707](https://orcid.org/0000-0001-7970-2707)

License: CC-BY-4.0

---

## Abstract

Building automation and healthcare informatics have evolved along parallel but disconnected trajectories, each solving data fragmentation within its own domain while ignoring the other. This paper argues that the convergence of BACnet Secure Connect (BACnet/SC), ASHRAE Standard 223P semantic tagging, edge-native artificial intelligence, and personal health interfaces (HL7 FHIR) creates the preconditions for *programmable environments* -- built spaces that optimise for individual occupant well-being rather than population-level abstractions. Drawing on the concept of boundary objects (Star & Griesemer, 1989), the six-layer contextual interoperability model introduced in the Reality Construct framework (Waern, 2026a), and critical realism (Bhaskar, 1975), the paper proposes that visual, reality-anchored digital twins can serve as the shared representational layer bridging building data and personal health data. The paper traces the evolution from automated buildings to programmable environments, identifies the engineering pathway for FHIR-to-BACnet bridging via spatial-temporal context brokers, and outlines a research programme for precision automation -- the building-science analogue of precision medicine.

**Keywords:** digital twins, BACnet, FHIR, precision automation, edge computing, contextual interoperability, boundary objects, ASHRAE 223P, programmable environments, occupant well-being

---

## 1. Introduction

In 2017, I co-authored an article for AutomatedBuildings.com's Foundations publication about BACnet Web Services (Waern, 2017). The thesis was simple: what happens when building data becomes accessible through standard web APIs? When any application, anywhere, can query a building's state the same way a browser queries a website?

Nine years later, I want to ask a different question. A harder one.

What happens when we do the same thing -- but for people?

## 2. BACnet's Unfinished Revolution

Let us take stock of where BACnet has brought us. From serial trunk cables to BACnet/IP. From IP to Web Services. From Web Services to BACnet Secure Connect -- TLS 1.3 encryption, certificate-based device authentication, zero-trust architecture (ASHRAE, 2019). And now, through the collaboration between ASHRAE's BACnet Committee, Project Haystack, and Brick Schema, we are building ASHRAE Standard 223P: a unified semantic data model that finally gives BACnet points *meaning*, not just connectivity (ASHRAE, n.d.).

This is remarkable. BACnet carries the signal. Haystack and Brick tag it with context. 223P harmonizes the two so a point discovered through BACnet can be understood semantically by any application that speaks the standard. You can now discover a device AND understand what it does, what it serves, and how it relates to the rest of the building -- all through open standards.

Ken Sinclair -- founder of AutomatedBuildings.com -- once framed the challenge: we need to "make buildings aware of what they really need to be aware of." BACnet, in its many dialects, brings us closer to that goal than anything before it.

But I have spent the last four years building something else entirely. And it has forced me to confront an uncomfortable truth: BACnet made buildings aware of themselves. We never made them aware of the people inside them.

## 3. The Fragmentation We Know -- And the One We Ignore

Anyone who has worked in real estate knows the pattern. Asset owners do not know where their data is, who controls it, how fragmented it is, or what value it could unlock if understood longitudinally. Buildings are managed through dozens of disconnected systems -- BMS, lighting, fire, access, energy -- each generating data that never meets the data from the system next to it. We have been fighting this fragmentation for decades.

Now consider: people experience the exact same fragmentation with their own bodies.

When a close relative of mine was diagnosed with cancer, I did not first see a medical failure. I saw a design failure -- the same design failure I had been fighting in buildings. Everything that mattered about her life *before* she became a patient was invisible. Her heart medication was not accounted for by her oncologist. Her lifestyle history was irrelevant to the system. Data existed, but it lived in disconnected systems that never spoke to each other.[^1]

[^1]: The author acknowledges that personal medical experience, while motivating, does not constitute systematic evidence; the narrative is offered as context for the research programme, not as a data point.

I recognized the pattern immediately:

| Buildings | People |
|-----------|--------|
| Data scattered across BMS, HVAC, lighting, fire, access | Data scattered across GPs, specialists, labs, wearables, pharmacies |
| No shared model of the building | No shared model of the person |
| Owners do not control their data | Individuals do not control their data |
| Snapshots, not longitudinal understanding | Episodes, not longitudinal care |
| BACnet solved the protocol layer | No equivalent exists for people |

BACnet gave buildings a programmable interface. People still do not have one. And until they do, any building that claims to optimize for "occupant comfort" is optimizing for an abstraction, not a person. As Topol (2019) argues, the shift from population-average medicine to individualized care requires not just better algorithms but fundamentally different data architectures -- ones that maintain longitudinal, patient-controlled records across institutional boundaries.

## 4. From Automated to Programmable

This is where I want to push our industry's thinking forward.

In 2019, I introduced what I called the BB-Cycle -- the Building Buzz Breakdown -- a framework mapping how metadata tagging, digital twins, IoT, edge computing, streaming platforms, and security converge in building automation (Waern, 2019a). The argument was that these technologies are not separate innovations. They are an interconnected cycle, and the real barriers to adoption are organizational, not technical -- a finding consistent with Cohen and Levinthal's (1990) concept of absorptive capacity, which holds that an organisation's ability to exploit new technology depends on its prior related knowledge.

Seven years later, the cycle has matured. Haystack and Brick have merged their efforts into 223P. BACnet/SC has solved the security layer. Edge computing has brought inference to the device level, following the architectural principle that computation should occur where data is generated rather than in centralised clouds (Shi et al., 2016). Digital twins have moved from Grieves's (2014) foundational conceptual model -- physical entity, virtual counterpart, and the data connection between them -- to deployed operational systems. What emerges from this convergence is something fundamentally new: the *programmable building*.

An automated building reacts. A programmable building can be *told an outcome* and figure out how to get there.

You do not tell a programmable building "set zone 3 to 22 degrees Celsius." You tell it "optimize this zone for the health and productivity of its occupants while reducing energy consumption by 15% relative to last quarter." The building -- through BACnet/SC for device communication, 223P for semantic understanding, digital twins for simulation, and edge AI for local inference -- works out the how.

This is the shift from building automation to building intelligence. From reactive to intentional. From data-driven to impact-driven.

## 5. Precision Automation Meets Precision Medicine

Medicine went through the same shift. For decades, medicine was reactive -- you got sick, you got treated, you got discharged. The same protocol for everyone. Now, precision medicine promises treatment tailored to your genetics, your lifestyle, your specific physiology (Topol, 2019). Not population averages. You.

Our industry needs the same revolution. Call it *precision automation*.

Precision automation means the HVAC system does not optimize for "thermal comfort" -- a statistical abstraction derived from Fanger's predicted mean vote model. It optimizes for *this person's* comfort, *right now*, based on *their* physiology. The ASHRAE Standard 55 adaptive comfort model already acknowledges that acceptable thermal conditions depend on contextual and personal factors (ASHRAE, 2020). The lighting does not follow a schedule. It follows a circadian pattern that is personalized and health-informed. Air quality thresholds are not generic -- they are specific to the respiratory profiles of the people in the space.

### 5.1 A Concrete Pathway: Sensor Fusion to Personalised Setpoints

The engineering pathway for precision automation is feasible with current technology. Occupancy sensors -- BLE beacons for location, CO2 sensing for ventilation demand -- establish who is where. Wearable data streams (heart rate variability, skin temperature) from personal devices provide physiological state. These inputs feed into the ASHRAE 55 adaptive comfort model, which computes personalised HVAC setpoints for each occupied zone. The setpoint is written to the zone controller via BACnet/SC. The data flow from wearable to building controller is gated by a consent mechanism -- analogous to FHIR's Consent resource -- that ensures no physiological data enters the building automation loop without the occupant's explicit, revocable authorisation. The latency requirement is domain-dependent: less than 60 seconds for comfort adjustments (thermal lag in HVAC systems dominates anyway), but less than 5 seconds for emergency responses such as sudden air quality degradation. Edge inference handles the real-time loop; cloud handles model retraining on longer cycles.

But here is the critical insight: *precision automation is not possible without intelligence inside the building.*

If all the intelligence lives in the cloud, you have latency, you have data sovereignty issues, and worst of all -- you have a building that goes dumb when connectivity drops. Precision medicine does not work if the hospital loses its records every time the internet goes down. Precision automation does not work if the building cannot think for itself.

This is why edge-native intelligence is not a nice-to-have. It is the resilience layer. BACnet was designed for reliability -- it runs on dedicated networks precisely because building systems cannot afford to fail. Edge AI must follow the same design principle: local inference, local models, local decision-making (Shi et al., 2016). The cloud is a collaborator, not a dependency.

## 6. Why Visual Reality Is the Foundation

But protocols and AI alone are not enough. Data is not understanding.

In my research on scaling digital twin deployments in Swedish buildings, I documented what I called "shadows" -- interpretations of truth filtered through outdated systems and abstractions (Waern, 2025b). Drawing on Plato's cave allegory: participants in a four-month deployment discovered they had never encountered their building as a tangible entity. They had only ever experienced it through fragmented dashboards and spreadsheets. The moment they saw a visual, spatial representation of their building -- with live data embedded in the geometry of reality -- knowledge transfer accelerated. Silos dissolved. People who had never spoken to each other suddenly had a shared language.

This observation can be grounded in Bhaskar's (1975) critical realism: the building's physical reality and the person's biological reality both exist independently of our measurements. The task is not to create reality through data but to make existing reality *legible* -- to ourselves, to our systems, and to each other. The digital twin, in this framing, is not a simulation but a lens.

The shared language was not a protocol. It was *reality itself*, rendered visually.

The Minimal Interoperability Mechanisms (MIMs) framework recognizes this: context -- spatial, temporal, human -- is a first-class interoperability dimension (MIMs Plus, 2023). Technical and semantic interoperability can succeed while knowledge transfer fails, if people cannot *see* what the data means in the context of their physical world. Visual representation of reality is not a visualization layer on top. It is the foundation that makes everything else meaningful (supporting evidence from spatial cognition research suggests that visual-spatial representations enhance comprehension and decision-making across expertise levels; Tversky, 2019).

This is what the BACnet ecosystem needs to internalize. We have the protocol (BACnet/SC). We have the semantics (Haystack, Brick, 223P). We have the security (TLS 1.3, zero-trust). What we need now is the *visual grounding* -- the spatial, temporal, reality-anchored representation that turns data into understanding and understanding into action.

And if this works for buildings -- and it does -- it works for people too.

## 7. The FHIR-to-BACnet Bridge: Engineering the Missing Link

People need what buildings now have: a programmable interface. A sovereign, standardized way to represent their data, their preferences, their boundaries -- and to control what is shared, with whom, under what conditions.

Just as BACnet/SC introduced certificate-based authentication for every device, a personal interface must be consent-based and user-controlled. The person is the certificate authority of their own body. Healthcare already has FHIR (HL7, 2019). Buildings have BACnet. But these two standards share no semantic bridge.

FHIR (Fast Healthcare Interoperability Resources), maintained by HL7 International, gives health records a standardised, RESTful data model -- patient demographics, observations, conditions, medications -- designed for interoperability across clinical systems (HL7, 2019). BACnet, governed by ASHRAE, does the same for building systems: points, objects, properties, device discovery. ASHRAE 223P extends BACnet's reach into semantics, giving building data meaning beyond raw values. FHIR gives health data meaning beyond raw lab results. But neither standard knows the other exists.

The missing piece is a shared spatial-temporal context broker -- a system that can relate "this room" (BACnet zone, identified by 223P semantics) to "this person in this room" (FHIR patient resource, with consent-governed health context). The NGSI-LD protocol and MIM1 (context information management) provide the architectural pattern: a context broker (e.g., ETSI GS CIM 009 V1.6.1; implementations include FIWARE Scorpio and Stellio brokers) that federates entities across domains using shared spatial and temporal anchors. This is precisely the Reality Programmable Interface (RPI) concept introduced in the Reality Construct framework (Waern, 2026a) -- a sovereign mediation layer where digital twins from different domains meet on the common ground of physical reality.

And just as visual reality makes building data meaningful, visual reality makes personal data meaningful. Not lab reports. Not portal logins. Your reality -- your body, your environment, your trajectory through time -- rendered as a living model that you, your care providers, and the built environment around you can all reason about.

When the building has a digital twin and the person has a digital twin, something unprecedented emerges: digital twins communicating with digital twins. The twin is not a dashboard -- it is a boundary object in the sense defined by Star and Griesemer (1989): an artefact that is "plastic enough to adapt to local needs and constraints of the several parties employing them, yet robust enough to maintain a common identity across sites." The building twin bridges facility managers, engineers, and occupants. The personal twin bridges the individual, their care providers, and their environment. We note that boundary objects can reinforce power asymmetries rather than dissolve them (Trompette & Vinck, 2009) -- a risk in building-occupant relationships where the facility manager's reading of comfort data may override the occupant's subjective experience. Both grounded in visual reality. Both sovereign. Both programmable.

## 8. Contextual Interoperability: Six Layers Deep

Making this work requires interoperability far beyond what we typically discuss in BACnet circles. In the Reality Construct framework, I proposed a six-layer model (Waern, 2026a):

1. **Technical** -- can systems exchange data? (BACnet/SC: yes)
2. **Semantic** -- do they understand each other? (223P/Haystack/Brick: getting there)
3. **Legal** -- are they permitted to share? (GDPR, HIPAA, building codes: complex)
4. **Social** -- do stakeholders trust the exchange?
5. **Contextual/Spatial** -- does the exchange account for where, when, and for whom?
6. **Resilience** -- can shared meaning persist when systems fail?

It is worth noting how this model relates to and extends the European Interoperability Framework (EIF), which defines four layers: technical, semantic, organisational, and legal (European Commission, 2017). The six-layer model shares the EIF's technical, semantic, and legal dimensions but disaggregates the organisational layer into social trust and contextual/spatial awareness, and adds resilience as a distinct concern. The rationale is that in cyber-physical systems -- where buildings and bodies interact in real time -- spatial context and failure-mode behaviour are not organisational details but first-order interoperability requirements.

Our industry excels at layers one and two. But when a building's intelligence communicates with a person's health data -- when precision automation meets precision medicine -- all six layers are in play. Legal frameworks must span building codes AND health data law. Trust must exist between occupant and building operator. Context must be spatial, temporal, AND physiological. And the system must remain resilient -- coherent when sensors fail, when people move, when regulations change. This multi-layered challenge is consistent with Kubicek and Cimander's (2009) finding that interoperability failures in cross-domain e-government systems most often occur not at the technical layer but at the organisational and semantic layers -- precisely the layers our industry has historically underinvested in.

The BACnet community is uniquely positioned to lead this conversation. We solved interoperability for buildings when no one else could. The same discipline -- the same commitment to open standards, vendor independence, and practical deployment -- is exactly what is needed to bridge the gap between buildings and the people who inhabit them.

## 9. The BB-Cycle, Revisited

When I first drew the BB-Cycle in 2019, it mapped the convergence of metadata tagging, digital twins, IoT, edge computing, and cybersecurity (Waern, 2019a). Today, the cycle has expanded:

- **Metadata** evolved into **semantic ontologies** (223P)
- **IoT** evolved into **edge-native intelligence** (Shi et al., 2016)
- **Digital twins** evolved into **boundary objects** (Star & Griesemer, 1989) -- visual reality models that transfer knowledge
- **Cybersecurity** evolved into **BACnet/SC and zero-trust architecture**
- **Cloud** evolved into **federated, edge-first computing**

And now a new element enters the cycle: **the person**. Not as an occupancy sensor reads them -- as a count. But as a sovereign digital twin, with their own API, their own consent model, their own visual representation of reality.

The cycle is no longer about making buildings smarter. It is about making *environments* intelligent -- environments where buildings and bodies are part of the same system, the same data fabric, the same visual reality. Where you can tell the system an outcome you want -- for the building, for your health, for the planet -- and the system shows you how to get there. Past, present, and simulated future. Zoom out to see the whole. Zoom in to act on the specific.

## 10. Limitations

This paper is a position paper and architectural proposal, not an empirical study. Several limitations should be noted. First, the six-layer interoperability model has been applied in a single organisational context (Swedish commercial real estate); its generalisability to other building types, regulatory regimes, and cultures remains to be tested. Second, the FHIR-to-BACnet bridging pathway described in Section 7 is architecturally specified but has not yet been implemented or benchmarked; real-world latency, consent-management overhead, and failure-mode behaviour are open engineering questions. Third, the privacy and liability implications of linking personal health data to building control systems are substantial and domain-specific; this paper identifies them as requirements but does not resolve them. Finally, the precision automation pathway assumes wearable adoption and user willingness to share physiological data with building systems -- an assumption that requires empirical validation across diverse populations.

## 11. Future Research

The research programme implied by this paper has several immediate priorities. First, a proof-of-concept implementation of the FHIR-to-BACnet context broker using NGSI-LD, tested against the latency and resilience requirements specified in Section 5.1. Second, a multi-site deployment study applying the six-layer interoperability model to buildings with diverse occupancy profiles (hospitals, offices, residential care) to validate or revise the layer decomposition. Third, a consent-architecture study exploring how FHIR's consent resources can be extended to govern building-system queries against personal health data, with particular attention to GDPR and HIPAA compliance. Fourth, longitudinal measurement of occupant well-being outcomes (thermal comfort satisfaction, sick building syndrome incidence, self-reported productivity) under precision automation versus conventional HVAC scheduling.

## 12. Conclusion

I will be honest about the obstacles. Standards bodies for buildings and standards bodies for healthcare do not attend each other's conferences. Regulatory interoperability barely exists. Liability questions -- if a building adjusts conditions based on health data and something goes wrong -- are unresolved.

But these are governance barriers, not technical ones. BACnet/SC proved that an entire industry can adopt a new security model when the architecture is sound and the need is clear. The BACnet community has done harder things than this.

Intelligence must live in the building -- not just in the cloud, not just in phones, not just in data centers. Because when the connection drops, the building must still think. When the person is at risk, the environment must still respond. Resilience is not a feature. It is the foundation. And BACnet has always understood that.

Not building automation. Not automated buildings. Not even smart buildings.

Programmable environments, for programmable futures. One API to the building. One API to the person. Both open. Both sovereign. Both grounded in reality.

---

## References

ASHRAE. (2019). *BACnet Secure Connect: A secure infrastructure for building automation* (Standard 135 Addendum). American Society of Heating, Refrigerating and Air-Conditioning Engineers.

ASHRAE. (2020). *Thermal environmental conditions for human occupancy* (Standard 55-2020). American Society of Heating, Refrigerating and Air-Conditioning Engineers.

ASHRAE. (n.d.). *Standard 223P: Designation and classification of semantic tags for building data.* In collaboration with Project Haystack and Brick Schema.

Bhaskar, R. (1975). *A realist theory of science.* Leeds Books.

Cohen, W. M., & Levinthal, D. A. (1990). Absorptive capacity: A new perspective on learning and innovation. *Administrative Science Quarterly, 35*(1), 128--152. https://doi.org/10.2307/2393553

European Commission. (2017). *New European Interoperability Framework: Promoting seamless services and data flows for European public administrations.* Publications Office of the European Union. https://doi.org/10.2799/78681

Grieves, M. (2014). Digital twin: Manufacturing excellence through virtual factory replication. *White paper, Florida Institute of Technology.*

HL7 International. (2019). *HL7 FHIR (Fast Healthcare Interoperability Resources), Release 4.* https://hl7.org/fhir/R4/

Kubicek, H., & Cimander, R. (2009). Three dimensions of organizational interoperability: Insights from recent studies for improving interoperability frameworks. *European Journal of ePractice, 6*, 3--14.

MIMs Plus. (2023). *Minimal Interoperability Mechanisms.* https://mims.oascities.org/

Shi, W., Cao, J., Zhang, Q., Li, Y., & Xu, L. (2016). Edge computing: Vision and challenges. *IEEE Internet of Things Journal, 3*(5), 637--646. https://doi.org/10.1109/JIOT.2016.2579198

Star, S. L., & Griesemer, J. R. (1989). Institutional ecology, "translations" and boundary objects: Amateurs and professionals in Berkeley's Museum of Vertebrate Zoology, 1907--39. *Social Studies of Science, 19*(3), 387--420. https://doi.org/10.1177/030631289019003001

Topol, E. J. (2019). *Deep medicine: How artificial intelligence can make healthcare human again.* Basic Books.

Trompette, P., & Vinck, D. (2009). Revisiting the notion of boundary object. *Revue d'Anthropologie des Connaissances, 3*(1), 3--25.

Tversky, B. (2019). *Mind in motion: How action shapes thought.* Basic Books.

Waern, N. (2019a). The BB-Cycle: Building Buzz Breakdown. *AutomatedBuildings.com.* https://automatedbuildings.com/news/aug19/articles/waern/190729111303waern.html

Waern, N. (2017). I don't know what those BACnet Services are... but I think I want them. *BACnet International Foundations.*

Waern, N. (2025b). *Beyond the shadows -- Contextual awakening, federated learning, and the realization of reality through digital twins.* Zenodo. https://doi.org/10.5281/zenodo.17464804

Waern, N. (2026a). *The Reality Construct v2: A six-layer contextual interoperability framework for programmable environments.* Zenodo. https://doi.org/10.5281/zenodo.19587944

---

*Nicolas Waern is the CEO and Founder of WINNIIO AB, a strategy and innovation advisory firm based in Gothenburg, Sweden. He has authored over 47 articles on AutomatedBuildings.com and hosts the Beyond Buildings podcast at beyondbuildings.com. He previously contributed to BACnet International's Foundations publication on BACnet Web Services and is co-chair of the Digital Twin Consortium Manufacturing Working Group. Contact: ceo@winniio.io*
