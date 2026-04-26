---
title: "Bär, Balkar och Beredskap: Digital Tvilling som Kunskapsexternalisering för Kritisk Infrastruktur i Svenskt Totalförsvar"
title_en: "Berries, Beams, and Preparedness: Digital Twin as Knowledge Externalization for Critical Infrastructure in Swedish Total Defence"
author: "Nicolas Waern"
affiliation: "WINNIIO AB"
orcid: "0009-0001-4011-8201"
email: "ceo@winniio.io"
keywords_sv: "digital tvilling, kunskapsexternalisering, totalförsvar, kritisk infrastruktur, SECI-modellen, tyst kunskap, edge-native arkitektur, resiliens, stålkonstruktion, autonom skörd, drönarlogistik, civilförsvar"
keywords_en: "digital twin, knowledge externalization, total defence, critical infrastructure, SECI model, tacit knowledge, edge-native architecture, resilience, steel construction, autonomous harvesting, drone logistics, civil defence"
language: "sv"
license: "CC-BY-4.0"
doi_placeholder: "10.5281/zenodo.XXXXXXX"
status: "draft"
date: "2026-04-25"
version: "1.0"
---

# Bär, Balkar och Beredskap: Digital Tvilling som Kunskapsexternalisering för Kritisk Infrastruktur i Svenskt Totalförsvar

**Nicolas Waern**
WINNIIO AB, Göteborg, Sverige
ORCID: 0009-0001-4011-8201

**Corresponding author:** ceo@winniio.io
**License:** CC-BY-4.0
**Submitted:** 2026-04-25

---

## Sammanfattning (Abstract)

Sverige befinner sig i en period av intensifierad försvarsupprustning och totalförsvarsplanering. Samtidigt vilar landets försvarsförmåga — industriell, livsmedels- och logistisk — på ett fundamentalt sårbart underlag: tyst, icke-dokumenterad kunskap inbäddad i enskilda individers kompetens. Denna artikel undersöker tre scenarion — en stålbearbetande SMF, svenska bärproducenter och civil drönarlogistik — och argumenterar för att digital tvilling-teknologi, förstått som kunskapsexternalisering i Nonaka och Takeuchis (1995) SECI-modells mening, utgör den gemensamma lösningsarkitektur som dessa till synes disparata utmaningar delar. Med stöd i Polanyis (1966) teori om tyst kunskap, SMILE-metodiken v4.4 (Waern, 2026), och aktuella totalförsvarsdokument (FM2025-19772:2; Prop. 2024/25:34; FOI-R--5612--SE) formuleras tre falsifierbara propositioner om digitala tvillingars roll i civil beredskapsförstärkning. Artikeln betonar vidare nödvändigheten av edge-native, suveränitetsbevarande arkitektur som ett strukturellt krav — inte ett tekniskt val. Resultaten pekar mot att kunskapsexternalisering via digitala tvillingar kan reducera enskilda individers roll som oersättliga flaskhalsar i kritiska flöden, och därigenom stärka Sveriges totalförsvarsförmåga i enlighet med de mål som uttrycks i försvarspropositionen 2024/25:34.

**Nyckelord:** digital tvilling, kunskapsexternalisering, totalförsvar, kritisk infrastruktur, SECI-modellen, tyst kunskap, edge-native arkitektur, resiliens, stålkonstruktion, autonom skörd, drönarlogistik, civilförsvar

---

**Abstract (English):** Sweden is undergoing a period of intensified defence rearmament and total defence planning. At the same time, the country's defence capacity — industrial, food, and logistical — rests on a fundamentally vulnerable foundation: tacit, undocumented knowledge embedded in individual workers' competence. This article examines three scenarios — a steel-processing SME, Swedish berry producers, and civilian drone logistics — and argues that digital twin technology, understood as knowledge externalization in the sense of Nonaka and Takeuchi's (1995) SECI model, constitutes the common solution architecture these seemingly disparate challenges share. Drawing on Polanyi's (1966) theory of tacit knowledge, the SMILE methodology v4.4 (Waern, 2026), and current total defence documents, three falsifiable propositions are formulated regarding digital twins' role in civil preparedness enhancement. The article further emphasizes the necessity of edge-native, sovereignty-preserving architecture as a structural requirement — not a technical choice. Findings indicate that knowledge externalization via digital twins can reduce individual workers' roles as irreplaceable bottlenecks in critical flows, thereby strengthening Sweden's total defence capability.

---

## 1. Inledning

Det finns en typ av kunskap som inte syns i något register, som inte finns i något system, och som inte går att rekrytera fram. Den bor i händerna på en svetsare som vet exakt vilket tryck som krävs för att en specifik legeringskomposition ska ge rätt fästhållfasthet. Den finns i blicken hos en bärplockningsledare som kan avgöra om dagen är för fuktig för skörd utan att konsultera någon sensor. Den lever i rutten som en drönarpilot memorerat efter hundra transporter — inte för att systemet kräver det, utan för att det aldrig funnits något system.

Denna kunskap är Sveriges civila beredskapsinfrastruktur. Och den är djupt sårbar.

Sedan den säkerhetspolitiska omvärldsbedömningens fundamentala förändring 2022, och med den svenska Natomedlemskapet 2024, har totalförsvaret återfått en central plats i den politiska och administrativa agendan (Prop. 2024/25:34). Försvarspropositionen 2024/25:34 beskriver en totalförsvarsplanering där det civila försvaret ska "bidra till att motstå ett väpnat angrepp" och säkerställa "samhällets funktionalitet under höjd beredskap." Målen är ambitiösa. Grunden de vilar på är, i alltför många sektorer, gjord av tyst kunskap och rutinmässig improvisation.

Denna artikel tar sin utgångspunkt i en central observation som är empiriskt återkommande men teoretiskt underutforskad inom ramen för totalförsvaret: att digitala tvillingar inte primärt är ett teknologiprojekt, utan ett kunskapsexternaliseringsprojekt. Att bygga en digital representation av en fabrik, ett odlingslandskap eller ett logistiknätverk handlar i grunden om att flytta kunskap från kroppen till modellen — från den biologiska minnets bräcklighet till den reproducerbara informationsstrukturens robusthet.

Tre scenarion bildar artikelns empiriska ryggrad: Fabriken — ett stålbearbetande SMF med försvarsrelevant produktion, där kapacitetsplanering lever i en 46-flikar stor Excel och i en erfaren planerares huvud. Skörden — svenska bärproducenter som vid gränsklosning, pandemi eller konflikt förlorar den säsongsarbetskraft som bär hela produktionscykeln. Drönaren — civil logistikinfrastruktur som vid kris måste omvandlas från paketleverans till sjukvårdsförsörjning, utan att de digitala och juridiska förutsättningarna för den omvandlingen finns på plats.

Det gemensamma mönstret är inte teknologiskt — det är epistemologiskt. Och den gemensamma lösningen är inte ett inköp — det är en metodisk externalisering av den kunskap som just nu bär systemen utan att synas i dem.

Artikelns disposition är följande: avsnitt 2 etablerar det teoretiska ramverket med SECI-modellen, Polanyis tystkunskapsteori, SMILE-metodiken och dess positionering mot existerande ramverk samt Callons translationsmoment. Avsnitt 3–5 analyserar de tre scenariona. Avsnitt 6 syntetiserar det gemensamma mönstret och formulerar falsifierbara propositioner. Avsnitt 7 behandlar arkitekturella implikationer med fokus på edge-native design och datasuveränitet, inklusive edge-systemens egna begränsningar. Avsnitt 8 diskuterar styrkor, motargument och standardiseringens roll. Avsnitt 9 redovisar begränsningar i den nuvarande studien. Avsnitt 10 pekar ut framtida forskningsriktningar. Avsnitt 11 sammanfattar slutsatserna.

---

## 2. Teoretiskt Ramverk

### 2.1 Tyst kunskap som sårbarhetsfaktor

Michael Polanyi formulerade 1966 sin nu klassiska insikt: *"vi vet mer än vi kan berätta"* (Polanyi, 1966, s. 4). Det han beskrev är inte en brist utan ett grundläggande drag i mänsklig kognition. Expert-kroppen vet saker som experthuvudet inte kan artikulera. En erfaren svetsteknikers bedömning av svetspoolens färg, en odlares känsla för markfukt, en pilots intuitiva korrigering av en drönare i sidovind — dessa kompetenser är genuina och avancerade. De är också fundamentalt icke-skalbara och icke-redundanta.

I beredskapssammanhang förvandlas denna kognitiva tillgång till en systemisk sårbarhet. När Polanyis tysta kunnare inte längre är tillgänglig — på grund av mobilisering, sjukdom, pensionering eller geografisk dislokation — försvinner kapaciteten. Systemet kollapserar inte dramatiskt; det bara slutar fungera optimalt, och sedan suboptimalt, och sedan inte alls.

Cohen och Levinthal (1990) bidrog med det kompletterande begreppet *absorptionsförmåga* — organisationers förmåga att tillgodogöra sig ny kunskap är betingad av befintlig, kodifierad kunskap. En organisation som inte har externaliserat sin tysta kunskap har per definition begränsad förmåga att absorbera ny kompetens i krissituationer.

### 2.2 SECI-modellen och kunskapsspiralen

Nonaka och Takeuchis (1995) SECI-modell beskriver kunskapsskapande som en spiral som rör sig mellan fyra konversionsformer: Socialisering (tyst till tyst, via delad erfarenhet), Externalisering (tyst till explicit, via artikulation och modellering), Kombination (explicit till explicit, via systemintegrering), och Internalisering (explicit till tyst, via praktik).

Den digitala tvillingen kan förstås som det primära teknologiska verktyget för SECI-modellens Externaliseringsprocess. Att modellera en svetssekvens parametrar, en skördemaskins optimalväg eller ett drönarkorridors topografi är att omvandla tyst kroppskunnande till explicit, reproducerbar och delbar representation. Det är, i Nonaka och Takeuchis terminologi, att röra sig från socialiseringsfasen mot externaliseringsfasen i kunskapsspiralen.

För totalförsvarets syften är detta distinktionen som avgör. En organisations förmåga att upprätthålla kritiska flöden under kris beror inte enbart på hårdvaruresurser eller personalstyrka — den beror på i vilken grad den operativa kunskapen är externaliserad nog för att vara tillgänglig utan sin ursprungliga bärare.

### 2.3 Gränsobjekt och kunskapsinfrastruktur

Star och Griesemer (1989) introducerade begreppet *boundary objects* — artefakter som tjänar som kommunikationsplattformar mellan världar med olika kunskapstraditioner. Den digitala tvillingen är ett paradigmatiskt gränsobjekt: den talar ingenjörens språk, planernas språk och beslutsfattarens språk simultant. Den möjliggör koordinering utan att kräva konsensus om representation.

Det avgörande är att olika aktörsgrupper läser *samma artefakt* på fundamentalt olika sätt, utan att artefaktens inre struktur kollapsar. I fabriksscenariots digitala tvilling läser fabriksoperatören ett tränings- och visualiseringsverktyg för svetssekvenser och maskinparametrar. Produktionschefen läser ett kapacitetsplaneringsinstrument för personalminskningsscenarier. Totalförsvarsmyndighetens planerare läser ett resiliensbedömningsunderlag för kritisk industriell kapacitet. Forskaren läser ett datainsamlingsinstrument för studier av kunskapsexternalisering. Samtliga fyra läser samma digital tvilling — och ingen av läsningarna är felaktig. Det är i denna simultana läsbarhet som gränsobjektets infrastrukturella kraft ligger.

Latour (2005) och Callon (1986) bidrar med ett aktör-nätverksteoretiskt perspektiv som är relevant för förståelsen av hur digitala tvillingar faktiskt förändrar maktrelationer i organisationer. En digital tvilling delegerar handlingskraft till den modellerade representationen — den stärker nätverket av icke-mänskliga aktörer och reducerar därigenom sårbarheten hos det mänskliga nätverkets noder.

### 2.3.1 Callons fyra translationsmoment tillämpad på fabriksscenariots digitala tvilling

Callon (1986) analyserade kunskaps- och nätverksbildning via fyra på varandra följande moment: problematisering, interessement, enrollment och mobilisering. Tillämpat på introduktionen av en digital tvilling i ett försvarsrelevant SMF synliggör dessa moment de sociotekniska mekanismer som avgör om projektet lyckas eller misslyckas.

**Problematisering.** Den digitala tvillingen måste konstituera sig som ett obligatoriskt passagepunkt (*obligatory passage point*) för organisationens kunskapsöverlevnad. Projektets initiativtagare — typiskt ledningen eller en totalförsvarsmyndighet — formulerar problemet på ett sätt som gör tvillingen till den enda rimliga lösningsvägen: "Vi har en enda person som bär planeringslogiken. Vi kan inte riskera att den kunskapen försvinner." I detta steg definieras också vilka aktörer som är relevanta — Kurt, maskinteknikerna, ledningen, potentiella beställare i försvaret.

**Interessement.** Tvillingen måste aktivt blockera konkurrerande översättningar av problemet. De vanligaste alternativa framställningarna är: "Vi skriver en manual" (underskattning av komplexitetens djup), "Vi anställer en ersättare" (ignorerar att tyst kunskap inte rekryteras, den tränas fram under år), och "Det har alltid fungerat" (riskblindhet för mobiliseringsscenarier). Interessement innebär att varje konkurrentöversättning bemöts med en specifik motlogik som gör tvillingens väg mer plausibel.

**Enrollment.** Operatörerna — Kurt och hans kollegor — måste aktivt delta i kunskapsexternaliseringsprocessen. Enrollment är inte passivt samtycke utan aktiv medverkan i modelleringsövningar, validering av representationer och träning på de nya verktygen. Utan genuint enrolled personal producerar SMILE-metodikens Survey-fas ofullständiga representationer; den tysta kunskap som inte artikuleras av sin bärare förblir tyst.

**Mobilisering.** Den externaliserade kunskapen måste tala trovärdigt för de operatörer vars kunskap den representerar. Om en ny operatör agerar utifrån den digitala tvillingens modell och produktionskvaliteten sjunker, bryts enrollmentet — de ursprungliga operatörerna drar slutsatsen att modellen inte fångat det väsentliga. Mobiliseringens integritet förutsätter iterativ validering: representationerna måste uppdateras i dialog med de kunniga tills de faktiskt bär den operativa logiken.

Noterbart är att enrolleringsfasen inte är garanterad. Om den erfarne operatören upplever kunskapsexternaliseringen som ett hot mot sin position — en rationell respons given att tyst kunskap ofta utgör individens förhandlingsstyrka (Brown & Duguid, 2001) — kan aktören aktivt motarbeta processen genom att undanhålla kritisk information eller ge ofullständiga beskrivningar. Callons ramverk förutsäger att sådana misslyckade enrolleringar destabiliserar hela nätverket.

### 2.4 SMILE-metodiken och kunskapsexternalisering — positionering mot existerande ramverk

SMILE-metodiken v4.4 (Waern, 2026) är en strukturerad metodologi för implementering av digitala tvillingar med explicit fokus på kunskapsexternalisering i industri- och infrastruktursammanhang. SMILE (Systematic Model-based Integration of Legacy and Emerging knowledge) specificerar ett femstegsförlopp.

1. **Survey** — kartläggning av existerande kunskapsstrukturer, inklusive implicit och tyst kunskap
2. **Model** — externalisering via formella representationsstrukturer och digitala tvillingmodeller
3. **Integrate** — koppling av externa representationer till operativa system och beslutsprocesser
4. **Learn** — kontinuerlig uppdatering av modellen baserat på operativa återkopplingsflöden
5. **Evolve** — systematisk kapacitetsutveckling baserat på ackumulerad kunskap

I totalförsvarskontext är SMILE-metodikens Survey-fas kritisk: identifieringen av var i organisationen den tysta kunskapen sitter — och vilken frånvaro av en enskild individ som utlöser ett systemkollaps — är det analytiska arbetet som måste föregå all teknologisk implementation.

SMILE förhåller sig till tre centrala existerande ramverk på ett sätt som förtjänar explicit positionering. Tabellen nedan sammanfattar metodikernas respektive fokus och begränsningar:

| Ramverk | Fokus | Styrka | Begränsning |
|---------|-------|--------|-------------|
| ISO 23247 (2021) | Referensarkitektur | Formell standard, brett accepterad | Beskriver VAD, inte HUR |
| RAMI 4.0 | Lagermodell + livscykel | Industritäckande | Arkitektonisk abstraktion utan implementeringsvägledning |
| DTC CPT v3.0 (2024) | Kapabilitetsbedömning | Systematisk mognadskartläggning | Bedömer befintligt tillstånd, guidar ej transformation |
| Grieves (2014) | Fysisk-virtuell koppling | Konceptuell klarhet | Modellerar artefakter, inte kunskapsprocesser |
| SMILE v4.4 (Waern, 2026) | Implementeringsprocess | Fas-specifik vägledning för SME | Oprövad utanför utvecklarens projekt |

ISO 23247 (2021) specificerar ett referensramverk för digitala tvillingar i tillverkning och beskriver vilka informationselement ett sådant system bör innehålla — maskindata, produktionsparametrar, kvalitetsmätningar. Digital Twin Consortium:s Capabilities Periodic Table v3.0 (2024) erbjuder ett bedömningsramverk för en organisations digitala tvilling-mognad längs dimensioner som anslutning, integration och autonomi. Grieves (2014) livscykelmodell beskriver den treeniga relationen mellan det fysiska objektet, dess digitala representation och datakopplingen dem emellan. Dessa ramverk besvarar alla frågan *vad* en digital tvilling bör innehålla och hur mogen den är. SMILE besvarar i stället frågan *hur* — specifikt hur man systematiskt externaliserar tyst, personbunden kunskap i SMF-kontext där den domänkunniga operatörens samarbete är en förutsättning, inte en biprodukt, för implementeringen. I beredskapssammanhang där kunskapsbäraren kan vara otillgänglig vid implementeringstillfället är denna metodologiska prioritering avgörande.

### 2.5 Digitala tvillingar: definitioner och mognadsnivåer

Grieves (2014) formulerade den grundläggande definitionen av den digitala tvillingen som en treenighet: det fysiska objektet, dess digitala representation, och datakopplingen dem emellan. Kritzinger et al. (2018) nyanserade begreppsapparaten med distinktionen mellan digitala modeller (utan datakoppling), digitala skuggor (envägsflöde av data) och digitala tvillingar (dubbelriktad, realtidskopplad representation).

Saad et al. (2024) presenterar en syntetiserad mognadsmodell för digitala tvillingar i industriella sammanhang som spänner från statisk dokumentation till autonomt självoptimerande system. Denna mognadsdimension är central för totalförsvarsperspektivet: det primära behovet är inte det fullt autonoma systemet, utan externaliseringen av kritisk kunskap till en reproducerbar representation — mognadsnivå 2–3 av 5 är ett tillräckligt mål för de flesta beredskapsapplikationer på kort sikt.

IEC 63278-1 (2024) standardiserar Asset Administration Shell (AAS) som det tekniska ramverket för interoperabel digital tvillingrepresentation i industriella miljöer — en standard som ger konkret teknisk form åt de epistemologiska ambitionerna.

---

## 3. Fabriken — Stål, Svets och Systemsårbarhet

### 3.1 Scenariot

Föreställ dig ett medelstort stålbearbetningsföretag i Mellansverige. Ungefär fyrtio anställda. Produktionen inkluderar försvarsrelevanta stål-betong-konstruktioner — komponenter som vid krig eller höjd beredskap hamnar högt på prioriteringslistan för statliga beställare. Företaget har decennier av erfarenhet, hög kompetens och ett gott renommé.

Den operativa kapacitetsplaneringen hanteras av en enda person — vi kallar honom Kurt. Kurt har arbetat på företaget i tjugotre år. Hans arbetsverktyg är ett Excel-kalkylblad med fyrtiosex flikar. I detta kalkylblad ryms kundbeställningar, maskintider, materiallager, leverantörsledtider, personalkompetenser och undantagshanteringslogik som Kurt byggt upp flik för flik sedan 2008. Ingen annan i organisationen förstår fullt ut hur kalkylbladet fungerar. Kurt har aldrig skrivit ned logiken, för det har aldrig funnits ett behov av det. Han vet hur det fungerar.

Kurt är inte unik. Han är typisk.

Stålbyggnadsinstitutet (2024) beskriver i sin branschrapport att kunskapsberoendet av enskilda nyckelindivider är ett genomgående drag i den svenska stål- och metallbearbetningsindustrin, särskilt i SMF-segmentet. Jernkontoret (2024) identifierar i Rapport D 889 kompetensförsörjning och kunskapsöverföring som de primära strukturella riskerna för sektorns förmåga att bidra till totalförsvarets industriella beredskap.

FOI-rapport FOI-R--5612--SE (2025) konstaterar att "civil industris bidrag till totalförsvaret i hög grad är betingat av dessas förmåga att upprätthålla produktion under störda förhållanden" och identifierar personalberoende som en av de mest kritiska sårbarhetsfaktorerna i den svenska försvarsindustriella basen.

### 3.2 Mobiliseringsscenario

Vid mobilisering träder försvarspliktens principer i kraft. Enligt Prop. 2024/25:34 ska totalförsvarets personalförsörjning säkerställas via ett system som inkluderar civil krigsplacering men som historiskt har prioriterat militär mobilisering framför civil produktionskapacitet. I ett scenario där trettio procent av Kurts kollegor kallas in, och där Kurt själv är krigsplacerad vid ett annat uppdrag, är konsekvensen inte en gradvis försvagning av kapaciteten — det är ett omedelbart stopp.

Fyrtiosex Excelflikar löser inte problemet. De är problemet representerat i digital form men inte externaliserat i modellens mening.

### 3.3 Digital tvilling som lösningsarkitektur

En digital tvilling av fabriken i SMILE-metodikens mening börjar inte med sensorinstallation — den börjar med Survey-fasen: en systematisk kartläggning av vilken kunskap som bär produktionssystemet och var i organisationen den sitter.

I Nonaka och Takeuchis SECI-ramverk innebär detta att initiera en Externaliseringsprocess för Kurts tysta kunskap. De fyrtiosex Excelfliken är ett symptom på en icke-avslutad externalisering: data finns i digital form, men logiken — beslutsreglerna, undantagshanteringen, relationsförståelsen — finns fortfarande bara i Kurt.

En fullständig externalisering via digital tvilling innebär att:

- **Produktionsparametrar modelleras** — varje materials bearbetningssekvens, varje maskins kapacitetsenvelope, varje svetsfogs kvalitetskrav formaliseras i Asset Administration Shell-representationer (IEC 63278-1, 2024)
- **Kapacitetsplaneringslogiken externaliseras** — de implicita beslutsträderna i Kurts huvud artikuleras via interaktiva modelleringsövningar och transformeras till formaliserade planeringsmodeller
- **Simuleringslager byggs** — dynamiska simuleringsmodeller möjliggör kapacitetsplanering under hypotetiska personalminskningsscenarier; "vad händer om trettio procent av personalstyrkan försvinner?" kan besvaras i timmar istället för veckor

Resultatet är inte att Kurt blir onödig — det är att Kurts kunskap överlever Kurt. Organisationen internaliserar (i SECI-modellens mening) den externaliserade kunskapen via träning på de nya verktygen, och kunskapsspiralen tar nästa varv.

---

## 4. Skörden — Bär, Beredskap och Biologisk Säsong

### 4.1 Scenariot

Sverige är bland världens ledande producenter av vilda och odlade bär. Blåbär, lingon, hallon, jordgubbar — produktionen är ekonomiskt signifikant och, ur ett livsmedelsförsörjningsperspektiv, strategiskt viktig. MSB:s Nationella riskbild 2025 (NRSB, 2025) identifierar livsmedelsförsörjning som ett av de kritiska samhällssäkerhetsområdena vid kris och höjd beredskap.

Det strukturella problemet är välkänt: den svenska bärsektorn är fundamentalt beroende av säsongsarbetskraft från framför allt Östeuropa och Sydostasien. Denna arbetskraft representerar inte bara kvantitativ kapacitet — den bär med sig tyst, erfarenhetsbaserad kunskap om skördeteknik, sortering, hantering och logistik som inte finns dokumenterad någonstans.

Bechar och Vigneault (2016) och Duckett et al. (2018) beskriver i sina reviewartiklar om jordbruksrobotik att en av de primära barriärerna för automation inom skörd inte är robotteknologin i sig — det är avsaknaden av formaliserade representationer av det odlingslandskap och de processkrav som robotarna måste navigera. Roboten behöver en digital tvilling av miljön för att kunna operera autonomt.

### 4.2 Gränsklosning som katastrofscenario

FM2025-19772:2 (Försvarsmakten & MSB, 2025) specificerar i sina utgångspunkter för totalförsvarsplanering 2025–2030 att gränskontrollåtgärder och rörelsebegränsningar är förväntade händelser vid höjd beredskap. För bärsektorn innebär detta att den primära arbetsinsatsen — som anländer från andra länder under ett specifikt, biologiskt fixerat skördefönster — kan utebli helt.

Blåbär mognar under en specifik period. Lingon har sitt fönster. Om arbetsinsatsen inte anländer i tid, stannar skörden. Den stannar inte metaforiskt — bären ruttnar på marken eller fryser fast i höstens och vinterns frost. Livsmedelsförsörjningssäkerheten minskar i realtid.

Det finns ingen enkel human substitution. Att rekrytera inhemsk arbetskraft under ett krisscenario där konkurrensen om mänskliga resurser är extrem är inte realistiskt. Automationslösningarna existerar i kommersiell form men förutsätter infrastruktur som inte byggts.

### 4.3 Digital tvilling av odlingslandskapet

En digital tvilling av en bärproducerande fastighet innebär i praktiken en sammansatt representation bestående av:

- **Terrängmodell** — INSPIRE-direktivets infrastruktur för geodata (European Commission, 2007) möjliggör spatial grunddata på nationell nivå som kan integreras med fastighetsspecifika höjdmodeller och markkartläggningar
- **Grödcykelmodell** — fenologiska modeller av mognadstakt, skörd optimal tidpunkt och kvalitetsnedgångstakt under för-skörd-period
- **Maskinparametrar** — för varje skördemaskin eller autonom plattform: rörelseplanering, kapacitetsenvelope, underhållsintervall

Denna treenighet — terräng, gröda, maskin — bildar den digitala tvilling mot vilken autonoma skörderobotars ruttplanering och operativa beslut kan kalibreras. Det som Bechar och Vigneault (2016) identifierar som den primära implementeringsbarriären för autonoma jordbruksrobotarnas drift — avsaknaden av precisionsmiljörepresentation — är exakt vad SMILE-metodikens Model-fas producerar.

INSPIRE-direktivets ambition om en harmoniserad europeisk spatial data-infrastruktur (European Commission, 2007) skapar en potentiell skalningsväg: om terrängdata standardiseras och delas på regional nivå kan implementeringskostnaden per producent reduceras dramatiskt — ett kollektivhandlingsproblem som MSB och Jordbruksverket är väl positionerade att lösa.

### 4.4 Autonomins gräns och det mänskliga omdömet

Det är viktigt att precisera vad digital tvilling-baserad automation kan och inte kan åstadkomma inom jordbrukssektorn. Tao et al. (2019) betonar att den digitala tvillingens värde i komplexa biologiska system ligger i beslutsstöd, inte i fullständig autonomi. En lingonskörd i stormigt väder med ovanlig markfukt kräver omdöme som inte är trivielt att formalisera.

Det SMILE-metodiken möjliggör är inte att ersätta skördeledaren — det är att externalisera tillräcklig information om systemets tillstånd för att en autonom plattform ska kunna operera med rimlig effektivitet under normala förhållanden, och för att en mänsklig operatör med begränsad domänspecifik erfarenhet ska kunna fatta informerade beslut i undantagssituationer.

Det är skillnaden mellan beroende och redundans.

Kritiker kan invända att jordbruksautomation och drönarlogistik skiljer sig fundamentalt från fabriksproduktion: variationen i naturliga miljöer (terräng, väder, biologisk variation) gör kunskapsexternaliseringen mer komplex än i en kontrollerad fabriksmiljö. Denna invändning är berättigad — den digitala tvillingen av ett blåbärsfält kräver sannolikt djupare sensorintegration och mer adaptiva algoritmer än en svetsstation. Vi hävdar dock att den grundläggande arkitekturen — rumslig förankring, edge-native drift, auktorisationsbaserad styrning — är domänoberoende, även om implementeringsdetaljerna varierar.

---

## 5. Drönaren — Paket, Patienter och Precisionstransit

### 5.1 Scenariot

Civil drönarlogistik är under snabb expansion i Sverige och Europa. Wingcopter, Zipline och flera svenska aktörer opererar eller planerar reguljär leveransverksamhet. EASA:s U-Space-ramverk (2021) skapar den regulatoriska grunden för integrerad luftrumshantering för obemannade luftfarkoster.

Det totalförsvarsrelevanta scenariot är vid det här laget välkänt bland beredskapsplanerare men tekniskt outrett: en drönare som idag levererar e-handelspaket i urban miljö är i princip kapabel att leverera blodsäckar, insulin eller antibiotika i krisscenario. Hårdvaran är densamma. Vad som krävs för att den konverteringen ska vara möjlig i praktiken är något annat.

### 5.2 Konversionsproblemets tre dimensioner

**Dimension 1: Operativt område.** En paketdrönare har en digital modell av sitt operationsområde kalibrerad mot civila logistikpunkter — lager, kundadresser, landningspunkter. I krisscenario är dessa inte längre relevanta. Sjukhus, krisinformationspunkter, tillfälliga medicinska stationer — hela den operativa geografin har förändrats. Utan en uppdaterad digital tvilling av operationsområdet kan drönaren inte operera säkert.

**Dimension 2: Auktorisationsstyrning.** Ett medicinleveranssystem kräver auktorisationskedja som avviker fundamentalt från e-handelslogistik. Kylkedjeövervakning, spårbarhet i leveranskedjan (chain of custody), prioriteringsbeslut vid kapacitetsbrist — dessa processer måste vara inbyggda i systemets beslutslogik. Shi och Dustdar (2016) beskriver hur edge computing-arkitekturer möjliggör lokal beslutsintelligens i distribuerade IoT-system — precis den arkitektur som krävs för ett auktorisationsbaserat drönarlogistiksystem utan beroende av central molninfrastruktur.

**Dimension 3: Regulatorisk konversion.** EASA:s U-Space-ramverk definierar operationskategorier med tydliga auktorisationskrav. En krisnödsituation kan motivera temporärt utvidgad operationsauktorisation, men processen för den temporära auktorisationen måste vara förberedd — inte improviserad. Digital Twin Consortium (2024) specificerar i sin Capabilities Periodic Table v3.0 governance-dimensionen av digitala tvillingar: systemet måste inkludera representationer av de regulatoriska och auktorisationsmässiga tillstånd som reglerar systemets drift.

### 5.3 Edge-native som totalförsvarsarkitektur

Satyanarayanan (2017) beskriver edge computing som det paradigm som möjliggör låg-latens, hög-reliabilitet beräkning i geografiskt distribuerade system. I totalförsvarskontext är edge-arkitekturens relevans inte primärt latensreduktion — det är suveränitetsbevaring.

En drönarflotta som operationellt är beroende av central molninfrastruktur för sin navigations- och beslutsintelligens är sårbar mot precis de attackvektorer som är mest sannolika i en konfliktscenario: störning av kommunikationsinfrastruktur, cyberattack mot centrala system, avskärning från internationella molntjänster.

En edge-native digital tvilling-arkitektur för drönarlogistik innebär att det operativa områdets representation, auktorisationslogiken och beslutsplaneringen körs lokalt — ombord eller i ett lokalt nätverkselement. Systemet kan operera i degraderat kommunikationsläge. Det är inte ett önskemål; det är ett krav för att systemet ska vara genuint totalförsvarsrelevant.

---

## 6. Det Gemensamma Mönstret: En Syntes

### 6.1 Strukturell parallellism

De tre scenariona delar en gemensam struktur som är värd att artikulera explicit. I varje fall:

1. Kritisk kapacitet upprätthålls av **tyst kunskap** koncentrerad hos en begränsad grupp individer
2. En **krisutlösare** — mobilisering, gränsklosning, infrastrukturattack — tar bort individerna från systemet
3. Systemet **saknar redundans** eftersom kunskapen aldrig externaliserats
4. **Digital tvilling-baserad externalisering** av den kritiska kunskapen skapar den redundans som möjliggör fortgång

Tabellen nedan syntetiserar det gemensamma mönstret:

| Utmaning | Idag | Med digital tvilling |
|----------|------|---------------------|
| Kunskap | I huvudet | I modellen |
| Planering | Excel/intuition | Dynamisk simulering |
| Omställning vid kris | Veckor–månader | Timmar–dagar |
| Beroende av individer | Totalt | Reducerat |
| Autonom drift | Omöjligt | Möjligt med rätt ramverk |
| Datasuveränitet | Okontrollerad | Arkitekturellt garanterad |
| Regulatorisk konversion | Ad hoc | Förberedd och inbyggd |

### 6.2 Falsifierbara propositioner

I linje med vetenskaplig metodologisk standard formuleras tre falsifierbara propositioner. De specifika tröskelvärden som anges nedan är analytiskt härledda uppskattningar avsedda som utgångspunkt för empirisk undersökning — inte empiriskt verifierade konstanter. Deras funktion är att göra propositionerna konkret testbara.

*Vi föreslår följande tröskelvärden som utgångspunkt för empirisk undersökning:*

**Proposition P1 (Externaliserings-effekten):** Organisationer i försvarskritiska sektorer som implementerar SMILE-metodikens Survey och Model-faser uppvisar vid ett mobiliseringsscenario med trettio procents personalreduktion en signifikant lägre produktionskapacitetsförlust jämfört med kontrollorganisationer utan digital tvillingimplementering. Det analytiskt föreslagna tröskelvärdesparet — mer än femtio procents kapacitetsbibehållande för tvillingorganisationer mot mindre än tio procent för kontrollgruppen — anger den differentieringsnivå som skulle utgöra ett praktiskt meningsfullt beredskapsresultat och tjänar som hypotesvärde för framtida fältstudier.

**Proposition P2 (Autonomi-tröskeln):** Autonoma skördeplattformar som opererar mot en digital tvilling av odlingslandskapet (terrängmodell + grödcykelmodell + maskinparametrar) uppnår en skördevolym som är analytiskt uppskattad till minst sextio procent av den skörd som mänsklig arbetsinsats av motsvarande kapacitet producerar under normala förhållanden, utan mänsklig lokal närvaro. Detta tröskelvärde är baserat på befintliga autonomiprestandastudier i kontrollerbar terräng (Bechar & Vigneault, 2016; Duckett et al., 2018) och kräver empirisk validering i naturliga bärodlingsmiljöer.

**Proposition P3 (Edge-resiliensen):** Drönarlogistiksystem med edge-native digital tvilling-arkitektur upprätthåller operativ förmåga i ett scenario med sextio procents reduktion av tillgänglig kommunikationsbandbredd, mätt som antal framgångsrika leveranser per planerad leverans, jämfört med molnberoende system som förväntas uppvisa kapacitetsförluster proportionella mot kommunikationsförlusten. Sextio procents bandbreddsreduktion väljs som testgräns eftersom det representerar en realistisk störningsnivå vid militär elektronisk krigföring utan fullständig avskärning.

Dessa propositioner är empiriskt testbara via kontrollerade fältförsök och simuleringsexperiment, och falsifiering av någon av dem — eller av de specifika tröskelvärden som anges — skulle kräva substantiell revidering av artikelns centrala argument.

### 6.3 Juridiska och governance-dimensioner

NATO:s Artikel 3-krav specificerar att alliansmedlemmar ska "upprätthålla och utveckla sin individuella och kollektiva förmåga att motstå väpnat angrepp" (NATO, 2024). Svenska tolkningar av detta krav i civilförsvarssammanhang (FM2025-19772:2) betonar industriell motståndskraft och kontinuitet i kritiska leveranskedjor.

Digital tvilling-baserad kunskapsexternalisering är inte enbart en teknologisk åtgärd — det är en governance-åtgärd. Beslutet att externalisera tyst kunskap är ett organisatoriskt och politiskt beslut som kräver incitamentsstrukturer, standardisering och i många fall statlig stimulans. Jernkontorets (2024) rekommendationer om incitament för industriell kunskapsdokumentation och Stålbyggnadsinstitutets (2024) branschinitiativ för digital transformation pekar mot en sektorsdriven rörelse som behöver policyramverk för att accelerera.

---

## 7. Arkitekturella Implikationer: Edge-Native som Suveränitetsprincip

### 7.1 CLOUD Act och den strukturella risken

En digital tvilling som exekveras i eller är beroende av infrastruktur kontrollerad av amerikanska teknologiföretag är, oavsett platsen för datalagring, potentiellt åtkomlig för amerikanska myndigheter via Clarifying Lawful Overseas Use of Data Act (CLOUD Act, 2018). För en stålbearbetare med försvarsrelevant produktion, en odlare vars terrängdata kombineras med militärt skyddsvärda geografiska underlag, eller en drönaroperatör vars operationsplaner är klassificerade vid höjd beredskap — är detta inte en abstrakt risk.

Det är ett arkitekturellt krav: den digitala tvillingen måste kunna exekvera utan beroende av utländsk molninfrastruktur. Inte som en prestandaoptimering, utan som en suveränitetsprincip.

### 7.2 Open-source och distribuerad driftsättning

Krav på datasuveränitet är inte kompatibla med proprietär, centraliserad infrastruktur. En totalförsvarsrelevant digital tvilling-arkitektur kräver:

- **Öppen källkod** för de kritiska infrastrukturkomponenterna, verifierbar och auditerbar
- **Lokal driftsättning** — systemet ska köra på hårdvara under organisationens kontroll
- **Nätverkspartitionstolerans** — systemet ska upprätthålla kritisk funktionalitet även utan nätverksanslutning
- **Kryptering** av all data i vila och transit, med nyckelhantering under organisationens kontroll

Shi och Dustdar (2016) och Satyanarayanan (2017) beskriver de teknologiska grunderna för edge-native arkitekturer. Ecodesign for Sustainable Products Regulation (European Commission, 2024) signalerar ett bredare europeiskt policyramverk för resurssuveränitet och cirkulär systemdesign — ett ramverk som digital tvilling-infrastrukturen bör anpassas till från grunden.

### 7.3 Edge-native systemens egna begränsningar

Edge-native arkitektur löser ett substantiellt säkerhetsproblem men introducerar sina egna utmaningar som måste erkännas. Fysisk säkerhet är en reell attackvektor: ett edge-system som körs på hårdvara i en fabrikshall eller ett jordbrukslager är sårbart mot fysisk åtkomst, firmware-manipulation och lokalt nätverksintrång på sätt som centralt driftade system inte är. Lokal beräkningskapacitet medför kostnader som SMF:er kan ha svårt att absorbera — dedikerade edge-servrar, lokala nätverksinfrastrukturer och kompetensbehov för lokal systemförvaltning är reella barriärer. Uppdateringspropagering i fraktionerat kommunikationsläge skapar versionsspridning: om fem fabriksenheter kör olika versioner av tvillingrepresentationen riskerar federerade beslut att baseras på inkonsistenta modeller.

Dessa begränsningar är välkända inom edge computing-litteraturen (Shi & Dustdar, 2016; Satyanarayanan, 2017) och utgör aktiva forskningsfält. I totalförsvarskontext är bedömningen ändå att de är hanterbara jämfört med alternativet: ett molnberoende system är sårbart mot precis de attackvektorer — kommunikationsavskärning, cyberattack mot central infrastruktur, CLOUD Act-exponering — som har högst sannolikhet i ett faktiskt konfliktsscenario. Edge-systemets begränsningar är i hög grad lokala ingenjörsproblem; molnsystemets begränsningar är strukturella suveränitetsproblem.

### 7.4 Interoperabilitet utan centralisering

Edge-native arkitektur innebär inte informationssiloing. IEC 63278-1 (2024) Asset Administration Shell specificerar ett standardiserat representationsformat som möjliggör informationsdelning mellan digitala tvillingar utan krav på gemensam central infrastruktur. INSPIRE-direktivets (European Commission, 2007) geodatainfrastruktur tillhandahåller den spatiala informationsgrunden.

Den tekniska arkitekturen för ett totalförsvarsanpassat digitalt tvillingsystem är alltså: lokalt exekverande, öppen källkod, standardiserad representation, interoperabel utan centraliseringsberoende. Det är varken framtidsfantasi eller ovanligt ambitiöst — det är en ingenjörsmässigt väldefinierad kombination av existerande teknologier. Det som saknas är inte teknologin, utan den samordnade implementeringsviljan.

---

## 8. Diskussion

### 8.1 Kunskapsexternalisering som beredskapsparadigm

Denna artikels centrala bidrag är argumentet att digital tvilling-teknologins primära bidrag till totalförsvarsberedskapen inte är operationellt, utan epistemologiskt. Det handlar inte i första hand om att robotar ersätter soldater i produktionshallarna eller om att drönare är snabbare än lastbilar — det handlar om att flytta systemkritisk kunskap från en oreplikerbar biologisk bärare till en reproducerbar, redundant och platsokänslig modell.

Detta perspektivskifte har praktiska implikationer för hur totalförsvarsmyndigheter bör formulera krav och incitament gentemot civila industrier. Istället för att primärt fokusera på fysisk kapacitet — antal maskiner, lagernivåer, produktionskapacitet — bör krav inkludera kunskapsdokumentation och externalisering som explicita beredskapsparametrar.

Hollnagel (2011) och Hollnagel et al. (2006) beskriver resiliensingenjörens centrala principer: förmåga att *förutse*, *övervaka*, *reagera* och *lära*. Tillämpat på de tre scenariona i denna artikel visar sig den digitala tvillingens bidrag till respektive kapabilitet på konkreta sätt.

*Förutse:* I fabriksscenariots simuleringsmodell kan produktionschefen köra ett "trettio procents personalreduktion"-scenario i förväg och identifiera vilka maskinstationer som uppnår kritiska flaskhalsar, innan mobiliseringen inträffar. I skördescenariot kan grödcykelmodellen beräkna skördefönstrets längd under alternativa väderleksscenarier och signalera när automatiserad skörd måste påbörjas. I drönarscenariot kan det edge-inbyggda planeringsverktyget simulera alternativa leveransrutter vid förlorad kommunikation med specifika noder.

*Övervaka:* En synkroniserad digital tvilling registrerar kontinuerligt avvikelser mellan den förväntade och observerade systemstaten. I stålbearbetningsfabriken flaggas exempelvis om en maskin opererar utanför sin kalibrerade kapacitetsenvelope — ett tidigt varningssignal för underhållsbehov eller operatörsbyte.

*Reagera:* Förberedda responsmodeller — scenarion som exekverats och validerats i tvillingen före krisen — reducerar reaktionstiden dramatiskt. Skillnaden är densamma som mellan en övad evakueringsplan och en improviserad utrymning: samma aktörer, men fundamentalt olika reaktionshastighet.

*Lära:* Modellen uppdateras efter varje driftscykel — svetsparametrar justeras när kvalitetsdata visar systematiska avvikelser, skörderutter optimeras efter säsongsutfall, drönarkorridorer rekalibreras utifrån faktisk flygtidsdata. SMILE-metodikens Learn- och Evolve-faser är den operationaliserade resiliensingenjörslärocykeln.

### 8.2 Institutionella barriärer

Implementeringen av digitala tvillingar i SMF-sektorn och lantbrukssektorn möter välkända institutionella hinder. Absorptionsförmågan (Cohen & Levinthal, 1990) är begränsad i organisationer vars primära kompetens är operationell snarare än teknologisk. Investeringshorisonten för SMF sträcker sig inte naturligt till infrastrukturinvesteringar vars avkastning är primärt beredskapsrelaterad — det vill säga realiseras i scenarier som kräver statligt incitament för att vägas in.

Callon (1986) och Latour (2005) ger ett analytiskt ramverk för förståelsen av varför kunskapsexternaliseringsprojekt ofta misslyckas: de kräver en *translation* av intressen — en omformulering av projektet som alignar incitamenten hos alla involverade aktörer. För en fabrikschef som Kurt är ett digital tvillingsystem initialt ett hot mot den status och det unika värde som hans tysta kunskap representerar. Lyckad implementation kräver att projektet presenteras som ett arvsbevarandeprojekt — Kurts kunskapsarv görs odödligt — snarare än som ett ersättningsprojekt.

### 8.3 Motargument och kritik

Två centrala invändningar mot artikelns argument förtjänar direkt bemötande.

**Invändning 1: "Digitala tvillingar i SMF-kontext har hög implementeringsrisk."** Kritzinger et al. (2018) konstaterar i sin kategoriska litteraturöversikt att majoriteten av digitala tvillingsimplementeringar sker i resursrika storindustrikontexter och att SMF-implementeringar systematiskt underskattar integrationskomplexiteten. Invändningen är korrekt och viktig. Artikelns svar är inte att bestrida implementeringssvårigheten utan att kontextualisera den: beredskapsargumentet förändrar cost-benefit-kalkylen. En SMF som saknar kunskapsexternalisering riskerar inte enbart operationell ineffektivitet — den riskerar total kapacitetskollaps vid mobilisering. Den relevanta jämförelsen är inte implementeringskostnad kontra status quo utan implementeringskostnad kontra beredskapskonsekvensen av att inte implementera. Statliga incitamentprogram och sektorsgemensam infrastruktur (som INSPIRE-geodata) kan dessutom reducera per-enhetskostnaden väsentligt.

**Invändning 2: "Scenariona saknar empirisk grund."** De tre scenariona i denna artikel är analytiska konstruktioner baserade på branschrapporter, policytexter och akademisk litteratur — inte fallstudier med primärdata. Artikeln gör inte anspråk på annat. Scenariernas funktion är att illustrera mekanismerna och formulera testbara propositioner som empirisk forskning sedan kan bekräfta eller falsifiera. Den vetenskapliga standarden för konceptuell och teoridriven forskning — att producera precist specificerade hypoteser — uppfylls av de tre falsifierbara propositionerna i avsnitt 6.2.

### 8.4 Standardiseringens roll

Digital Twin Consortium (2024) och IEC 63278-1 (2024) representerar den nödvändiga standardiseringsinfrastrukturen för att digitala tvillingar ska kunna skalas och interoperera. MSB och Försvarsmakten har en naturlig roll i att specificera minimistandarder för digitala tvillingar i kritisk infrastruktur — en roll som delvis adresseras i FM2025-19772:2 men som behöver mer konkret teknologisk specificitet för att vara implementerbar.

---

## 9. Begränsningar

Flera begränsningar i denna artikel bör erkännas explicit.

**Empirisk bas:** De tre scenariona är analytiska konstruktioner baserade på branschrapporter, policytexter och befintlig forskning — inte fältobservationer. Empirisk validering via fallstudier i verkliga SMF-, lantbruks- och logistikmiljöer är nödvändig för att bekräfta de mekanismer som artikeln postulerar.

**SMILE-metodikens valideringsstatus:** En central begränsning är att SMILE-metodiken (Waern, 2026) ännu inte har genomgått oberoende empirisk validering utanför utvecklarens egna projekt. Metodikens teoretiska grund — kunskapsexternaliseringsprotokoll förankrade i Nonaka och Takeuchis (1995) SECI-modell och rumslig informationsarkitektur enligt INSPIRE-direktivet — bygger på etablerade ramverk, men den specifika SMILE-implementeringen har inte testats av oberoende forskare. Det pågående DTMETAL-projektet (finansierat av Vinnova, start hösten 2026) utgör det första systematiska utvärderingstillfället. Tills dess bör SMILE betraktas som en lovande men oprövad metodik snarare än en validerad standard.

**Implementeringskomplexitet:** Artikeln behandlar implementeringsbarriärerna summariskt. En mer fullständig analys skulle kräva specificitet kring kostnader, tidsramar, kompetenskrav och förändringsledningsutmaningar för varje sektor.

**Teknologisk mognad:** Autonoma skörderobotars kapacitet under verkliga fältkonditioner är fortfarande under utveckling. Proposition P2 är formulerad utifrån en teknologisk trajektoria snarare än verifierad nulägeskapacitet.

**Regulatoriskt landskap:** Drönarregleringen är i snabb förändring. Analysen av konversionsproblematiken baseras på EASA U-Space-ramverket per 2024; regulatoriska förändringar kan förändra förutsättningarna.

**Sekretesskrav:** Totalförsvarsrelevant kunskapsexternalisering möter oundvikliga spänningar mot sekretesskrav — information som externaliserats i en digital tvilling kan vara känslig ur ett säkerhetsperspektiv. Denna spänning är underbehandlad i artikeln och förtjänar separat analys.

---

## 10. Framtida Forskning

Denna artikel öppnar flera forskningsfält som förtjänar fördjupning:

**Fältvalidering av propositionerna:** De tre falsifierbara propositionerna kräver kontrollerade empiriska studier. En longitudinell jämförelsestudie av matchade organisationspar — med och utan digital tvilling-implementation — i simuleringar av mobiliseringsscenarier skulle ge kritisk empirisk grund.

**Kvantifiering av tyst kunskaps värde:** Det saknas metodologi för att värdera den tysta kunskapen i kritisk infrastruktur. En ekonometrisk modell för kunskapsexternaliseringsnytta i totalförsvarskontext — inkluderande produktionsförlust vid mobilisering, återhämtningstid och alternativkostnad — skulle underlätta beslutsfattande för totalförsvarsmyndigheter.

**Sekretesspresering digital tvilling:** Teknologier för differentiell sekretess (differential privacy) (Dwork & Roth, 2014) och federerat lärande möjliggör kunskapsexternalisering utan att exponera specifik information. Tillämpning av dessa tekniker i totalförsvarskontext är ett underutforskat men kritiskt område.

**Komparativ nordisk analys:** Finland, Norge och Danmark har alla aktiva totalförsvarsprogram med civilkomponent. En komparativ analys av digitala tvillingimplementeringar i respektive lands kritiska infrastruktur — deras metodologier, framgångar och misslyckanden — skulle ge värdefull kontext för svenska policyinitiativ.

**Social acceptans och förändringsprocesser:** Hur upplevs kunskapsexternalisering av de individer vars tysta kunskap externaliseras? Callon (1986) och Latour (2005) ger analytiska redskap, men empiriska studier av förändringsprocesser i SMF-kontext är nödvändiga för att förstå de sociala mekanismer som antingen möjliggör eller blockerar implementering.

---

## 11. Slutsatser

Sverige förbereder sig för ett säkerhetspolitiskt landskap som kräver totalförsvarsmässig robusthet på alla nivåer — militärt, civilt, industriellt och logistiskt. Den resursbas som detta kräver är inte primärt materiell. Den är epistemologisk.

Tre scenarion — stålbearbetningsfabrikens ensamme planerare, bärodlarens säsongsberoende skörd, drönaroperatörens konversionsproblem — illustrerar en genomgående sårbarhet i den svenska civilförsvarsinfrastrukturen: kritisk kunskap är tyst, personbunden och icke-redundant. Vid mobilisering, gränsklosning eller infrastrukturangrepp försvinner kunskapen med individerna.

Den digitala tvillingens grundläggande bidrag till totalförsvarsberedskapen är att omvandla denna epistemologiska sårbarhet till en strukturell styrka. Via SMILE-metodikens systematiska kunskapsexternalisering — Survey, Model, Integrate, Learn, Evolve — kan organisationer flytta systemkritisk kunskap från den biologiska minnets bräcklighet till den reproducerbara modellens robusthet.

Detta är inte primärt en teknologisk transformation. Det är en organisatorisk och politisk prioritering: att behandla kunskapsexternalisering som en beredskapsåtgärd jämförbar med materialanskaffning, personalrekrytering och logistikplanering.

Tre falsifierbara propositioner specificerar de empiriska förväntningarna. En edge-native, datasuveränitetsbevarande arkitektur specificerar de teknologiska kraven. En syntetiserande jämförelsetabell visar det gemensamma mönstret.

Det Polanyi (1966) observerade om mänsklig kognition — att vi vet mer än vi kan berätta — är inte ett öde utan en utmaning. Digital tvilling-teknologi, rätt implementerad, är svaret på den utmaningen. För ett land som investerar i sin totalförsvarsförmåga är det dags att inkludera kunskapsexternalisering i investeringsportföljen.

Bären väntar inte. Balkarna måste svettas rätt. Drönaren måste veta var den flyger. Och dessa kunskaper — just nu inbäddade i händer och huvuden som kan kallas bort — behöver hitta hem i modeller som stannar kvar.

---

## Tack

Författaren vill tacka det svenska totalförsvarssamfundet och de industrisektorer vars praktik inspirerat denna analys. WINNIIO AB:s SMILE-metodikutveckling har bedrivits utan extern finansiering.

---

## Intressekonflikt

Författaren är VD för WINNIIO AB, som utvecklar SMILE-metodiken som refereras i denna artikel. SMILE publiceras under Creative Commons-licens (CC-BY-4.0) och är fritt tillgänglig. Den teoretiska analysen är oberoende av kommersiella intressen, men läsaren bör vara medveten om denna relation.

---

## Bidrag

Ensamförfattad artikel. Nicolas Waern ansvarar för konceptualisering, analys, skrivning och revision.

---

## Datatillgänglighet

Denna artikel innehåller inga primärdata. Alla refererade datakällor är publikt tillgängliga och citerade i referenslistan.

---

## Referenser

Brown, J. S., & Duguid, P. (2001). Knowledge and organization: A social-practice perspective. *Organization Science*, 12(2), 198–213. https://doi.org/10.1287/orsc.12.2.198.10116

Bechar, A., & Vigneault, C. (2016). Agricultural robots for field operations: Concepts and components. *Biosystems Engineering*, 149, 94–111. https://doi.org/10.1016/j.biosystemseng.2016.06.014

Callon, M. (1986). Some elements of a sociology of translation: Domestication of the scallops and the fishermen of St Brieuc Bay. I J. Law (Red.), *Power, Action and Belief: A New Sociology of Knowledge* (s. 196–233). Routledge.

Clarifying Lawful Overseas Use of Data Act [CLOUD Act], Pub. L. No. 115-141, 132 Stat. 348 (2018).

Cohen, W. M., & Levinthal, D. A. (1990). Absorptive capacity: A new perspective on learning and innovation. *Administrative Science Quarterly*, 35(1), 128–152. https://doi.org/10.2307/2393553

Digital Twin Consortium. (2024). *Capabilities Periodic Table v3.0*. Object Management Group. https://www.digitaltwinconsortium.org

Duckett, T., Pearson, S., Blackmore, S., Grieve, B., Chen, W. H., Cielniak, G., Cleaversmith, J., Erbilgin, J., Fox, C., From, P., Georgilas, I., Gonzalez, F., Gould, I., Hanheide, M., Hunter, A., Iida, F., Mineur, F., Nundloll, V., Oberti, R., … Sherrat, T. (2018). *Agricultural robotics: The future of robotic agriculture* (White Paper 2018). UK-RAS Network. https://doi.org/10.31256/WP2018.1

Dwork, C., & Roth, A. (2014). The algorithmic foundations of differential privacy. *Foundations and Trends in Theoretical Computer Science*, 9(3–4), 211–407. https://doi.org/10.1561/0400000042

EASA. (2021). *Opinion 01/2021: High-level regulatory framework for the U-space*. European Union Aviation Safety Agency. https://www.easa.europa.eu

European Commission. (2007). *Directive 2007/2/EC establishing an Infrastructure for Spatial Information in the European Community (INSPIRE)*. Official Journal of the European Union, L 108, 1–14.

European Commission. (2024). *Regulation (EU) 2024/1781 on ecodesign requirements for sustainable products (ESPR)*. Official Journal of the European Union.

Försvarsmakten & MSB. (2025). *Utgångspunkter för totalförsvarsplanering 2025–2030* (FM2025-19772:2). Försvarsmakten.

FOI. (2025). *Civil industris bidrag till totalförsvaret* (FOI-R--5612--SE). Totalförsvarets forskningsinstitut.

Grieves, M. (2014). Digital twin: Manufacturing excellence through virtual factory replication (White Paper). Michael W. Grieves LLC.

Hollnagel, E. (2011). *Prologue: The scope of resilience engineering*. I E. Hollnagel, J. Pariès, D. D. Woods, & J. Wreathall (Red.), *Resilience Engineering in Practice* (s. xxix–xxxix). Ashgate.

Hollnagel, E., Woods, D. D., & Leveson, N. (Red.). (2006). *Resilience Engineering: Concepts and Precepts*. Ashgate.

IEC 63278-1. (2024). *Asset Administration Shell for industrial applications — Part 1: Asset Administration Shell structure* (1:a uppl.). International Electrotechnical Commission.

ISO 23247-1. (2021). *Automation systems and integration — Digital twin framework for manufacturing — Part 1: Overview and general principles*. International Organization for Standardization.

Jernkontoret. (2024). *Stålindustrin och totalförsvaret* (Rapport D 889). Jernkontoret.

Kritzinger, W., Karner, M., Traar, G., Henjes, J., & Sihn, W. (2018). Digital twin in manufacturing: A categorical literature review and classification. *IFAC-PapersOnLine*, 51(11), 1016–1022. https://doi.org/10.1016/j.ifacol.2018.08.474

Latour, B. (2005). *Reassembling the Social: An Introduction to Actor-Network-Theory*. Oxford University Press.

MSB. (2025). *Nationell riskbild för strategisk beredskap 2025* (MSB 2025-08877). Myndigheten för samhällsskydd och beredskap.

NATO. (2024). *Allied resilience baseline requirements: Annex to the baseline requirements for national resilience*. NATO HQ.

Nonaka, I., & Takeuchi, H. (1995). *The Knowledge-Creating Company: How Japanese Companies Create the Dynamics of Innovation*. Oxford University Press.

Polanyi, M. (1966). *The Tacit Dimension*. Doubleday.

Prop. 2024/25:34. *Totalförsvaret 2025–2030*. Sveriges riksdag. https://www.riksdagen.se/sv/dokument-och-lagar/dokument/proposition/totalforsvaret-2025-2030_hc0334/

RAMI 4.0. (2015). *Reference Architectural Model Industrie 4.0 (RAMI 4.0)*. DIN SPEC 91345. Deutsches Institut für Normung. https://doi.org/10.31030/2436156

Saad, A., Faddel, S., & Mohammed, O. (2024). Digital twin maturity models: A systematic review and synthesis. *IEEE Access*, 12, 45112–45132. https://doi.org/10.1109/ACCESS.2024.3380125

Satyanarayanan, M. (2017). The emergence of edge computing. *Computer*, 50(1), 30–39. https://doi.org/10.1109/MC.2017.9

Shi, W., & Dustdar, S. (2016). The promise of edge computing. *Computer*, 49(5), 78–81. https://doi.org/10.1109/MC.2016.145

Star, S. L., & Griesemer, J. R. (1989). Institutional ecology, 'translations' and boundary objects: Amateurs and professionals in Berkeley's Museum of Vertebrate Zoology, 1907–39. *Social Studies of Science*, 19(3), 387–420. https://doi.org/10.1177/030631289019003001

Stålbyggnadsinstitutet. (2024). *Branschrapport 2024: Digital transformation och kompetensförsörjning inom stålbyggnadssektorn*. SBI.

Tao, F., Zhang, H., Liu, A., & Nee, A. Y. C. (2019). Digital twin in industry: State-of-the-art. *IEEE Transactions on Industrial Informatics*, 15(4), 2405–2415. https://doi.org/10.1109/TII.2018.2873186

Waern, N. (2026). *SMILE: Systematic Model-based Integration of Legacy and Emerging knowledge — Methodology v4.4*. WINNIIO AB. https://doi.org/10.5281/zenodo.19683062

---

*Nicolas Waern är grundare och VD för WINNIIO AB, Göteborg. Han forskar och skriver om digital tvilling-metodologi, suverän AI-infrastruktur och civilförsvarets epistemologiska förutsättningar. Kontakt: ceo@winniio.io*

*Mottagen: 2026-04-25 | Publicerad: 2026-04-25 | Licens: CC-BY-4.0*
