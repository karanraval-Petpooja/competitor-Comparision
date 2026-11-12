// Attendo (payroll + attendance + workforce). Competitors: Keka, PagarBook, greytHR.
const f = (m, name, desc, p, c) => ({ id:`att-${m}-${name.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`, moduleId:m, name, desc, petpooja:p, competitors:c });
const S = (keka, pagarbook, greythr) => ({
  keka: typeof keka==="string"?{support:keka}:keka,
  pagarbook: typeof pagarbook==="string"?{support:pagarbook}:pagarbook,
  greythr: typeof greythr==="string"?{support:greythr}:greythr,
});
export default {
  id:"attendo", category:"PPU", name:"Attendo", tagline:"Payroll, attendance & workforce", icon:"Users",
  description:"Attendance, shifts, payroll and compliance for restaurant & retail teams.",
  lastUpdated:"2026-08-30",
  competitors:[
    { id:"keka", name:"Keka", confidence:"review", who:"Modern HRMS with payroll, performance and recruitment.",
      strengths:["Full HRMS","Performance module","Polished UX"], weakness:"Priced for 50-500 mid-market; per-employee cost escalates.",
      pricingNote:"≈ ₹6,999 base + ₹90–180/employee/mo (~₹2L+/yr for 100).", pitch:"Attendo is fixed-price with biometric + restaurant-friendly shifts — no per-employee escalation." },
    { id:"pagarbook", name:"PagarBook", confidence:"estimated", who:"Mobile attendance & wage app for small/daily-wage staff.",
      strengths:["Selfie/GPS attendance","Fast onboarding","Cheap entry"], weakness:"Light on shifts, full payroll and compliance depth.",
      pricingNote:"Free basic; low per-employee.", pitch:"Attendo adds shift management, full payroll and statutory compliance on top of attendance." },
    { id:"greythr", name:"greytHR", confidence:"review", who:"Established payroll/HR platform, strong statutory compliance.",
      strengths:["Deep compliance","Established","ESS"], weakness:"Priced per-employee; heavier for small restaurant teams.",
      pricingNote:"≈ ₹1,764–2,940/mo (10 emp); free up to 25.", pitch:"Attendo is fixed-price with biometric + F&B shifts, no per-employee escalation." },
  ],
  modules:[
    { id:"attendance", name:"Attendance", blurb:"Biometric, mobile, regularization" },
    { id:"shift", name:"Shift", blurb:"Rotational, roster, overtime" },
    { id:"payroll", name:"Payroll", blurb:"Wages, processing, deductions" },
    { id:"compliance", name:"Compliance", blurb:"PF, ESIC, PT, TDS" },
    { id:"ess", name:"ESS", blurb:"Payslip, leave, profile" },
  ],
  features:[
    f("attendance","Biometric / device attendance","Attendance via biometric devices.",{support:"full"},S("full",{support:"partial",note:"App-first."},"full")),
    f("attendance","Mobile + GPS attendance","Phone attendance with geo-tag.",{support:"full"},S("full",{support:"full",note:"Core strength."},"partial")),
    f("attendance","Regularization & reports","Correct punches, reports.",{support:"full"},S("full","partial","full")),
    f("shift","Rotational & open shifts","Flexible restaurant shifts.",{support:"full",note:"Built for F&B rosters."},S("partial","partial","full")),
    f("shift","Roster & scheduling","Plan rosters, overtime.",{support:"full"},S("partial","none","full")),
    f("payroll","Wages & salary processing","Daily/hourly/monthly pay runs.",{support:"full"},S("full","partial","full")),
    f("payroll","Overtime, penalties, deductions","OT, fines, deductions.",{support:"full"},S("full","partial","full")),
    f("payroll","Daily wage & hourly payroll","Wage staff, hourly & daily pay.",{support:"full",note:"Suited to restaurant/retail."},S("partial",{support:"full"},"partial")),
    f("compliance","PF / ESIC / PT / TDS","Statutory deductions & filings.",{support:"partial",note:"Core statutory."},S("full",{support:"none"},{support:"full",note:"Compliance-strong."})),
    f("ess","Payslip & leave self-service","Staff view payslip, apply leave.",{support:"full"},S("full","partial","full")),
  ],
  pricing:{ lastUpdated:"2026-08-30", note:"Attendo modelled as fixed-price (Petpooja materials); competitor figures third-party.",
    inputs:{ outlets:false, employees:true },
    costModel:{
      petpooja:{ monthlyBase:750, perEmployee:0, setup:0, hardware:3000, annualDiscount:0.0, confidence:"verified" },
      keka:{ monthlyBase:6999, perEmployee:120, setup:5000, hardware:0, annualDiscount:0.1, confidence:"review" },
      pagarbook:{ monthlyBase:0, perEmployee:45, setup:0, hardware:0, annualDiscount:0.05, confidence:"estimated" },
      greythr:{ monthlyBase:1764, perEmployee:60, setup:3000, hardware:0, annualDiscount:0.1, confidence:"review" },
    },
    lines:[
      { label:"Pricing model", petpooja:{value:"Fixed / year",confidence:"verified"}, competitors:{keka:{value:"Base + per-employee"},pagarbook:{value:"Per-employee"},greythr:{value:"Base + per-employee"}} },
      { label:"First year", petpooja:{value:"₹9,000 + GST",confidence:"verified"}, competitors:{keka:{value:"₹2L+ /yr (100 emp)"},pagarbook:{value:"Low"},greythr:{value:"₹21,000+"}} },
      { label:"Renewal", petpooja:{value:"₹4,000 + GST",confidence:"verified"}, competitors:{keka:{value:"Recurring"},pagarbook:{value:"Recurring"},greythr:{value:"Recurring"}} },
      { label:"Per-employee fee", petpooja:{value:"None",confidence:"verified"}, competitors:{keka:{value:"₹90–180"},pagarbook:{value:"Low"},greythr:{value:"₹60+"}} },
      { label:"Biometric", petpooja:{value:"Supported",confidence:"review"}, competitors:{keka:{value:"Add-on"},pagarbook:{value:"App-first"},greythr:{value:"Add-on"}} },
    ],
  },
};
