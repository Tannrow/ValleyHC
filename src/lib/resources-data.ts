// AUTO-GENERATED from caldera-app/research/yakima-resources.json (2026-06-14).
// Static community-resource directory for the /resources section. No backend —
// imported at build time. To update, edit the research source + regenerate.
// 144 organizations across 25 categories.

export type CommunityResource = {
  id: string;
  name: string;
  /** Category keys this org serves (see resourceCategories). */
  categories: string[];
  description: string;
  phone: string | null;
  address: string | null;
  city: string | null;
  website: string | null;
  hours: string | null;
  /** Public logo/image URL, or null. */
  logoUrl: string | null;
  /** Research confidence; 'medium'/'low' = verify before relying on it. */
  confidence: "high" | "medium" | "low";
  /** Where the entry was verified (not shown to users). */
  source: string | null;
};

export type ResourceCategory = {
  key: string;
  label: string;
  labelEs: string;
  blurb: string;
  blurbEs: string;
  count: number;
};

export const resourceCategories: ResourceCategory[] = [
  {
    "key": "crisis",
    "label": "Crisis help now",
    "labelEs": "Ayuda en crisis ahora",
    "blurb": "Free, private support any time, day or night.",
    "blurbEs": "Apoyo gratuito y privado a cualquier hora, de día o de noche.",
    "count": 4
  },
  {
    "key": "mental_health",
    "label": "Mental health",
    "labelEs": "Salud mental",
    "blurb": "Counseling and support for how you think and feel.",
    "blurbEs": "Consejería y apoyo para cómo piensas y te sientes.",
    "count": 9
  },
  {
    "key": "substance_use_treatment",
    "label": "Substance use treatment",
    "labelEs": "Tratamiento por uso de sustancias",
    "blurb": "Help to heal from alcohol or drug use.",
    "blurbEs": "Ayuda para sanar del uso de alcohol o drogas.",
    "count": 13
  },
  {
    "key": "recovery_support",
    "label": "Recovery support (peer)",
    "labelEs": "Apoyo de pares en la recuperación",
    "blurb": "People who walk with you in recovery.",
    "blurbEs": "Personas que te acompañan en la recuperación.",
    "count": 10
  },
  {
    "key": "recovery_housing",
    "label": "Recovery housing",
    "labelEs": "Vivienda para la recuperación",
    "blurb": "A supportive place to live while you stay in recovery.",
    "blurbEs": "Un lugar de apoyo para vivir mientras te mantienes en recuperación.",
    "count": 5
  },
  {
    "key": "harm_reduction",
    "label": "Harm reduction",
    "labelEs": "Reducción de daños",
    "blurb": "Supplies and support to stay safer, no judgment.",
    "blurbEs": "Insumos y apoyo para mantenerte más seguro, sin juicios.",
    "count": 2
  },
  {
    "key": "housing",
    "label": "Housing & shelter",
    "labelEs": "Vivienda y refugio",
    "blurb": "A safe place to sleep tonight, and help finding a home.",
    "blurbEs": "Un lugar seguro para dormir esta noche y ayuda para encontrar un hogar.",
    "count": 8
  },
  {
    "key": "food",
    "label": "Food help",
    "labelEs": "Ayuda con alimentos",
    "blurb": "Free groceries and meals, no questions asked.",
    "blurbEs": "Comida y despensa gratis, sin preguntas.",
    "count": 16
  },
  {
    "key": "financial_assistance",
    "label": "Financial assistance",
    "labelEs": "Ayuda económica",
    "blurb": "Help with rent, utilities, and emergency expenses.",
    "blurbEs": "Ayuda con la renta, los servicios públicos y gastos de emergencia.",
    "count": 13
  },
  {
    "key": "transportation",
    "label": "Rides & transportation",
    "labelEs": "Transporte y viajes",
    "blurb": "Ways to get to appointments, work, and around town.",
    "blurbEs": "Formas de llegar a tus citas, al trabajo y por la ciudad.",
    "count": 5
  },
  {
    "key": "case_management",
    "label": "Case management",
    "labelEs": "Gestión de casos",
    "blurb": "Someone to help coordinate the help you need.",
    "blurbEs": "Alguien que te ayuda a coordinar la ayuda que necesitas.",
    "count": 13
  },
  {
    "key": "domestic_violence",
    "label": "Domestic violence support",
    "labelEs": "Apoyo ante la violencia doméstica",
    "blurb": "Safety, support, and someone who believes you.",
    "blurbEs": "Seguridad, apoyo y alguien que te cree.",
    "count": 3
  },
  {
    "key": "legal",
    "label": "Legal help",
    "labelEs": "Ayuda legal",
    "blurb": "Free legal advice for everyday problems.",
    "blurbEs": "Asesoría legal gratuita para problemas cotidianos.",
    "count": 4
  },
  {
    "key": "employment",
    "label": "Jobs & training",
    "labelEs": "Empleo y capacitación",
    "blurb": "Help finding work or learning new skills.",
    "blurbEs": "Ayuda para encontrar trabajo o aprender nuevas habilidades.",
    "count": 6
  },
  {
    "key": "education",
    "label": "Education",
    "labelEs": "Educación",
    "blurb": "Classes, GED, and help going back to school.",
    "blurbEs": "Clases, GED y ayuda para volver a la escuela.",
    "count": 8
  },
  {
    "key": "childcare",
    "label": "Childcare",
    "labelEs": "Cuidado de niños",
    "blurb": "Help finding safe, affordable care for your kids.",
    "blurbEs": "Ayuda para encontrar cuidado seguro y asequible para tus hijos.",
    "count": 7
  },
  {
    "key": "benefits_dshs",
    "label": "Benefits & basic needs (DSHS)",
    "labelEs": "Beneficios y necesidades básicas (DSHS)",
    "blurb": "Help paying for food, health care, and everyday needs.",
    "blurbEs": "Ayuda para pagar comida, atención médica y necesidades diarias.",
    "count": 16
  },
  {
    "key": "healthcare_medical",
    "label": "Medical care",
    "labelEs": "Atención médica",
    "blurb": "Care for your body, whatever you can pay.",
    "blurbEs": "Cuidado para tu cuerpo, pagues lo que pagues.",
    "count": 11
  },
  {
    "key": "healthcare_dental",
    "label": "Dental care",
    "labelEs": "Atención dental",
    "blurb": "Cleanings, fillings, and help when a tooth hurts.",
    "blurbEs": "Limpiezas, empastes y ayuda cuando te duele un diente.",
    "count": 10
  },
  {
    "key": "insurance_navigation",
    "label": "Insurance & coverage help",
    "labelEs": "Ayuda con seguros y cobertura",
    "blurb": "Help signing up for and using health coverage.",
    "blurbEs": "Ayuda para inscribirte y usar la cobertura de salud.",
    "count": 6
  },
  {
    "key": "reentry_justice",
    "label": "Reentry & justice-involved",
    "labelEs": "Reingreso y justicia",
    "blurb": "Support coming home and getting a fresh start.",
    "blurbEs": "Apoyo para regresar a casa y comenzar de nuevo.",
    "count": 3
  },
  {
    "key": "veterans",
    "label": "Veterans",
    "labelEs": "Veteranos",
    "blurb": "Support for people who served, and their families.",
    "blurbEs": "Apoyo para quienes sirvieron y sus familias.",
    "count": 8
  },
  {
    "key": "youth_family",
    "label": "Youth & family",
    "labelEs": "Jóvenes y familia",
    "blurb": "Support for young people and the people who love them.",
    "blurbEs": "Apoyo para los jóvenes y para quienes los quieren.",
    "count": 12
  },
  {
    "key": "seniors",
    "label": "Older adults",
    "labelEs": "Adultos mayores",
    "blurb": "Help made for older adults and their caregivers.",
    "blurbEs": "Ayuda pensada para adultos mayores y sus cuidadores.",
    "count": 7
  },
  {
    "key": "disability_services",
    "label": "Disability services",
    "labelEs": "Servicios para discapacidad",
    "blurb": "Support and services for people with disabilities.",
    "blurbEs": "Apoyo y servicios para personas con discapacidad.",
    "count": 7
  }
];

export const communityResources: CommunityResource[] = [
  {
    "id": "comprehensive-healthcare-crisis-services-yakima-county-crisi",
    "name": "Comprehensive Healthcare Crisis Services (Yakima County Crisis Line)",
    "categories": [
      "crisis",
      "mental_health"
    ],
    "description": "Yakima County's designated 24/7 behavioral health crisis line and walk-in Crisis Triage Center for adults in mental health or substance use crisis.",
    "phone": "1-800-572-8122",
    "address": "402 S 4th Avenue, Yakima, WA 98902",
    "city": "Yakima",
    "website": "https://comphc.org/services/crisis-response/",
    "hours": "24 hours a day, 7 days a week, 365 days a year",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://comphc.org/services/crisis-response/"
  },
  {
    "id": "988-suicide-crisis-lifeline-washington",
    "name": "988 Suicide & Crisis Lifeline (Washington)",
    "categories": [
      "crisis",
      "mental_health"
    ],
    "description": "Free, confidential 24/7 call/text/chat line for anyone in suicidal or emotional crisis; calls from Yakima are routed to Washington crisis centers.",
    "phone": "988",
    "address": null,
    "city": null,
    "website": "https://wa988.org/",
    "hours": "24/7/365 (call, text, or chat)",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://wa988.org/"
  },
  {
    "id": "ywca-yakima-24-hour-domestic-violence-crisis-line",
    "name": "YWCA Yakima 24-Hour Domestic Violence Crisis Line",
    "categories": [
      "crisis"
    ],
    "description": "24/7 helpline with trained advocates for domestic violence survivors; provides emergency shelter, safety planning, and legal advocacy.",
    "phone": "(509) 248-7796, ext. 3",
    "address": "818 W. Yakima Avenue, Yakima, WA 98902",
    "city": "Yakima",
    "website": "https://www.ywcayakima.org/",
    "hours": "24 hours a day, 7 days a week, 365 days a year",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.ywcayakima.org/"
  },
  {
    "id": "nami-yakima",
    "name": "NAMI Yakima",
    "categories": [
      "mental_health",
      "crisis"
    ],
    "description": "Local affiliate of the National Alliance on Mental Illness offering free peer-led support groups, family classes, education, and mental health referrals.",
    "phone": "(509) 453-8229",
    "address": "107 S. 6th Street, Yakima, WA 98901",
    "city": "Yakima",
    "website": "https://namiyakima.org/",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://namiyakima.org/resources"
  },
  {
    "id": "comprehensive-healthcare-yakima-center",
    "name": "Comprehensive Healthcare - Yakima Center",
    "categories": [
      "mental_health"
    ],
    "description": "Nonprofit community mental health center providing outpatient therapy, psychiatry, and medication management for children, adults, and families.",
    "phone": "(509) 575-4084",
    "address": "402 South 4th Avenue, Yakima, WA 98902",
    "city": "Yakima",
    "website": "https://comphc.org/",
    "hours": "Mon-Fri 8am-5pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://comphc.org/"
  },
  {
    "id": "yakima-valley-farm-workers-clinic-behavioral-health",
    "name": "Yakima Valley Farm Workers Clinic - Behavioral Health",
    "categories": [
      "mental_health"
    ],
    "description": "Federally qualified health center offering individual, group, and family therapy plus psychiatric services for children, adolescents, and adults; accepts Medicaid and offers a sliding scale.",
    "phone": "(509) 453-1344",
    "address": "918 East Mead Avenue, Yakima, WA 98903",
    "city": "Yakima",
    "website": "https://www.yvfwc.com/services/behavioral-health/",
    "hours": null,
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://www.yvfwc.com/services/behavioral-health/"
  },
  {
    "id": "children-s-village",
    "name": "Children's Village",
    "categories": [
      "mental_health",
      "youth_family"
    ],
    "description": "Hospital-based outpatient center (MultiCare Yakima Memorial / Yakima Valley Farm Workers Clinic) providing 30+ coordinated services for children with special health-care needs and their families: autism diagnosis, developmental screening, therapies, dental, behavioral health, early intervention, and family support.",
    "phone": "(509) 574-3200",
    "address": "3801 Kern Road, Yakima, WA 98902",
    "city": "Yakima",
    "website": "https://www.yakimachildrensvillage.org/services/behavioral-health/",
    "hours": "Mon-Thu 8am-5pm, Fri 8am-3pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.multicare.org/location/childrens-village/"
  },
  {
    "id": "triumph-treatment-services-genesis-outpatient-mental-health-",
    "name": "Triumph Treatment Services - Genesis Outpatient Mental Health Clinic",
    "categories": [
      "mental_health"
    ],
    "description": "Outpatient mental health therapy and psychiatric/medication management for adults 18+, including individual, group, and family counseling and telehealth; substance use disorder not required.",
    "phone": "(509) 248-1800",
    "address": "120 S 3rd St, Yakima, WA 98901",
    "city": "Yakima",
    "website": "https://triumphtx.org/",
    "hours": "Mon-Thu 8am-6pm, Fri 8am-5pm",
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://triumphtx.org/"
  },
  {
    "id": "merit-resource-services",
    "name": "MERIT Resource Services",
    "categories": [
      "mental_health"
    ],
    "description": "CARF-accredited provider offering mental health counseling and therapy (anxiety, depression, trauma, anger) in English and Spanish across the Yakima Valley.",
    "phone": "877-789-3344",
    "address": "315 North 2nd Street, Yakima, WA 98901",
    "city": "Yakima",
    "website": "https://www.meritresources.org/behavioral-health-services-yakima/",
    "hours": null,
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://www.meritresources.org/behavioral-health-services-yakima/"
  },
  {
    "id": "yakima-neighborhood-health-services-behavioral-health",
    "name": "Yakima Neighborhood Health Services - Behavioral Health",
    "categories": [
      "mental_health"
    ],
    "description": "Community health center providing brief therapy and behavioral health counseling integrated into its clinics in Yakima, Sunnyside, and Granger.",
    "phone": "(509) 249-6232",
    "address": "12 S 8th Street, Yakima, WA 98901",
    "city": "Yakima",
    "website": "https://ynhs.org/services/behavioral-health",
    "hours": null,
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://ynhs.org/services/behavioral-health"
  },
  {
    "id": "triumph-treatment-services",
    "name": "Triumph Treatment Services",
    "categories": [
      "substance_use_treatment",
      "recovery_housing",
      "recovery_support"
    ],
    "description": "Nonprofit offering outpatient and residential/inpatient substance use and mental health treatment, MAT, peer support, and recovery/transitional housing for individuals and families (including pregnant/parenting women).",
    "phone": "509-248-1800",
    "address": "120 S 3rd St",
    "city": "Yakima",
    "website": "https://triumphtx.org/",
    "hours": "Mon-Thu 8am-6pm; Fri 8am-5pm",
    "logoUrl": "https://triumphtx.org/wp-content/uploads/2020/07/Triumph_Logo_OneColorWhite.png",
    "confidence": "high",
    "source": "https://triumphtx.org/"
  },
  {
    "id": "triumph-treatment-services-recovery-housing",
    "name": "Triumph Treatment Services - Recovery Housing",
    "categories": [
      "recovery_housing"
    ],
    "description": "Clean-and-sober transitional and permanent recovery housing (some WAQRR-accredited) for men, pregnant/parenting women with children, and homeless families in active recovery, with case management.",
    "phone": "509-853-4130",
    "address": "122 S 3rd St",
    "city": "Yakima",
    "website": "https://triumphtx.org/housing/",
    "hours": null,
    "logoUrl": "https://triumphtx.org/wp-content/uploads/2020/07/Triumph_Logo_OneColorWhite.png",
    "confidence": "high",
    "source": "https://triumphtx.org/housing/"
  },
  {
    "id": "merit-resource-services-yakima",
    "name": "Merit Resource Services - Yakima",
    "categories": [
      "substance_use_treatment",
      "recovery_support"
    ],
    "description": "Nonprofit outpatient drug and alcohol treatment provider offering medication-assisted treatment (methadone, buprenorphine, naltrexone), intensive outpatient, and counseling; CARF-accredited.",
    "phone": "509-469-9366",
    "address": "315 N 2nd Street",
    "city": "Yakima",
    "website": "https://www.meritresources.org/",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.meritresources.org/locations/"
  },
  {
    "id": "merit-resource-services-toppenish",
    "name": "Merit Resource Services - Toppenish",
    "categories": [
      "substance_use_treatment",
      "recovery_support"
    ],
    "description": "Outpatient substance use disorder treatment including MAT, IOP, and counseling in the lower Yakima Valley.",
    "phone": "509-865-5233",
    "address": "321 W 1st Avenue",
    "city": "Toppenish",
    "website": "https://www.meritresources.org/",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.meritresources.org/locations/"
  },
  {
    "id": "merit-resource-services-sunnyside",
    "name": "Merit Resource Services - Sunnyside",
    "categories": [
      "substance_use_treatment",
      "recovery_support"
    ],
    "description": "Outpatient substance use disorder treatment including MAT, IOP, and counseling serving the lower Yakima Valley.",
    "phone": "509-837-7700",
    "address": "702 Franklin Avenue",
    "city": "Sunnyside",
    "website": "https://www.meritresources.org/",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.meritresources.org/locations/"
  },
  {
    "id": "merit-resource-services-wapato",
    "name": "Merit Resource Services - Wapato",
    "categories": [
      "substance_use_treatment",
      "recovery_support"
    ],
    "description": "Outpatient substance use disorder treatment including MAT and counseling in the lower Yakima Valley.",
    "phone": "509-877-7271",
    "address": "312 W 2nd Street",
    "city": "Wapato",
    "website": "https://www.meritresources.org/",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.meritresources.org/locations/"
  },
  {
    "id": "comprehensive-healthcare-crisis-triage-center-sub-acute-deto",
    "name": "Comprehensive Healthcare - Crisis Triage Center & Sub-Acute Detox",
    "categories": [
      "substance_use_treatment"
    ],
    "description": "16-bed facility providing 24-hour non-medical (sub-acute) withdrawal management/detox, crisis stabilization, and walk-in emergency behavioral health services.",
    "phone": "509-453-2900",
    "address": "505 S 4th Ave",
    "city": "Yakima",
    "website": "https://comphc.org/locations/crisis-triage-center/",
    "hours": "Detox open 24/7; walk-in crisis Mon-Fri 8am-5pm",
    "logoUrl": "https://www.comphc.org/wp-content/uploads/2020/06/CH_logo.png",
    "confidence": "high",
    "source": "https://comphc.org/locations/crisis-triage-center/"
  },
  {
    "id": "sundown-m-ranch",
    "name": "Sundown M Ranch",
    "categories": [
      "substance_use_treatment"
    ],
    "description": "Long-established residential/inpatient drug and alcohol treatment center offering withdrawal management/detox, adult and youth residential programs, outpatient treatment, and family program.",
    "phone": "509-457-0990",
    "address": "2280 State Route 821",
    "city": "Selah",
    "website": "https://sundown.org/",
    "hours": "Admits 7 days a week",
    "logoUrl": "https://sundown.org/wp-content/uploads/2020/03/SMR_Logo_Color.svg",
    "confidence": "high",
    "source": "https://sundown.org/"
  },
  {
    "id": "yakama-nation-behavioral-health-services",
    "name": "Yakama Nation Behavioral Health Services",
    "categories": [
      "substance_use_treatment",
      "recovery_support"
    ],
    "description": "Tribal behavioral health program providing counseling and therapy for substance use and mental health to children, adolescents, adults, elders, and families.",
    "phone": "509-865-5121",
    "address": "511 South Elm Street",
    "city": "Toppenish",
    "website": "https://yakama.com/programs/behavioral-health/",
    "hours": null,
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://yakama.com/programs/behavioral-health/"
  },
  {
    "id": "yakama-nation-comprehensive-community-alcoholism-program-tii",
    "name": "Yakama Nation Comprehensive Community Alcoholism Program (Tiinawit)",
    "categories": [
      "substance_use_treatment"
    ],
    "description": "Tribal substance use disorder program offering inpatient, outpatient, and intensive outpatient treatment for alcoholism and drug addiction.",
    "phone": "509-865-5121",
    "address": "20 Gunnyon Rd",
    "city": "Toppenish",
    "website": "https://yakama.com/programs/behavioral-health/",
    "hours": null,
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://www.yakimacounty.us/1323/Treatment-Resources"
  },
  {
    "id": "barth-clinic",
    "name": "Barth Clinic",
    "categories": [
      "substance_use_treatment"
    ],
    "description": "Outpatient substance use disorder treatment for adults and adolescents using evidence-based approaches (CBT, motivational interviewing, contingency management).",
    "phone": "509-457-5653",
    "address": "201 E Lincoln Ave Suite 100",
    "city": "Yakima",
    "website": "https://barthclinic.com/",
    "hours": null,
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://www.yakimacounty.us/1323/Treatment-Resources"
  },
  {
    "id": "innovation-resource-center",
    "name": "Innovation Resource Center",
    "categories": [
      "substance_use_treatment",
      "recovery_support"
    ],
    "description": "Outpatient substance use disorder counseling and support services, including intensive outpatient, relapse prevention, and group counseling, serving the lower valley.",
    "phone": "509-836-2400",
    "address": "214 S 6th Street Unit 3",
    "city": "Sunnyside",
    "website": "https://innovationrc.com/",
    "hours": null,
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://www.yakimacounty.us/1323/Treatment-Resources"
  },
  {
    "id": "believe-in-recovery-llc",
    "name": "Believe In Recovery, LLC",
    "categories": [
      "substance_use_treatment"
    ],
    "description": "Outpatient substance use disorder treatment and recovery services in Yakima.",
    "phone": "509-317-2140",
    "address": "3907 Creekside Loop Suite 110",
    "city": "Yakima",
    "website": null,
    "hours": null,
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://www.yakimacounty.us/1323/Treatment-Resources"
  },
  {
    "id": "yakima-health-district-syringe-services-harm-reduction-progr",
    "name": "Yakima Health District - Syringe Services / Harm Reduction Program",
    "categories": [
      "harm_reduction",
      "substance_use_treatment"
    ],
    "description": "Mobile syringe services program (1:1 exchange) with naloxone/Narcan distribution and training, HIV/HCV/syphilis testing, vaccines, wound care, and navigation to drug treatment, housing, and other services.",
    "phone": "509-575-4040",
    "address": "1210 Ahtanum Ridge Drive (main office); SSP at S. 3rd St & Adams St, Yakima (Thu 12:30-3:30pm) and 802 W 1st Ave, Toppenish (Tue 12:30-3:30pm)",
    "city": "Yakima",
    "website": "https://www.yakimacounty.us/2847/Harm-Reduction-Programs",
    "hours": "Yakima SSP: Thu 12:30-3:30pm; Toppenish SSP: Tue 12:30-3:30pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.yakimacounty.us/2847/Harm-Reduction-Programs"
  },
  {
    "id": "washington-state-dept-of-health-naloxone-finder-free-naloxon",
    "name": "Washington State Dept. of Health - Naloxone Finder & Free Naloxone by Mail",
    "categories": [
      "harm_reduction"
    ],
    "description": "Statewide tool (serving Yakima County) to locate free naloxone near you by county, plus a free naloxone-by-mail program; naloxone is also over-the-counter and free at pharmacies for Apple Health/Medicaid members.",
    "phone": null,
    "address": null,
    "city": null,
    "website": "https://doh.wa.gov/you-and-your-family/drug-user-health/naloxone-finder",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://doh.wa.gov/you-and-your-family/drug-user-health/naloxone-finder"
  },
  {
    "id": "next-step-housing",
    "name": "Next Step Housing",
    "categories": [
      "recovery_housing"
    ],
    "description": "Nonprofit providing service-enriched, permanent and affordable clean-and-sober (alcohol- and drug-free) housing for individuals and families in recovery, monitored by random UA/breathalyzer checks.",
    "phone": "509-853-5108",
    "address": "2900 Powerhouse Road, Suite 120",
    "city": "Yakima",
    "website": "https://www.nextstephousing.com/",
    "hours": null,
    "logoUrl": "https://images.squarespace-cdn.com/content/v1/60dd1af5776fe93667db35d2/e425969c-3667-4198-93c3-d498f5237b95/NSH_logo_wide_yellow_new.png",
    "confidence": "high",
    "source": "https://www.nextstephousing.com/"
  },
  {
    "id": "oxford-house-washington",
    "name": "Oxford House (Washington)",
    "categories": [
      "recovery_housing",
      "recovery_support"
    ],
    "description": "Statewide network of self-run, self-supported, drug- and alcohol-free recovery homes (separate men's, women's, and women-with-children houses, including several in Yakima County). Find current openings with the Washington vacancy locator on the site, or call the Washington Recovery Help Line.",
    "phone": "1-866-789-1511",
    "address": null,
    "city": "Yakima",
    "website": "https://wa.oxfordhouse.us/",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://wa.oxfordhouse.us/"
  },
  {
    "id": "washington-recovery-housing-directory-waqrr-certified-reside",
    "name": "Washington Recovery Housing Directory (WAQRR-certified residences)",
    "categories": [
      "recovery_housing"
    ],
    "description": "Searchable statewide directory of recovery residences (sober/recovery housing) certified by the Washington Alliance for Quality Recovery Residences (WAQRR) and listed on the WA Health Care Authority registry — including Oxford Houses and Tribal recovery homes. Filter the map/list to Yakima County to find certified homes.",
    "phone": null,
    "address": null,
    "city": "Yakima",
    "website": "https://www.recoveryhousingwa.org/",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.recoveryhousingwa.org/houses"
  },
  {
    "id": "central-washington-central-office-of-alcoholics-anonymous-al",
    "name": "Central Washington Central Office of Alcoholics Anonymous (Alano Club)",
    "categories": [
      "recovery_support"
    ],
    "description": "Local AA central office and Alano Club providing meeting information, literature, and peer recovery connections for the Yakima area; volunteer-staffed (call ahead).",
    "phone": "509-453-7680",
    "address": "616 River Road",
    "city": "Yakima",
    "website": "https://www.yakima-aa.org/",
    "hours": null,
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://findrecovery.com/aa_meetings/wa/yakima/"
  },
  {
    "id": "yakima-housing-authority",
    "name": "Yakima Housing Authority",
    "categories": [
      "housing",
      "financial_assistance",
      "benefits_dshs"
    ],
    "description": "Local public housing authority offering Section 8 Housing Choice Vouchers, affordable/family apartments, and supportive housing for homeless households across the Yakima Valley.",
    "phone": "509-453-3106",
    "address": "1116 Fruitvale Blvd",
    "city": "Yakima",
    "website": "https://yakimahousing.org",
    "hours": "Mon-Thu 9:00am-5:30pm; closed Fri",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://yakimahousing.org/about/contact/"
  },
  {
    "id": "ywca-yakima",
    "name": "YWCA Yakima",
    "categories": [
      "housing",
      "domestic_violence"
    ],
    "description": "Largest domestic violence provider in Yakima County; 24-hour helpline, emergency shelter, advocacy, protection-order help, support groups and therapy for DV/sexual-assault survivors (English/Spanish).",
    "phone": "509-248-7796",
    "address": "818 W. Yakima Avenue",
    "city": "Yakima",
    "website": "https://www.ywcayakima.org",
    "hours": "Shelter and 24-hour helpline staffed 24/7, 365 days/year",
    "logoUrl": "https://images.squarespace-cdn.com/content/v1/65524250cd2b73101784317d/63bcee1e-bede-4d9f-9a5b-9c3bf2b0e897/AssociationLogo_Yakima-1.png?format=1500w",
    "confidence": "high",
    "source": "https://www.ywcayakima.org/what-we-do"
  },
  {
    "id": "camp-hope-grace-city-outreach",
    "name": "Camp Hope (Grace City Outreach)",
    "categories": [
      "housing"
    ],
    "description": "Low-barrier emergency homeless shelter for men, women, young adults, veterans, DV victims, and families with children; pets allowed on leash.",
    "phone": "509-424-1228",
    "address": "2300 E Birch St",
    "city": "Yakima",
    "website": "https://camphopeyakima.com",
    "hours": "Open 24/7; check-in between 4:00pm-6:00pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://camphopeyakima.com/"
  },
  {
    "id": "yakima-union-gospel-mission",
    "name": "Yakima Union Gospel Mission",
    "categories": [
      "housing",
      "food"
    ],
    "description": "Rescue mission providing an overnight adult (men's) shelter and a women & family shelter, plus free meals 365 days a year at the Good News Cafe.",
    "phone": "509-248-4510",
    "address": "1300 N 1st Street",
    "city": "Yakima",
    "website": "https://yugm.org",
    "hours": "Adult shelter check-in 4:00-5:30pm daily; meals: breakfast 7:00-7:30am, dinner 5:30-6:05pm daily",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://yugm.org/i-need-help/"
  },
  {
    "id": "triumph-treatment-services-emergency-family-shelter",
    "name": "Triumph Treatment Services - Emergency Family Shelter",
    "categories": [
      "housing"
    ],
    "description": "Substance-free 28-day emergency shelter for families with children under 18 (or pregnant women), with intensive case management; also operates transitional and permanent recovery housing.",
    "phone": "509-853-4127",
    "address": "215 W. Yakima Ave.",
    "city": "Yakima",
    "website": "https://triumphtx.org/housing/",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://triumphtx.org/housing/"
  },
  {
    "id": "rod-s-house",
    "name": "Rod's House",
    "categories": [
      "housing",
      "case_management",
      "youth_family"
    ],
    "description": "Drop-in resource and shelter program for youth and young adults (up to 24) experiencing homelessness, offering case management, meals, hygiene/laundry, mailing address, and a Coordinated Entry access point for ages 18-24.",
    "phone": "509-895-2665",
    "address": "32 N. 3rd St., Ste 235",
    "city": "Yakima",
    "website": "https://rodshouse.org",
    "hours": "Drop-in Mon-Fri 1:00pm-6:00pm.",
    "logoUrl": "https://staging-e466-rodshouse7.wpcomstaging.com/wp-content/uploads/2025/01/Rods-House-Logo-Purple.png",
    "confidence": "high",
    "source": "https://rodshouse.org/shelters/"
  },
  {
    "id": "yakima-neighborhood-health-services-neighborhood-connections",
    "name": "Yakima Neighborhood Health Services - Neighborhood Connections",
    "categories": [
      "housing",
      "case_management"
    ],
    "description": "Community health center's homeless & housing division providing case management, care coordination, street/shelter outreach, medical respite, and permanent supportive housing for people experiencing homelessness; also a Coordinated Entry access point.",
    "phone": "509-454-4143",
    "address": "12 S 8th St",
    "city": "Yakima",
    "website": "https://ynhs.org/programs/homeless-services",
    "hours": "Mon-Fri 7:30am-6:00pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.yakimacounty.us/2465/Coordinated-Entry"
  },
  {
    "id": "people-for-people-2-1-1",
    "name": "People For People (2-1-1)",
    "categories": [
      "housing",
      "food"
    ],
    "description": "Operates the Greater Columbia 2-1-1 information & referral line connecting Yakima County residents to housing, food, transportation, and other assistance; also the county's Meals on Wheels provider.",
    "phone": "211",
    "address": "304 W. Lincoln Ave.",
    "city": "Yakima",
    "website": "https://www.mypfp.org/services/2-1-1/",
    "hours": "211 specialists available Mon-Fri 8:00am-5:00pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.mypfp.org/services/2-1-1/"
  },
  {
    "id": "northwest-harvest-fruitvale-community-market",
    "name": "Northwest Harvest - Fruitvale Community Market",
    "categories": [
      "food"
    ],
    "description": "No-cost grocery store (free market) offering fresh produce, proteins, and pantry staples with no ID, income, or residency requirements; also links visitors to healthcare and housing services.",
    "phone": "509-575-6956",
    "address": "1819 Fruitvale Blvd",
    "city": "Yakima",
    "website": "https://www.northwestharvest.org/our-work/community-programs/fruitvale-community-market/",
    "hours": "Mon 12:00pm-6:00pm and Wed 9:00am-3:00pm (in-store); Fri 12:00pm-6:00pm (drive-thru)",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.northwestharvest.org/our-work/community-programs/fruitvale-community-market/"
  },
  {
    "id": "oic-of-washington-food-bank",
    "name": "OIC of Washington Food Bank",
    "categories": [
      "food"
    ],
    "description": "Central food-commodity distribution hub for Yakima Valley food banks; provides free food to high-need communities, with weekly Tuesday distribution.",
    "phone": "509-864-1173",
    "address": "815 Fruitvale Blvd",
    "city": "Yakima",
    "website": "https://oicofwa.org/programs/support/nutrition/",
    "hours": "Tuesday 8:00am-10:15am (reserve by phone the day before)",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://oicofwa.org/programs/support/nutrition/"
  },
  {
    "id": "yakima-rotary-food-bank",
    "name": "Yakima Rotary Food Bank",
    "categories": [
      "food"
    ],
    "description": "Large weekly food bank (serves 600+ families) distributing meats, bread, produce, canned goods, and no-cook boxes; no ID or documentation required.",
    "phone": "509-853-8918",
    "address": "703 Central Ave",
    "city": "Yakima",
    "website": "https://yakimarotaryfoodbank.org",
    "hours": "Friday 8:30am-12:00pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://yakimarotaryfoodbank.org/food-distribution/"
  },
  {
    "id": "the-salvation-army-yakima-corps",
    "name": "The Salvation Army - Yakima Corps",
    "categories": [
      "food",
      "financial_assistance",
      "benefits_dshs"
    ],
    "description": "Provides rent and utility payment assistance, a food bank, meal assistance, and the Pathway of Hope case-management program for families facing poverty.",
    "phone": "509-453-3139",
    "address": "9 South 6th Ave.",
    "city": "Yakima",
    "website": "https://yakima.salvationarmy.org/yakima_corps/cure-hunger/",
    "hours": "Food pantry Mon-Thu 10:00am-3:00pm",
    "logoUrl": "https://static.salvationarmy.org/us-east-1/templates/symphony/static_resources/images/global/shield-en.svg",
    "confidence": "high",
    "source": "https://yakima.salvationarmy.org/yakima_corps/cure-hunger/"
  },
  {
    "id": "sunrise-outreach-center-of-yakima",
    "name": "Sunrise Outreach Center of Yakima",
    "categories": [
      "food",
      "financial_assistance",
      "benefits_dshs"
    ],
    "description": "Faith-based nonprofit running food pantries across Yakima County (Yakima, Wapato, Sunnyside, Mabton, Wiley City, White Swan); main Yakima pantry distributes Thursdays.",
    "phone": "509-225-9310",
    "address": "10 North 6th Avenue",
    "city": "Yakima",
    "website": "https://www.socyakima.com/programs/food-pantries/",
    "hours": "Yakima pantry: Thursdays 10:00am-12:00pm (other sites vary by town)",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.socyakima.com/programs/food-pantries/"
  },
  {
    "id": "selah-naches-food-bank",
    "name": "Selah-Naches Food Bank",
    "categories": [
      "food"
    ],
    "description": "Community food bank serving residents of the Selah and Naches school districts.",
    "phone": "509-698-2336",
    "address": "610 N Park Drive",
    "city": "Selah",
    "website": "https://selahnachesfoodbank.org",
    "hours": "Mon 9:00-11:00am, Wed 5:00-7:00pm, Fri 9:00-11:00am",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://selahnachesfoodbank.org/contact-us/"
  },
  {
    "id": "st-vincent-center-food-bank",
    "name": "St. Vincent Center Food Bank",
    "categories": [
      "food"
    ],
    "description": "Food pantry serving the Union Gap area, open weekdays.",
    "phone": "509-457-5111",
    "address": "2629 Rudkin Rd",
    "city": "Union Gap",
    "website": null,
    "hours": "Mon-Fri 9:00am-6:00pm",
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://extension.wsu.edu/yakima/food-bank-locations/"
  },
  {
    "id": "toppenish-community-chest-food-bank",
    "name": "Toppenish Community Chest Food Bank",
    "categories": [
      "food"
    ],
    "description": "Food and clothing bank providing essential food assistance and referrals in the lower valley.",
    "phone": "509-865-5311",
    "address": "4 N B St",
    "city": "Toppenish",
    "website": null,
    "hours": "Mon & Thu 9:30-11:30am, Tue 5:00-6:30pm",
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://www.foodpantries.org/li/wa_98948_toppenish-communitychest"
  },
  {
    "id": "grandview-food-bank",
    "name": "Grandview Food Bank",
    "categories": [
      "food"
    ],
    "description": "Community food bank serving the Grandview area, distributing weekly.",
    "phone": "509-882-7919",
    "address": "110 N Elm St",
    "city": "Grandview",
    "website": null,
    "hours": "Wednesday 9:00-11:00am",
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://www.foodpantries.org/ci/wa-sunnyside"
  },
  {
    "id": "zillah-food-bank",
    "name": "Zillah Food Bank",
    "categories": [
      "food"
    ],
    "description": "Community food bank serving Zillah-area residents.",
    "phone": null,
    "address": "302 2nd Ave.",
    "city": "Zillah",
    "website": null,
    "hours": "Tuesday 8:00-11:00am",
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://extension.wsu.edu/yakima/food-bank-locations/"
  },
  {
    "id": "granger-food-bank",
    "name": "Granger Food Bank",
    "categories": [
      "food"
    ],
    "description": "Community food bank serving Granger-area residents.",
    "phone": null,
    "address": "118 Main Street",
    "city": "Granger",
    "website": null,
    "hours": "Monday 3:00-5:00pm",
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://extension.wsu.edu/yakima/food-bank-locations/"
  },
  {
    "id": "highland-food-bank",
    "name": "Highland Food Bank",
    "categories": [
      "food"
    ],
    "description": "Community food bank serving the Tieton / upper Naches area.",
    "phone": null,
    "address": "414 Maple St.",
    "city": "Tieton",
    "website": null,
    "hours": "Saturday 8:00-10:00am",
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://extension.wsu.edu/yakima/food-bank-locations/"
  },
  {
    "id": "yakama-nation-food-bank",
    "name": "Yakama Nation Food Bank",
    "categories": [
      "food"
    ],
    "description": "Food bank serving the Yakama Reservation community in the Toppenish area.",
    "phone": "509-865-5311",
    "address": null,
    "city": "Toppenish",
    "website": null,
    "hours": "Mon 9:30-11:30am, Tue 5:00-6:30pm, Thu 9:30-11:30am",
    "logoUrl": null,
    "confidence": "low",
    "source": "https://www.foodpantries.org/li/wa_98948_yakama-nationa-food-bank"
  },
  {
    "id": "east-valley-church-food-pantry",
    "name": "East Valley Church Food Pantry",
    "categories": [
      "food"
    ],
    "description": "Church-run food pantry serving the Moxee / east valley area once monthly.",
    "phone": null,
    "address": "7203 Mieras Road",
    "city": "Moxee",
    "website": null,
    "hours": "Third Thursday 3:00-6:00pm",
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://extension.wsu.edu/yakima/food-bank-locations/"
  },
  {
    "id": "northwest-community-action-center-ncac",
    "name": "Northwest Community Action Center (NCAC)",
    "categories": [
      "financial_assistance",
      "benefits_dshs"
    ],
    "description": "Community action agency offering rent/eviction-prevention assistance, deposits, landlord mitigation, LIHEAP energy assistance and weatherization for lower Yakima Valley residents.",
    "phone": "509-865-7630",
    "address": "706 Rentschler Lane",
    "city": "Toppenish",
    "website": "https://www.yvfwc.com/locations/northwest-community-action-center/",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.yakimawa.gov/services/codes/files/Public-Resources-List_2025-12-10.pdf"
  },
  {
    "id": "oic-of-washington-opportunities-industrialization-center",
    "name": "OIC of Washington (Opportunities Industrialization Center)",
    "categories": [
      "financial_assistance",
      "benefits_dshs",
      "employment",
      "education"
    ],
    "description": "Community Action Agency providing LIHEAP energy/utility bill assistance, weatherization, housing counseling, rental-application help, food and workforce training across Yakima County.",
    "phone": "509-248-6751",
    "address": "815 Fruitvale Blvd",
    "city": "Yakima",
    "website": "https://oicofwa.org",
    "hours": null,
    "logoUrl": "https://oicofwa.org/img/logo.png",
    "confidence": "high",
    "source": "https://oicofwa.org/programs/support/utility-assistance/"
  },
  {
    "id": "catholic-charities-serving-central-washington",
    "name": "Catholic Charities Serving Central Washington",
    "categories": [
      "financial_assistance",
      "benefits_dshs",
      "case_management"
    ],
    "description": "Multi-service nonprofit offering counseling/behavioral health, housing assistance, youth & young-adult case management, senior services, parenting/pregnancy support, and basic-needs help through the St. Vincent Center.",
    "phone": "509-965-7100",
    "address": "5301 Tieton Drive, Suite C",
    "city": "Yakima",
    "website": "https://catholiccharitiescw.org",
    "hours": "Mon-Thu 8:00 AM-6:00 PM, Fri 8:00 AM-5:00 PM",
    "logoUrl": "https://catholiccharitiescw.org/uploads/logo/catholic-charities-logo-color.svg",
    "confidence": "high",
    "source": "https://catholiccharitiescw.org/yakima/contact"
  },
  {
    "id": "st-vincent-center-catholic-charities",
    "name": "St. Vincent Center (Catholic Charities)",
    "categories": [
      "financial_assistance",
      "benefits_dshs"
    ],
    "description": "Emergency-services center providing rent and utility assistance, a food bank, thrift store, clothing and household items for families in need.",
    "phone": "509-457-5111",
    "address": "2629 Main Street",
    "city": "Union Gap",
    "website": "https://catholiccharitiescw.org",
    "hours": null,
    "logoUrl": "https://catholiccharitiescw.org/uploads/logo/catholic-charities-logo-color.svg",
    "confidence": "high",
    "source": "https://www.yakimawa.gov/services/codes/files/Public-Resources-List_2025-12-10.pdf"
  },
  {
    "id": "united-way-of-central-washington",
    "name": "United Way of Central Washington",
    "categories": [
      "financial_assistance",
      "benefits_dshs"
    ],
    "description": "Local United Way operating a Financial Success Center, benefits screening, and supporting the HELP Center and 2-1-1 resource referral for Yakima and Kittitas counties.",
    "phone": "509-248-1557",
    "address": "116 South 4th Street",
    "city": "Yakima",
    "website": "https://www.uwcw.org",
    "hours": "Mon-Fri 8:30 AM-5:00 PM",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.uwcw.org/contact-us"
  },
  {
    "id": "2-1-1-greater-columbia-211-people-for-people",
    "name": "2-1-1 / Greater Columbia 211 (People For People)",
    "categories": [
      "financial_assistance",
      "benefits_dshs",
      "insurance_navigation"
    ],
    "description": "Free information-and-referral line connecting Yakima County residents to rent/utility help, food, benefits, health coverage and other health and human services.",
    "phone": "211",
    "address": "304 W Lincoln Ave",
    "city": "Yakima",
    "website": "https://www.mypfp.org/services/2-1-1/",
    "hours": "Mon-Fri 8:00 AM-5:00 PM",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.mypfp.org/services/2-1-1/"
  },
  {
    "id": "dshs-yakima-community-services-office-cso-039",
    "name": "DSHS Yakima Community Services Office (CSO-039)",
    "categories": [
      "benefits_dshs",
      "insurance_navigation",
      "financial_assistance"
    ],
    "description": "State Community Services Office for applying to TANF cash assistance, Basic Food (SNAP), Apple Health/Medicaid, child care and other DSHS benefits.",
    "phone": "877-501-2233",
    "address": "1002 N 16th Ave",
    "city": "Yakima",
    "website": "https://www.dshs.wa.gov/location/dshs-cso-039",
    "hours": "Mon-Fri 8:00 AM-5:00 PM (same-day application services 8:00 AM-2:00 PM)",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.dshs.wa.gov/location/dshs-cso-039"
  },
  {
    "id": "washington-dshs-customer-service-contact-center",
    "name": "Washington DSHS Customer Service Contact Center",
    "categories": [
      "benefits_dshs",
      "financial_assistance"
    ],
    "description": "Statewide phone line serving Yakima residents to apply for or manage Basic Food (SNAP), TANF cash assistance, and other DSHS benefits.",
    "phone": "877-501-2233",
    "address": null,
    "city": null,
    "website": "https://www.dshs.wa.gov/esa/community-services-offices/community-services-offices",
    "hours": "Mon-Fri 8:00 AM-5:00 PM",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.dshs.wa.gov/food-cash-medical"
  },
  {
    "id": "wic-at-yakima-neighborhood-health-services-8th-street",
    "name": "WIC at Yakima Neighborhood Health Services (8th Street)",
    "categories": [
      "benefits_dshs"
    ],
    "description": "Women, Infants & Children nutrition program offering food benefits, nutrition education and breastfeeding support for eligible pregnant women, infants and children under 5.",
    "phone": "509-454-4143",
    "address": "12 South 8th Street",
    "city": "Yakima",
    "website": "https://ynhs.org",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://pprs.doh.wa.gov/search/bae0c1e9-5e9e-523a-b971-793b90f4bfa9"
  },
  {
    "id": "wic-at-yakima-valley-farm-workers-clinic-nob-hill",
    "name": "WIC at Yakima Valley Farm Workers Clinic (Nob Hill)",
    "categories": [
      "benefits_dshs"
    ],
    "description": "Women, Infants & Children nutrition program providing food benefits, nutrition counseling and breastfeeding support for eligible families.",
    "phone": "509-248-8602",
    "address": "602 East Nob Hill Blvd",
    "city": "Yakima",
    "website": "https://www.yvfwc.com",
    "hours": "Mon-Fri 8:00 AM-12:30 PM, 1:00 PM-5:00 PM; 2nd Sat 8:00 AM-12:00 PM",
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://www.findhelp.org/yakima-valley-farm-workers-clinic--yakima-wa--women,-infants,-and-children-(wic)---washington/5157942236807168?postal=98901"
  },
  {
    "id": "washington-state-wic-program-department-of-health",
    "name": "Washington State WIC Program (Department of Health)",
    "categories": [
      "benefits_dshs"
    ],
    "description": "Statewide WIC program serving Yakima County; statewide line and clinic locator to enroll pregnant women, new mothers, infants and children under 5 in nutrition benefits.",
    "phone": "800-841-1410",
    "address": null,
    "city": null,
    "website": "https://doh.wa.gov/you-and-your-family/wic",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://doh.wa.gov/you-and-your-family/wic"
  },
  {
    "id": "aging-long-term-care-of-southeast-washington-altc",
    "name": "Aging & Long-Term Care of Southeast Washington (ALTC)",
    "categories": [
      "benefits_dshs",
      "insurance_navigation"
    ],
    "description": "Area agency on aging serving Yakima County with information and referral, benefits assistance, case management, Medicaid long-term-care help and SHIBA Medicare counseling.",
    "phone": "509-469-0500",
    "address": null,
    "city": "Yakima",
    "website": "https://www.altcwashington.com",
    "hours": null,
    "logoUrl": "https://www.altcwashington.com/wp-content/uploads/2018/05/Screen-Shot-2017-02-21-at-9.36.42-AM.png",
    "confidence": "high",
    "source": "https://www.yakimawa.gov/services/codes/files/Public-Resources-List_2025-12-10.pdf"
  },
  {
    "id": "yakima-neighborhood-health-services-health-coverage-navigato",
    "name": "Yakima Neighborhood Health Services - Health Coverage / Navigators",
    "categories": [
      "insurance_navigation",
      "benefits_dshs",
      "financial_assistance"
    ],
    "description": "Community health center with trained navigators/in-person assisters who help residents apply for Apple Health (Medicaid), Medicare and Washington Healthplanfinder coverage; also offers rental assistance and homeless services.",
    "phone": "509-853-2377",
    "address": "12 South 8th Street",
    "city": "Yakima",
    "website": "https://ynhs.org/programs/health-care-coverage-for-everyone",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.yakimawa.gov/services/codes/files/Public-Resources-List_2025-12-10.pdf"
  },
  {
    "id": "washington-healthplanfinder-customer-support-center-health-b",
    "name": "Washington Healthplanfinder Customer Support Center (Health Benefit Exchange)",
    "categories": [
      "insurance_navigation"
    ],
    "description": "Statewide call center serving Yakima residents to apply for or renew Apple Health (Medicaid) and qualified health plans, and to connect with local navigators.",
    "phone": "855-923-4633",
    "address": null,
    "city": null,
    "website": "https://www.wahealthplanfinder.org",
    "hours": "Mon-Fri 7:30 AM-5:30 PM",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.hca.wa.gov/free-or-low-cost-health-care/apply-or-renew-coverage"
  },
  {
    "id": "shiba-statewide-health-insurance-benefits-advisors-wa-oic",
    "name": "SHIBA - Statewide Health Insurance Benefits Advisors (WA OIC)",
    "categories": [
      "insurance_navigation"
    ],
    "description": "Free, unbiased Medicare counseling for Yakima County residents; advisors help understand, compare and enroll in Medicare and screen for low-income savings programs.",
    "phone": "800-562-6900",
    "address": null,
    "city": null,
    "website": "https://www.insurance.wa.gov/insurance-resources/medicare/get-free-medicare-help-shiba",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.insurance.wa.gov/insurance-resources/medicare/get-free-medicare-help-shiba"
  },
  {
    "id": "city-of-yakima-office-of-neighborhood-development-services-o",
    "name": "City of Yakima Office of Neighborhood Development Services (ONDS)",
    "categories": [
      "financial_assistance"
    ],
    "description": "City program offering an Emergency Home Repair Program for low-income homeowners within Yakima city limits and landlord-tenant law resources.",
    "phone": "509-575-6101",
    "address": "112 S 8th St",
    "city": "Yakima",
    "website": "https://www.yakimawa.gov",
    "hours": null,
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://www.yakimawa.gov/services/codes/files/Public-Resources-List_2025-12-10.pdf"
  },
  {
    "id": "yakima-transit",
    "name": "Yakima Transit",
    "categories": [
      "transportation"
    ],
    "description": "City of Yakima public bus system with fixed routes, ADA Dial-A-Ride paratransit, and the Yakima-Ellensburg Commuter; youth 18 and under ride free.",
    "phone": "509-575-6175",
    "address": "2301 Fruitvale Blvd",
    "city": "Yakima",
    "website": "https://yakimatransit.org/",
    "hours": "Buses: Mon-Fri 5:30am-6:30pm, Sat 7:00am-6:30pm, Sun 8:00am-4:00pm. Dial-A-Ride reservations: 509-248-1119; info 509-575-6054.",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://yakimatransit.org/contact-transit/"
  },
  {
    "id": "people-for-people-non-emergency-medical-transportation",
    "name": "People For People (Non-Emergency Medical Transportation)",
    "categories": [
      "transportation",
      "case_management"
    ],
    "description": "Regional Medicaid (Apple Health) transportation broker arranging rides, gas vouchers, and mileage reimbursement to covered medical appointments; also offers special-needs door-to-door transportation and resource navigation.",
    "phone": "1-800-233-1624",
    "address": "304 W Lincoln Ave",
    "city": "Yakima",
    "website": "https://www.mypfp.org/services/transportation/nemt/",
    "hours": "Call center Mon-Fri 8:00am-4:00pm; local trips need 2 business days notice, out-of-area 5 days. Local line 509-248-6793.",
    "logoUrl": "https://www.mypfp.org/wp-content/uploads/2021/02/PFP.png",
    "confidence": "high",
    "source": "https://www.mypfp.org/services/transportation/nemt/"
  },
  {
    "id": "pahto-public-passage-yakama-nation-transit",
    "name": "Pahto Public Passage (Yakama Nation Transit)",
    "categories": [
      "transportation"
    ],
    "description": "Free public bus service operated by the Yakama Nation, connecting Toppenish, Wapato, White Swan, Harrah, Brownstown, Granger, Zillah, and Union Gap.",
    "phone": "509-865-5121",
    "address": "PO Box 151",
    "city": "Toppenish",
    "website": "https://www.pahtopublicpassage.com/",
    "hours": null,
    "logoUrl": "https://static.wixstatic.com/media/1e90be_fa8adf2e1a46415cac44035831f8ce66~mv2.png",
    "confidence": "high",
    "source": "https://www.pahtopublicpassage.com/"
  },
  {
    "id": "selah-transit",
    "name": "Selah Transit",
    "categories": [
      "transportation"
    ],
    "description": "City of Selah public transit offering fixed-route bus service and Dial-A-Ride door-to-door rides within Selah and to/from Yakima for seniors and people with disabilities.",
    "phone": "509-619-1639",
    "address": "115 West Naches Avenue",
    "city": "Selah",
    "website": "https://www.selahwa.gov/180/Selah-Transit",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.selahwa.gov/180/Selah-Transit"
  },
  {
    "id": "union-gap-transit",
    "name": "Union Gap Transit",
    "categories": [
      "transportation"
    ],
    "description": "Free city transit (operated via Medstar) with fixed-route bus service and ADA Dial-A-Ride paratransit within Union Gap, Selah, and Yakima.",
    "phone": "509-574-8000",
    "address": "102 W Ahtanum Rd",
    "city": "Union Gap",
    "website": "https://uniongapwa.gov/transit/",
    "hours": "Mon-Fri 6:00am-7:00pm, Sat-Sun 9:00am-7:00pm. Dial-A-Ride scheduling Mon-Sat 8:00am-4:30pm, Sun 8:00am-1:00pm.",
    "logoUrl": "https://uniongapwa.gov/media/union-gap-logo.jpg",
    "confidence": "high",
    "source": "https://uniongapwa.gov/transit/"
  },
  {
    "id": "southeast-washington-aging-long-term-care-altc-adrc",
    "name": "Southeast Washington Aging & Long Term Care (ALTC / ADRC)",
    "categories": [
      "case_management"
    ],
    "description": "Area Agency on Aging and Aging & Disability Resource Center providing no-cost case management for seniors and adults with disabilities: needs assessment, care plans, in-home/Medicaid service coordination, and caregiver support.",
    "phone": "509-469-0500",
    "address": "1710 S 24th Ave, Suite 100",
    "city": "Yakima",
    "website": "https://www.altcwashington.com/",
    "hours": "Mon-Fri 8:30am-5:00pm. Toll-free 1-855-567-0252.",
    "logoUrl": "https://www.altcwashington.com/wp-content/uploads/2018/05/Screen-Shot-2017-02-21-at-9.36.42-AM.png",
    "confidence": "high",
    "source": "https://www.altcwashington.com/contact/"
  },
  {
    "id": "dshs-yakima-community-services-office-cso",
    "name": "DSHS Yakima Community Services Office (CSO)",
    "categories": [
      "case_management"
    ],
    "description": "State social services office handling cash, food (SNAP/Basic Food), and medical benefit eligibility plus WorkFirst/TANF and social-services case management.",
    "phone": "877-501-2233",
    "address": "1002 N 16th Ave",
    "city": "Yakima",
    "website": "https://www.dshs.wa.gov/location/dshs-cso-039",
    "hours": "Mon-Fri 8:00am-5:00pm (phone/walk-in services 8am-2pm).",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.dshs.wa.gov/location/dshs-cso-039"
  },
  {
    "id": "dshs-developmental-disabilities-administration-dda-yakima-fi",
    "name": "DSHS Developmental Disabilities Administration (DDA) - Yakima Field Office",
    "categories": [
      "case_management",
      "disability_services"
    ],
    "description": "State office determining DDA eligibility and assigning Case Resource Managers who coordinate services and referrals for children and adults with developmental disabilities.",
    "phone": "509-225-7970",
    "address": "1002 N 16th Ave",
    "city": "Yakima",
    "website": "https://www.dshs.wa.gov/location/dshs-dda-yakima-fo",
    "hours": "Mon-Fri 8:00am-5:00pm (call ahead). Regional intake 1-800-462-0624.",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.dshs.wa.gov/location/dshs-dda-yakima-fo"
  },
  {
    "id": "yakima-county-coordinated-entry",
    "name": "Yakima County Coordinated Entry",
    "categories": [
      "case_management"
    ],
    "description": "County-wide 'no wrong door' intake, prioritization, and referral system that connects people experiencing homelessness to housing programs and case management through partner access points in Yakima, Sunnyside, and Toppenish.",
    "phone": "509-249-6232",
    "address": "102 S Naches Ave",
    "city": "Yakima",
    "website": "https://www.yakimacounty.us/2465/Coordinated-Entry",
    "hours": "Yakima/Upper Valley (YNHS) Mon-Fri 9am-5pm; Sunnyside (YNHS) 617 Scoon Rd; Toppenish (YVFWC) 706 Rentschler Ln.",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.yakimacounty.us/2465/Coordinated-Entry"
  },
  {
    "id": "peers-rising-yakima",
    "name": "Peers Rising (Yakima)",
    "categories": [
      "case_management",
      "recovery_support"
    ],
    "description": "Peer-led recovery community organization — drop-in peer support, recovery coaching and mentorship, youth programming, referrals, and essential aid (hygiene, clothing). Open-door, no paperwork.",
    "phone": "509-424-3024",
    "address": "1115 W Lincoln Ave, Ste 103",
    "city": "Yakima",
    "website": "https://www.peersrisingwa.org/yakima",
    "hours": "Mon-Fri 9am-4pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.peersrisingwa.org/yakima"
  },
  {
    "id": "consistent-care-consistent-care-services",
    "name": "Consistent Care (Consistent Care Services)",
    "categories": [
      "case_management"
    ],
    "description": "Care-coordination and intensive case management that connects high-need patients to housing, employment, benefits, and medical care and reduces avoidable emergency-department use; serves Yakima County.",
    "phone": null,
    "address": null,
    "city": "Yakima",
    "website": "https://www.consistentcare.org/",
    "hours": null,
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://www.consistentcare.org/"
  },
  {
    "id": "comprehensive-healthcare-yakima",
    "name": "Comprehensive Healthcare - Yakima",
    "categories": [
      "case_management"
    ],
    "description": "Community behavioral health agency providing mental health and substance use treatment with case management, crisis stabilization (Crisis Triage Center), and a mobile Field Response Team of case managers and peer support specialists.",
    "phone": "509-575-4084",
    "address": "402 S 4th Ave",
    "city": "Yakima",
    "website": "https://comphc.org/locations/yakima/",
    "hours": "Mon-Fri 8:00am-5:00pm. Crisis Triage Center operates 24/7.",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://comphc.org/locations/yakima/"
  },
  {
    "id": "yakima-valley-farm-workers-clinic",
    "name": "Yakima Valley Farm Workers Clinic",
    "categories": [
      "case_management"
    ],
    "description": "Large community health center network providing medical/dental/behavioral care plus care coordination and case management; serves as the Lower Valley (Toppenish) Coordinated Entry housing access point.",
    "phone": "509-865-5600",
    "address": "510 W 1st Ave",
    "city": "Toppenish",
    "website": "https://www.yvfwc.com/",
    "hours": null,
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://www.yvfwc.com/locations/"
  },
  {
    "id": "united-way-of-central-washington-wa-211",
    "name": "United Way of Central Washington / WA 211",
    "categories": [
      "case_management"
    ],
    "description": "Free information & referral service connecting Yakima County residents to health and human-services resources and navigation; dial 211 or search the statewide directory.",
    "phone": "211",
    "address": "116 S 4th St",
    "city": "Yakima",
    "website": "https://www.uwcw.org/",
    "hours": "United Way office Mon-Fri 8:30am-5:00pm (509-248-1557); 211 line statewide, text 211WAOD to 898211.",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://wa211.org/"
  },
  {
    "id": "the-lighthouse-advocacy-prevention-and-education-center-form",
    "name": "The Lighthouse - Advocacy, Prevention, and Education Center (formerly Lower Valley Crisis and Support Services)",
    "categories": [
      "domestic_violence"
    ],
    "description": "Lower Yakima Valley DV/sexual-assault agency; 24-hour crisis line, legal and medical advocacy, emergency shelter, support groups, therapy and prevention education.",
    "phone": "509-837-6689",
    "address": "600 North Avenue (mailing: PO Box 93)",
    "city": "Sunnyside",
    "website": "https://thelighthousewa.org/",
    "hours": "Office Mon-Fri 8am-5pm; 24-hour crisis line 1-877-604-7462",
    "logoUrl": "https://cdn.firespring.com/images/f2e77dbb-8322-4705-8649-4b1f29455703.png",
    "confidence": "high",
    "source": "https://thelighthousewa.org/get-help/overview.html"
  },
  {
    "id": "yakama-nation-behavioral-health-victim-resource-program",
    "name": "Yakama Nation Behavioral Health - Victim Resource Program",
    "categories": [
      "domestic_violence"
    ],
    "description": "Tribal victim-services and crisis counseling for survivors of domestic violence, sexual assault and family/child/adult abuse, with advocacy and support services on the Yakama Reservation.",
    "phone": "509-865-5121 ext. 7633",
    "address": "511 South Elm Street",
    "city": "Toppenish",
    "website": "https://yakama.com/programs/behavioral-health/",
    "hours": null,
    "logoUrl": "https://yakama.com/wp-content/uploads/2021/09/Yakama-Logo.png",
    "confidence": "high",
    "source": "https://yakama.com/programs/behavioral-health/"
  },
  {
    "id": "central-washington-legal-aid-operating-yakima-county-volunte",
    "name": "Central Washington Legal Aid (operating Yakima County Volunteer Attorney Services)",
    "categories": [
      "legal"
    ],
    "description": "Free civil legal advice and representation for low-income residents (eviction/housing defense, family law, immigration, consumer); coordinates pro bono volunteer-attorney clinics across Yakima County. Bilingual.",
    "phone": "509-453-4400",
    "address": "315 Holton Avenue, Suite 202",
    "city": "Yakima",
    "website": "https://cwlegalaid.org/",
    "hours": null,
    "logoUrl": "https://cwlegalaid.org/uploads/logos/CWLA_logo.svg",
    "confidence": "high",
    "source": "https://cwlegalaid.org/contact"
  },
  {
    "id": "northwest-justice-project-yakima-office-and-farmworker-unit",
    "name": "Northwest Justice Project - Yakima Office (and Farmworker Unit)",
    "categories": [
      "legal"
    ],
    "description": "Free civil legal aid for low-income people (housing, public benefits, consumer, family safety) serving Yakima and Kittitas Counties; the Yakima-based Farmworker Unit handles wage theft, workplace harassment and trafficking. Statewide CLEAR intake line 1-888-201-1014 (weekdays 9:15am-12:15pm).",
    "phone": "509-574-4234",
    "address": "311 N 4th Street, Suite 201",
    "city": "Yakima",
    "website": "https://nwjustice.org/",
    "hours": "Mon-Fri 8am-5pm; CLEAR intake 1-888-201-1014 weekdays 9:15am-12:15pm",
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://nwjustice.org/farmworker-unit"
  },
  {
    "id": "community-peace-center-of-central-washington-formerly-disput",
    "name": "Community Peace Center of Central Washington (formerly Dispute Resolution Center of Yakima & Kittitas Counties)",
    "categories": [
      "legal"
    ],
    "description": "Low-cost/sliding-scale mediation and conflict-resolution services (family, divorce, parenting plans, parent/youth, landlord-tenant, elder-care/guardianship) for Yakima and Kittitas Counties.",
    "phone": "509-453-8949",
    "address": "132 N 1st Avenue",
    "city": "Yakima",
    "website": "http://www.drcyakima.org",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.resolutionwa.org/locations/drc-of-yakima-and-kittitas-counties"
  },
  {
    "id": "altc-southeast-washington-aging-long-term-care-legal-service",
    "name": "ALTC - Southeast Washington (Aging & Long-Term Care) Legal Services",
    "categories": [
      "legal"
    ],
    "description": "Area Agency on Aging providing free legal counsel, advice and representation for seniors, caregivers and disabled individuals across an eight-county region that includes Yakima County.",
    "phone": "509-965-0105",
    "address": null,
    "city": "Yakima",
    "website": "https://www.altcwashington.com/legal-services/",
    "hours": null,
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://www.altcwashington.com/legal-services/"
  },
  {
    "id": "yakima-community-justice-center-wa-dept-of-corrections",
    "name": "Yakima Community Justice Center (WA Dept. of Corrections)",
    "categories": [
      "reentry_justice"
    ],
    "description": "State DOC reentry hub for justice-involved residents on community supervision: connects people leaving prison/jail with reentry programming, supervision, employment, treatment and transition resources.",
    "phone": "509-574-9800",
    "address": "916 N. 16th Ave, Suite 102",
    "city": "Yakima",
    "website": "https://doc.wa.gov/about-doc/locations/community-justice-centers/yakima",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://doc.wa.gov/about-doc/locations/community-justice-centers/yakima"
  },
  {
    "id": "yakima-valley-college-reentry-corrections-navigator-program",
    "name": "Yakima Valley College - Reentry / Corrections Navigator Program",
    "categories": [
      "reentry_justice"
    ],
    "description": "Higher-education reentry support for formerly incarcerated people; the corrections/reentry navigator helps with college enrollment, retraining and transition planning back into the community.",
    "phone": "509-834-4506",
    "address": "1107 S 16th Ave",
    "city": "Yakima",
    "website": "https://www.yvcc.edu/",
    "hours": null,
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://www.yvcc.edu/magazine/grant-formerly-incarcerated"
  },
  {
    "id": "house-of-mercy-wayfinders-reentry-program",
    "name": "House of Mercy (Wayfinders Reentry Program)",
    "categories": [
      "reentry_justice"
    ],
    "description": "Faith-based reentry nonprofit serving men returning from incarceration to Yakima County (among multiple WA counties): case management, transitional housing, job-skills training, addiction/mental-health support and family reconnection. Based in Federal Way; serves Yakima remotely.",
    "phone": "206-651-7840",
    "address": null,
    "city": "Federal Way (serves Yakima County)",
    "website": "https://houseofmercyministries.net/",
    "hours": null,
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://www.commerce.wa.gov/finding-your-way-home-house-of-mercy-rebuilds-lives-through-reentry-services/"
  },
  {
    "id": "worksource-yakima",
    "name": "WorkSource Yakima",
    "categories": [
      "employment"
    ],
    "description": "State-run one-stop career center offering free job search assistance, workshops, training referrals, and unemployment help for job seekers.",
    "phone": "509-574-0105",
    "address": "1205 Ahtanum Ridge Dr",
    "city": "Union Gap",
    "website": "https://www.worksourcewa.com",
    "hours": "Mon-Thu 8am-5pm, Fri 8am-4pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.dshs.wa.gov/location/dshs-dvr-ws-yakima"
  },
  {
    "id": "division-of-vocational-rehabilitation-dvr-yakima-office",
    "name": "Division of Vocational Rehabilitation (DVR) - Yakima Office",
    "categories": [
      "employment"
    ],
    "description": "Washington DSHS vocational rehabilitation services helping people with disabilities prepare for, get, keep, or advance in a job.",
    "phone": "509-574-0109",
    "address": "1205 Ahtanum Ridge Dr",
    "city": "Union Gap",
    "website": "https://www.dshs.wa.gov/dvr",
    "hours": "Mon-Fri 8am-5pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.dshs.wa.gov/location/dshs-dvr-ws-yakima"
  },
  {
    "id": "people-for-people",
    "name": "People For People",
    "categories": [
      "employment"
    ],
    "description": "Community action nonprofit offering WIOA adult/youth/dislocated-worker employment & training, BFET food-assistance job training, WorkFirst, and career counseling.",
    "phone": "509-248-6726",
    "address": "304 W. Lincoln Ave",
    "city": "Yakima",
    "website": "https://www.mypfp.org",
    "hours": "Mon-Fri 8am-5pm",
    "logoUrl": "https://www.mypfp.org/wp-content/uploads/2021/02/PFP.png",
    "confidence": "high",
    "source": "https://www.mypfp.org/services/employment-training/"
  },
  {
    "id": "perry-technical-institute",
    "name": "Perry Technical Institute",
    "categories": [
      "employment",
      "education"
    ],
    "description": "Nonprofit accredited trade school offering 1-2 year vocational programs (welding, electrical, HVAC/R, automotive, diesel, plumbing, IT, medical assistant, machining).",
    "phone": "509-453-0374",
    "address": "2011 W. Washington Ave",
    "city": "Yakima",
    "website": "https://www.perrytech.edu",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.perrytech.edu/programs/yakima/"
  },
  {
    "id": "yakima-valley-college-college-career-readiness",
    "name": "Yakima Valley College - College & Career Readiness",
    "categories": [
      "education",
      "employment"
    ],
    "description": "Community college adult education: Adult Basic Education, GED prep, High School completion, English Language Learning (ELL/ESL), and I-BEST job-skills training ($25/quarter).",
    "phone": "509-574-6850",
    "address": "Sundquist Hall, 1105 S 15th Ave",
    "city": "Yakima",
    "website": "https://yvcc.edu/academics/basic-skills.php",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://yvcc.edu/academics/basic-skills.php"
  },
  {
    "id": "la-casa-hogar",
    "name": "La Casa Hogar",
    "categories": [
      "education",
      "childcare",
      "youth_family"
    ],
    "description": "Nonprofit serving Latino/immigrant families with adult education (ESL, GED prep, citizenship/naturalization legal services) and La Escuelita bilingual early-learning for children ages 2-5; classes in Yakima and Wapato.",
    "phone": "509-457-5058",
    "address": "106 S 6th St",
    "city": "Yakima",
    "website": "https://www.lacasahogar.org",
    "hours": null,
    "logoUrl": "https://19264b0618.nxcli.io/wp-content/uploads/2017/04/cropped-7Orange-and-Pink-Logo-on-White.png",
    "confidence": "high",
    "source": "https://www.lacasahogar.org/programs-and-classes/"
  },
  {
    "id": "yakima-open-doors-stanton-academy",
    "name": "Yakima Open Doors (Stanton Academy)",
    "categories": [
      "education"
    ],
    "description": "Yakima School District reengagement program helping ages 16-21 earn a GED or high school diploma through flexible online classes and individual tutoring.",
    "phone": "509-573-5585",
    "address": "Portable A, 1120 S. 18th St",
    "city": "Yakima",
    "website": "https://www.ysd7.org/learning/open-doors",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.ysd7.org/learning/open-doors/about"
  },
  {
    "id": "epic-early-learning-enterprise-for-progress-in-the-community",
    "name": "EPIC Early Learning (Enterprise for Progress in the Community)",
    "categories": [
      "childcare",
      "education",
      "youth_family"
    ],
    "description": "Nonprofit providing free early-learning and family-support services - Head Start, Early Head Start, Migrant/Seasonal Head Start, and ECEAP preschool - for income-eligible children and families across Yakima and Kittitas counties.",
    "phone": "509-317-9466",
    "address": "103 N. 7th Ave",
    "city": "Yakima",
    "website": "https://epicnet.org",
    "hours": "Mon-Fri 8am-4pm",
    "logoUrl": "https://epicnet.org/img/logo.png",
    "confidence": "high",
    "source": "https://epicnet.org/"
  },
  {
    "id": "inspire-development-centers",
    "name": "Inspire Development Centers",
    "categories": [
      "childcare",
      "education"
    ],
    "description": "Nonprofit offering free early learning: Migrant & Seasonal Head Start, Early Head Start, Regional Head Start, and ECEAP preschool for eligible families (birth to age 5).",
    "phone": "509-837-2225",
    "address": "1751 Washington Court",
    "city": "Sunnyside",
    "website": "https://inspirecenters.org",
    "hours": null,
    "logoUrl": "https://inspirecenters.org/img/logo.png",
    "confidence": "high",
    "source": "https://inspirecenters.org/"
  },
  {
    "id": "esd-105-early-learning-head-start",
    "name": "ESD 105 Early Learning / Head Start",
    "categories": [
      "childcare",
      "education"
    ],
    "description": "Educational Service District 105 coordinates center-based Head Start, Migrant/Seasonal Head Start, Early Head Start, and ECEAP early learning across Yakima County.",
    "phone": "509-454-2488",
    "address": "33 S. 2nd Ave",
    "city": "Yakima",
    "website": "https://www.esd105.org/academic-support/early-learning",
    "hours": null,
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://www.esd105.org/academic-support/early-learning/headcstart-locations"
  },
  {
    "id": "child-care-aware-of-central-wa-catholic-charities-serving-ce",
    "name": "Child Care Aware of Central WA (Catholic Charities Serving Central Washington)",
    "categories": [
      "childcare"
    ],
    "description": "Free child care resource & referral for parents (customized provider lists) plus training, coaching, and grants for licensed and family/friend/neighbor child care providers.",
    "phone": "509-965-7109",
    "address": "5301 Tieton Dr, Suite C",
    "city": "Yakima",
    "website": "https://catholiccharitiescw.org/yakima",
    "hours": "Mon-Fri 8am-5pm",
    "logoUrl": "https://catholiccharitiescw.org/uploads/logo/catholic-charities-logo-color.svg",
    "confidence": "high",
    "source": "https://ccwa.doh.wa.gov/search/9473c83d-ccf2-5be6-900c-edfb9fa8bee4"
  },
  {
    "id": "child-care-aware-of-washington-family-center",
    "name": "Child Care Aware of Washington - Family Center",
    "categories": [
      "childcare"
    ],
    "description": "Statewide free child care referral line connecting Yakima-area parents to licensed child care options and subsidy information (serves all WA counties).",
    "phone": "1-800-446-1114",
    "address": null,
    "city": null,
    "website": "https://childcareawarewa.org",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://childcareawarewa.org/about/contact-us/"
  },
  {
    "id": "yakima-family-ymca-jewett-center-child-care",
    "name": "Yakima Family YMCA - Jewett Center Child Care",
    "categories": [
      "childcare"
    ],
    "description": "Full-time licensed child care center using a professional early learning curriculum for children 8 weeks to 5 years old, near the downtown YMCA.",
    "phone": "509-453-7897",
    "address": "212 East F St",
    "city": "Yakima",
    "website": "https://yakimaymca.org/child-care",
    "hours": "Mon-Fri 7:30am-5:30pm",
    "logoUrl": "https://yakimaymca.org/uploads/logo/ymca_logo.svg",
    "confidence": "high",
    "source": "https://yakimaymca.org/child-care"
  },
  {
    "id": "yakima-neighborhood-health-services-main-yakima-clinic",
    "name": "Yakima Neighborhood Health Services (Main Yakima Clinic)",
    "categories": [
      "healthcare_medical",
      "healthcare_dental"
    ],
    "description": "Federally qualified community health center offering sliding-scale medical, dental, vision, behavioral health, pharmacy, and care for the homeless; accepts Apple Health and uninsured.",
    "phone": "(509) 454-4143",
    "address": "12 South 8th Street",
    "city": "Yakima",
    "website": "https://ynhs.org",
    "hours": "Mon-Fri 8am-6:30pm; Sat 8am-1pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://ccwa.doh.wa.gov/search/819688c0-ad31-5f69-84a6-518a5e09bbcc"
  },
  {
    "id": "yakima-neighborhood-health-services-sunnyside-clinic",
    "name": "Yakima Neighborhood Health Services - Sunnyside Clinic",
    "categories": [
      "healthcare_medical",
      "healthcare_dental"
    ],
    "description": "FQHC community clinic in Sunnyside offering sliding-scale medical and dental care; accepts Apple Health and uninsured patients.",
    "phone": "(509) 454-4143",
    "address": "617 Scoon Road",
    "city": "Sunnyside",
    "website": "https://ynhs.org/locations",
    "hours": "Mon-Fri 8am-6:30pm; Sat 8:30am-6pm",
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://resources.helpmegrowwa.org/search/336df550-4376-5af9-b873-1e13a0b75062"
  },
  {
    "id": "yakima-valley-farm-workers-clinic-lincoln-avenue-medical-den",
    "name": "Yakima Valley Farm Workers Clinic - Lincoln Avenue Medical-Dental Center",
    "categories": [
      "healthcare_medical",
      "healthcare_dental"
    ],
    "description": "FQHC providing comprehensive medical and dental care, prenatal, pediatrics, behavioral health and WIC; sliding fee scale, accepts Apple Health and most insurance.",
    "phone": "(509) 575-1234",
    "address": "2205 W Lincoln Ave",
    "city": "Yakima",
    "website": "https://www.yvfwc.com/locations/lincoln-avenue-medical-dental-center/",
    "hours": "Mon-Fri 7:30am-7pm; Sat 9am-4pm (dental: (509) 575-3399)",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://pprs.doh.wa.gov/search/b7c721e7-8bc7-5916-a313-32772b1ddb24"
  },
  {
    "id": "yakima-valley-farm-workers-clinic-yakima-clinic-nob-hill",
    "name": "Yakima Valley Farm Workers Clinic - Yakima Clinic (Nob Hill)",
    "categories": [
      "healthcare_medical",
      "healthcare_dental"
    ],
    "description": "FQHC clinic offering primary medical and dental care for children and adults; accepts Apple Health, Medicare, private insurance, and sliding fee for uninsured.",
    "phone": "(509) 248-1082",
    "address": "602 East Nob Hill Boulevard",
    "city": "Yakima",
    "website": "https://www.yvfwc.com/locations/",
    "hours": "Mon-Fri 7am-6pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://ccwa.doh.wa.gov/search/57d8dd8f-9f0b-5bea-a71a-eabaa58f53b0"
  },
  {
    "id": "yakima-valley-farm-workers-clinic-toppenish-medical-dental-c",
    "name": "Yakima Valley Farm Workers Clinic - Toppenish Medical-Dental Clinic",
    "categories": [
      "healthcare_medical",
      "healthcare_dental"
    ],
    "description": "FQHC clinic in Toppenish offering primary medical and dental care for children and adults; accepts Apple Health, Medicare, insurance, sliding fee for uninsured.",
    "phone": "(509) 865-3886",
    "address": "510 West 1st Avenue",
    "city": "Toppenish",
    "website": "https://www.yvfwc.com/locations/",
    "hours": "Mon-Fri 7am-6pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://ccwa.doh.wa.gov/search/9b667c17-f967-51d2-b3f1-9fd184198f30"
  },
  {
    "id": "yakima-valley-farm-workers-clinic-grandview-clinic",
    "name": "Yakima Valley Farm Workers Clinic - Grandview Clinic",
    "categories": [
      "healthcare_medical",
      "healthcare_dental"
    ],
    "description": "FQHC clinic in Grandview providing primary medical and dental care for children and adults plus urgent dental; accepts Apple Health, Medicare, insurance, sliding fee.",
    "phone": "(509) 882-4491",
    "address": "1000 Wallace Way",
    "city": "Grandview",
    "website": "https://www.yvfwc.com/locations/",
    "hours": "Mon-Fri 8:45am-7pm; Sat 8:45am-4pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://ccwa.doh.wa.gov/search/410926f5-24f8-5609-afa7-537ef0e54be8"
  },
  {
    "id": "yakima-valley-farm-workers-clinic-yv-tech-dental-clinic",
    "name": "Yakima Valley Farm Workers Clinic - YV Tech Dental Clinic",
    "categories": [
      "healthcare_dental"
    ],
    "description": "Dedicated community dental clinic on the YV-Tech campus; takes most insurance including Apple Health/Medicaid and Medicare, with after-hours dental line.",
    "phone": "(509) 573-5530",
    "address": "1120 S 18th St",
    "city": "Yakima",
    "website": "https://www.yvfwc.com/locations/yv-tech-dental/",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://ccwa.doh.wa.gov/search/ef07cc2c-a5d2-5137-9884-4b2c90afe75f"
  },
  {
    "id": "yakima-valley-farm-workers-clinic-sunnyside-immediate-care",
    "name": "Yakima Valley Farm Workers Clinic - Sunnyside Immediate Care",
    "categories": [
      "healthcare_medical"
    ],
    "description": "FQHC urgent/immediate care clinic in Sunnyside for walk-in medical needs; accepts Apple Health and most insurance with sliding fee for uninsured.",
    "phone": "(509) 839-3000",
    "address": "2680 Yakima Valley Hwy, Ste B",
    "city": "Sunnyside",
    "website": "https://www.yvfwc.com/locations/",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://ccwa.doh.wa.gov/search/2896ef6b-d2bf-50df-8faf-6ab01515fd8c"
  },
  {
    "id": "community-health-of-central-washington-central-washington-fa",
    "name": "Community Health of Central Washington - Central Washington Family Medicine",
    "categories": [
      "healthcare_medical"
    ],
    "description": "Nonprofit FQHC providing full-range primary care (OB, pediatrics, behavioral health, MAT), on-site lab/X-ray and pharmacy regardless of ability to pay.",
    "phone": "(509) 452-4520",
    "address": "1806 W Lincoln Ave",
    "city": "Yakima",
    "website": "https://www.chcw.org/cwfm-yakima-clinic/",
    "hours": "Mon & Wed 8am-7:30pm; Tue, Thu, Fri 8am-5pm",
    "logoUrl": "https://www.chcw.org/wp-content/uploads/2023/03/CHCW-corporate-logo.png",
    "confidence": "high",
    "source": "https://www.chcw.org/cwfm-yakima-clinic/"
  },
  {
    "id": "community-health-of-central-washington-administrative-clinic",
    "name": "Community Health of Central Washington (Administrative / Clinic)",
    "categories": [
      "healthcare_medical",
      "healthcare_dental"
    ],
    "description": "Nonprofit community health system serving 28,000+ in Yakima and Kittitas Counties with affordable medical and dental care regardless of ability to pay.",
    "phone": "(509) 962-1414",
    "address": "501 S 5th Ave",
    "city": "Yakima",
    "website": "https://www.chcw.org",
    "hours": "Mon-Fri 8am-5pm",
    "logoUrl": "https://www.chcw.org/wp-content/uploads/2023/03/CHCW-corporate-logo.png",
    "confidence": "medium",
    "source": "https://www.chcw.org/about-chcw/"
  },
  {
    "id": "yakima-free-clinic-la-clinica-gratuita-de-yakima",
    "name": "Yakima Free Clinic (La Clinica Gratuita de Yakima)",
    "categories": [
      "healthcare_medical"
    ],
    "description": "Volunteer-run free clinic providing no-cost holistic medical care (plus a PNWU physical-therapy clinic) for the uninsured and medically underserved.",
    "phone": "(509) 731-3501",
    "address": "208 N 3rd Ave",
    "city": "Yakima",
    "website": "https://yakimafreeclinic.org",
    "hours": "Sun 4-7pm; Mon 10am-2pm; Wed 1-5pm; Thu 12-7pm",
    "logoUrl": "https://yakimafreeclinic.org/wp-content/uploads/2025/04/YFCLogoHorizontalWebTest-2.svg",
    "confidence": "high",
    "source": "https://yakimafreeclinic.org/"
  },
  {
    "id": "yakima-union-gospel-mission-care-center",
    "name": "Yakima Union Gospel Mission Care Center",
    "categories": [
      "healthcare_medical",
      "healthcare_dental"
    ],
    "description": "Mission-based clinic offering free medical and mental health care plus sliding-scale dental (cleanings, fillings, extractions, root canals, dentures) for the impoverished and uninsured.",
    "phone": "(509) 853-4327",
    "address": "1300 N 1st Street",
    "city": "Yakima",
    "website": "https://yugm.org/programs/",
    "hours": "Mon 4-7pm; Tue-Fri 8am-4pm (closed 12-1pm); dental: (509) 853-4335",
    "logoUrl": "https://yugm.org/wp-content/uploads/2024/05/4.svg",
    "confidence": "high",
    "source": "https://yugm.org/programs/"
  },
  {
    "id": "yakima-valley-college-dental-hygiene-clinic",
    "name": "Yakima Valley College Dental Hygiene Clinic",
    "categories": [
      "healthcare_dental"
    ],
    "description": "Low-cost preventive and limited restorative dental care for adults and children, performed by students under instructor supervision; accepts Apple Health, nominal fees for uninsured.",
    "phone": "(509) 574-4917",
    "address": "1015 South 16th Avenue",
    "city": "Yakima",
    "website": "https://www.yvcc.edu",
    "hours": "Call for hours",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://resources.helpmegrowwa.org/search/63a4eb81-a107-5905-b7c9-e3ac0659eac2"
  },
  {
    "id": "yakima-county-veterans-program",
    "name": "Yakima County Veterans Program",
    "categories": [
      "veterans"
    ],
    "description": "County point of entry for veterans: case management, emergency financial relief fund, homeless and incarcerated veteran support, and referrals to VA benefits.",
    "phone": "509-574-1528",
    "address": "223 N 1st Street, Yakima, WA 98901",
    "city": "Yakima",
    "website": "https://www.yakimacounty.us/159/Veterans-Program",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://dva.wa.gov/resources/county/Yakima"
  },
  {
    "id": "yakima-valley-vet-center",
    "name": "Yakima Valley Vet Center",
    "categories": [
      "veterans"
    ],
    "description": "VA readjustment counseling at no cost for combat veterans and families — PTSD, depression, and military sexual trauma support in a non-medical setting.",
    "phone": "509-457-2736",
    "address": "2119 W Lincoln Ave, Yakima, WA 98902",
    "city": "Yakima",
    "website": "https://www.va.gov/yakima-valley-vet-center/",
    "hours": "Mon-Thu 8:00am-5:30pm; 1st and 3rd Saturday 9:00am-1:00pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://dva.wa.gov/resources/county/Yakima"
  },
  {
    "id": "yakima-valley-va-clinic-community-based-outpatient-clinic",
    "name": "Yakima Valley VA Clinic (Community Based Outpatient Clinic)",
    "categories": [
      "veterans"
    ],
    "description": "VA outpatient clinic (Walla Walla VA system) providing primary care, mental health, women's health, labs, radiology, and toxic-exposure screening for veterans.",
    "phone": "509-966-0199",
    "address": "1211 Ahtanum Ridge Dr, Union Gap, WA 98903",
    "city": "Union Gap",
    "website": "https://www.va.gov/walla-walla-health-care/locations/yakima-valley-va-clinic/",
    "hours": "Mon-Fri 8:00am-4:30pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.va.gov/walla-walla-health-care/locations/yakima-valley-va-clinic/"
  },
  {
    "id": "oic-of-washington-veteran-support-offices-ssvf",
    "name": "OIC of Washington — Veteran Support Offices (SSVF)",
    "categories": [
      "veterans"
    ],
    "description": "Supportive Services for Veteran Families: housing assistance, case management, and benefit referrals for low-income veterans who are homeless or at risk of homelessness.",
    "phone": "509-571-7645",
    "address": "1630 S 16th Ave, Yakima, WA 98902",
    "city": "Yakima",
    "website": "https://oicofwa.org/programs/support/veterans/",
    "hours": "Mon-Fri 8:00am-5:00pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://oicofwa.org/programs/support/veterans/"
  },
  {
    "id": "american-legion-veterans-service-officer-yakima",
    "name": "American Legion Veterans Service Officer (Yakima)",
    "categories": [
      "veterans"
    ],
    "description": "Accredited Veterans Service Officer providing free help filing VA disability and benefit claims.",
    "phone": "509-895-7532",
    "address": "1630 S 16th Ave Ste 6, Yakima, WA 98902",
    "city": "Yakima",
    "website": "https://dva.wa.gov/resources/county/Yakima",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://dva.wa.gov/resources/county/Yakima"
  },
  {
    "id": "veterans-of-foreign-wars-vfw-service-officer-yakima",
    "name": "Veterans of Foreign Wars (VFW) Service Officer (Yakima)",
    "categories": [
      "veterans"
    ],
    "description": "Accredited VFW Veterans Service Officer providing free assistance with VA disability and benefit claims.",
    "phone": "509-654-7191",
    "address": "1630 S 16th Ave Ste 5, Yakima, WA 98902",
    "city": "Yakima",
    "website": "https://dva.wa.gov/resources/county/Yakima",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://dva.wa.gov/resources/county/Yakima"
  },
  {
    "id": "yakama-nation-veterans-affairs-program-yakama-warriors-assoc",
    "name": "Yakama Nation Veterans Affairs Program (Yakama Warriors Association Veterans Center)",
    "categories": [
      "veterans"
    ],
    "description": "Tribal veterans service program assisting Yakama Nation veterans with VA disability claims, healthcare enrollment, and benefits.",
    "phone": "509-865-5121",
    "address": "480 Buster Rd, Toppenish, WA 98948",
    "city": "Toppenish",
    "website": "https://www.facebook.com/people/Yakama-Nation-Veterans-Affairs-Program/100080065819697/",
    "hours": null,
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://dva.wa.gov/resources/county/Yakima"
  },
  {
    "id": "washington-state-department-of-veterans-affairs-wdva",
    "name": "Washington State Department of Veterans Affairs (WDVA)",
    "categories": [
      "veterans"
    ],
    "description": "Statewide agency (serves Yakima residents) coordinating veteran benefits, claims assistance, housing, behavioral health, and a county resource directory.",
    "phone": "800-562-2308",
    "address": null,
    "city": null,
    "website": "https://www.dva.wa.gov/",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://dva.wa.gov/resources/county/Yakima"
  },
  {
    "id": "central-washington-disability-resources-cwdr",
    "name": "Central Washington Disability Resources (CWDR)",
    "categories": [
      "disability_services"
    ],
    "description": "Nonprofit Center for Independent Living serving Yakima County: independent living skills, peer support, individual and systems advocacy, information & referral, and transition support.",
    "phone": "509-492-5286",
    "address": "17 N 3rd St Suite 101, Yakima, WA 98901",
    "city": "Yakima",
    "website": "https://www.mycwdr.org/",
    "hours": "Mon-Fri 9:00am-12:00pm and 1:00pm-5:00pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.mycwdr.org/contact"
  },
  {
    "id": "yakima-county-developmental-disabilities-program",
    "name": "Yakima County Developmental Disabilities Program",
    "categories": [
      "disability_services"
    ],
    "description": "County program (administered through Children's Village) providing resources, employment/community-integration support, and advocacy for people with developmental disabilities and their families.",
    "phone": "509-575-4040",
    "address": "1210 Ahtanum Ridge Drive, Yakima, WA 98903",
    "city": "Yakima",
    "website": "https://www.yakimacounty.us/1946/Developmental-Disabilities-Program",
    "hours": "Mon, Wed-Fri 8:30am-4:30pm; Tue 9:30am-4:30pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.yakimacounty.us/1946/Developmental-Disabilities-Program"
  },
  {
    "id": "dshs-division-of-vocational-rehabilitation-dvr-yakima-office",
    "name": "DSHS Division of Vocational Rehabilitation (DVR) — Yakima Office",
    "categories": [
      "disability_services"
    ],
    "description": "State vocational rehabilitation office helping people with disabilities prepare for, get, and keep employment: counseling, assessments, benefits planning, and assistive technology.",
    "phone": "509-225-4455",
    "address": "1002 N 16th Ave, Yakima, WA 98902",
    "city": "Yakima",
    "website": "https://www.dshs.wa.gov/location/dshs-dvr-yakima",
    "hours": "Mon-Fri 8:00am-5:00pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.dshs.wa.gov/location/dshs-dvr-yakima"
  },
  {
    "id": "parent-to-parent-of-yakima-county-children-s-village",
    "name": "Parent to Parent of Yakima County (Children's Village)",
    "categories": [
      "disability_services"
    ],
    "description": "Peer support and information program for families raising children with special health-care or developmental needs; classes, events, and a bilingual newsletter.",
    "phone": "509-575-4040",
    "address": "1210 Ahtanum Ridge Drive, Yakima, WA 98903",
    "city": "Yakima",
    "website": "https://yakimachildrensvillage.org/services/parent-to-parent/",
    "hours": "Mon, Wed-Fri 8:30am-4:30pm; Tue 9:30am-4:30pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.yakimacounty.us/2153/Parent-to-Parent-Childrens-Village"
  },
  {
    "id": "community-seeds",
    "name": "Community SEEDS",
    "categories": [
      "disability_services"
    ],
    "description": "Nonprofit serving families with developmental disabilities throughout Yakima County — job training, employment, enrichment, and education programs for adults with autism and other disabilities.",
    "phone": "509-731-7761",
    "address": "PO Box 1129, Zillah, WA 98953",
    "city": "Zillah",
    "website": "http://seedsyv.wixsite.com/communityseeds",
    "hours": null,
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://www.grangerchamber.net/community-seeds/"
  },
  {
    "id": "washington-dda-intake-eligibility-region-1",
    "name": "Washington DDA Intake & Eligibility (Region 1)",
    "categories": [
      "disability_services"
    ],
    "description": "Statewide DDA enrollment line serving Yakima County — request an enrollment packet and determine eligibility for developmental disability services.",
    "phone": "800-462-0624",
    "address": null,
    "city": null,
    "website": "https://www.dshs.wa.gov/dda/consumers-and-families/eligibility",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.dshs.wa.gov/dda/consumers-and-families/eligibility"
  },
  {
    "id": "aging-long-term-care-altc-of-southeast-washington-upper-yaki",
    "name": "Aging & Long Term Care (ALTC) of Southeast Washington - Upper Yakima Office",
    "categories": [
      "seniors"
    ],
    "description": "Designated Area Agency on Aging for Yakima County; Aging & Disability Resource Center offering case management, information & referral, family caregiver support, benefits help, and access to in-home care for adults 60+ and adults with disabilities.",
    "phone": "509-469-0500",
    "address": "1710 S 24th Ave, Suite 100",
    "city": "Yakima",
    "website": "https://www.altcwashington.com",
    "hours": "Mon-Fri 8:30am-5pm",
    "logoUrl": "https://www.altcwashington.com/wp-content/uploads/2018/05/Screen-Shot-2017-02-21-at-9.36.42-AM.png",
    "confidence": "high",
    "source": "http://www.altcwashington.com/contact/"
  },
  {
    "id": "aging-long-term-care-altc-of-southeast-washington-lower-yaki",
    "name": "Aging & Long Term Care (ALTC) of Southeast Washington - Lower Yakima Valley Office",
    "categories": [
      "seniors"
    ],
    "description": "Lower-valley Aging & Disability Resource Center office of the Area Agency on Aging, serving Grandview/Sunnyside-area seniors and adults with disabilities with case management, information & referral, and caregiver support.",
    "phone": "509-402-0334",
    "address": "204 Port Point West",
    "city": "Grandview",
    "website": "https://www.altcwashington.com",
    "hours": "Mon-Fri 8:30am-5pm",
    "logoUrl": "https://www.altcwashington.com/wp-content/uploads/2018/05/Screen-Shot-2017-02-21-at-9.36.42-AM.png",
    "confidence": "high",
    "source": "http://www.altcwashington.com/contact/"
  },
  {
    "id": "yakama-nation-area-agency-on-aging",
    "name": "Yakama Nation Area Agency on Aging",
    "categories": [
      "seniors",
      "youth_family"
    ],
    "description": "Tribal Area Agency on Aging serving Native American elders age 50+; provides case management, information & referral, family caregiver and kinship caregiver support, respite, and senior farmers-market vouchers.",
    "phone": "509-865-7164",
    "address": "401 Fort Road",
    "city": "Toppenish",
    "website": "https://www.dshs.wa.gov/altsa/yakama-nation-area-agency-aging",
    "hours": "Mon-Fri 8am-5pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://search.wa211.org/search/080b9dd4-ea16-5271-8c68-b43d31c1c65d"
  },
  {
    "id": "people-for-people-senior-nutrition-meals-on-wheels",
    "name": "People For People - Senior Nutrition / Meals on Wheels",
    "categories": [
      "seniors"
    ],
    "description": "Countywide senior nutrition program delivering home-delivered frozen meals and serving congregate lunches at senior dining sites across Yakima County for adults 60+; also runs 2-1-1 referrals and senior/special-needs transportation.",
    "phone": "509-426-2601",
    "address": "1215 Business Park Way",
    "city": "Union Gap",
    "website": "https://www.mypfp.org/services/meals-on-wheels/",
    "hours": "Dining-room lunch served Mon-Fri 11:00-11:30am (site-specific)",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.mypfp.org/services/meals-on-wheels/"
  },
  {
    "id": "harman-senior-center-yakima-parks-recreation",
    "name": "Harman Senior Center (Yakima Parks & Recreation)",
    "categories": [
      "seniors"
    ],
    "description": "City-run senior center for adults 50+ offering fitness and wellness classes, arts and crafts, games, computer training, social events, and affordable lunches; a People For People senior dining site.",
    "phone": "509-575-6166",
    "address": "101 North 65th Ave",
    "city": "Yakima",
    "website": "https://yakimaparks.com/senior-center/",
    "hours": "Mon-Fri 8am-4pm; Sat 9am-3:30pm",
    "logoUrl": "https://yakimaparks.com/assets/ypr-logo-web.png",
    "confidence": "high",
    "source": "https://yakimaparks.com/senior-center/"
  },
  {
    "id": "union-gap-senior-center",
    "name": "Union Gap Senior Center",
    "categories": [
      "seniors"
    ],
    "description": "City senior center with recreational and social activities (arts & crafts, bingo, lending library) and daily People For People lunch service with advance registration.",
    "phone": "509-248-2668",
    "address": "108-A West Ahtanum Road",
    "city": "Union Gap",
    "website": "https://uniongapwa.gov/public-works/senior-center/",
    "hours": "Mon-Fri 8:30am-12:30pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://uniongapwa.gov/public-works/senior-center/"
  },
  {
    "id": "sunnyside-senior-center",
    "name": "Sunnyside Senior Center",
    "categories": [
      "seniors"
    ],
    "description": "City senior center for adults 50+ with a meeting hall and dining room offering Meals on Wheels lunches, arts & crafts, yoga, bingo, grief support, and toe-care services.",
    "phone": "509-839-4220",
    "address": "1400 Federal Way",
    "city": "Sunnyside",
    "website": "https://www.sunnyside-wa.gov/157/Senior-Services",
    "hours": "Mon 9:30am-3pm; Tue 9:30am-4pm; Wed 9:30am-12:30pm; Thu 9:30am-2pm; Fri 9:30am-12:30pm; Sat 10:30am-2pm",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.sunnyside-wa.gov/157/Senior-Services"
  },
  {
    "id": "yakima-neighborhood-health-services-the-space-youth-resource",
    "name": "Yakima Neighborhood Health Services - The Space Youth Resource Center",
    "categories": [
      "youth_family"
    ],
    "description": "Youth resource center for ages 13-24 offering individual and group counseling, mentoring, tutoring, housing help, and employment support, alongside YNHS's broader health and homeless services.",
    "phone": "509-574-5448",
    "address": "12 South 8th Street",
    "city": "Yakima",
    "website": "https://ynhs.org/programs/youth-resources",
    "hours": null,
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://ynhs.org/programs/youth-resources"
  },
  {
    "id": "oic-excel-youth-center-oic-of-washington",
    "name": "OIC Excel Youth Center (OIC of Washington)",
    "categories": [
      "youth_family"
    ],
    "description": "Multiservice center serving children, youth, and families with tutoring, mentorship, STEAM/robotics enrichment, leadership development, career readiness, and family support.",
    "phone": "509-864-1937",
    "address": "1009 N. 9th Ave",
    "city": "Yakima",
    "website": "https://oicofwa.org/locations/excel-youth-center",
    "hours": "By appointment",
    "logoUrl": null,
    "confidence": "high",
    "source": "https://oicofwa.org/locations/excel-youth-center"
  },
  {
    "id": "comprehensive-healthcare-children-youth-family-services-yaki",
    "name": "Comprehensive Healthcare - Children, Youth & Family Services (Yakima)",
    "categories": [
      "youth_family"
    ],
    "description": "Behavioral-health services for children, adolescents, and transition-age youth and their families: individual and family therapy, psychiatry/medication management, WISe wraparound intensive services, and the New Journeys first-episode-psychosis program.",
    "phone": "509-575-4084",
    "address": "402 S 4th Avenue",
    "city": "Yakima",
    "website": "https://comphc.org/services/children-youth-and-family-services/",
    "hours": "Mon-Fri 8am-5pm; 24/7 crisis line 800-572-8122",
    "logoUrl": "https://www.comphc.org/wp-content/uploads/2020/06/CH_logo.png",
    "confidence": "high",
    "source": "https://comphc.org/services/children-youth-and-family-services/"
  },
  {
    "id": "casey-family-programs-yakima-field-office",
    "name": "Casey Family Programs - Yakima Field Office",
    "categories": [
      "youth_family"
    ],
    "description": "Child-welfare nonprofit providing clinical case management for youth and families seeking permanency, foster/resource-family recruitment and training, educational advocacy, and support for young adults transitioning from foster care.",
    "phone": "509-457-8197",
    "address": "404 North Third Street",
    "city": "Yakima",
    "website": "https://www.casey.org/who-we-are/locations/yakima/",
    "hours": null,
    "logoUrl": null,
    "confidence": "high",
    "source": "https://www.casey.org/who-we-are/locations/yakima/"
  },
  {
    "id": "boys-girls-club-of-the-yakama-nation",
    "name": "Boys & Girls Club of the Yakama Nation",
    "categories": [
      "youth_family"
    ],
    "description": "Youth-development club for ages 5-18 living on and around the Yakama Nation Reservation, offering after-school enrichment, wellness, and skill-building in a safe environment that honors tribal heritage.",
    "phone": "509-480-3070",
    "address": "600 N Meyers Rd",
    "city": "Toppenish",
    "website": "https://www.bgcyn.com",
    "hours": null,
    "logoUrl": "https://images.squarespace-cdn.com/content/v1/642daaacdec3ed5e57226f6a/081a3d00-fd1a-4407-b20c-f9dc4f80294c/Logo+.jpg",
    "confidence": "high",
    "source": "https://www.bgcyn.com/"
  },
  {
    "id": "yakima-family-ymca",
    "name": "Yakima Family YMCA",
    "categories": [
      "youth_family"
    ],
    "description": "Family YMCA offering youth and teen programs including youth sports, the YCREW drop-in center (grades 1-8), KICK-BACK (grades 9-12), aquatics, and family activities.",
    "phone": "509-490-3900",
    "address": "3800 River Road",
    "city": "Yakima",
    "website": "https://yakimaymca.org",
    "hours": "Mon-Fri 5am-10pm; Sat 7am-8pm; Sun 12pm-6pm",
    "logoUrl": "https://yakimaymca.org/uploads/logo/ymca_logo.svg",
    "confidence": "high",
    "source": "https://yakimaymca.org/programs/youth-and-teens"
  },
  {
    "id": "wa-dcyf-family-reconciliation-services-yakima",
    "name": "WA DCYF - Family Reconciliation Services (Yakima)",
    "categories": [
      "youth_family"
    ],
    "description": "State crisis-intervention program for families with teens (ages 12-17) who have run away or are in serious conflict with parents; aims to preserve, strengthen, and reconcile families. Statewide program serving Yakima County.",
    "phone": "1-866-363-4276",
    "address": null,
    "city": "Yakima",
    "website": "https://dcyf.wa.gov/services/at-risk-youth/frs",
    "hours": "Office Mon-Fri 8am-4:30pm; intake 24 hours daily",
    "logoUrl": null,
    "confidence": "medium",
    "source": "https://ccwa.doh.wa.gov/search/4ab9c90a-613f-5796-b6c7-a873a374518f"
  }
];

export function getResourcesByCategory(categoryKey: string): CommunityResource[] {
  return communityResources.filter((r) => r.categories.includes(categoryKey));
}

export function searchResources(query: string): CommunityResource[] {
  const q = query.trim().toLowerCase();
  if (!q) return communityResources;
  return communityResources.filter(
    (r) =>
      r.name.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      (r.city ? r.city.toLowerCase().includes(q) : false),
  );
}
