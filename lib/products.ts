export const categories = [
  { slug: 'vitamins', name: 'Vitamins', line: 'High-potency nutrition inputs for feed, pharma and nutraceutical applications.' },
  { slug: 'mineral-salts', name: 'Mineral Salts', line: 'Reliable mineral sources for animal nutrition and speciality formulations.' },
  { slug: 'amino-acids', name: 'Amino Acids', line: 'Core amino acids supporting growth, performance and balanced nutrition.' },
  { slug: 'antibiotics', name: 'Antibiotics', line: 'Quality-focused ingredients supplied for regulated business requirements.' },
  { slug: 'chelated-minerals', name: 'Chelated Minerals', line: 'Bioavailable mineral solutions designed for premium nutrition programs.' },
  { slug: 'other-chemicals', name: 'Other Chemicals', line: 'Industrial and feed-grade chemical ingredients sourced for global buyers.' }
];

const productNames = [
  ['vitamin-a-palmitate', 'Vitamin A Palmitate', 'Vitamins'],
  ['vitamin-d3-cholecalciferol', 'Vitamin D3 (Cholecalciferol)', 'Vitamins'],
  ['vitamin-e-acetate-50', 'Vitamin E Acetate 50%', 'Vitamins'],
  ['vitamin-k3-msb', 'Vitamin K3 (Menadione Sodium Bisulfite)', 'Vitamins'],
  ['vitamin-b1', 'Vitamin B1 (Thiamine Mononitrate)', 'Vitamins'],
  ['vitamin-b2', 'Vitamin B2 (Riboflavin)', 'Vitamins'],
  ['vitamin-b6', 'Vitamin B6 (Pyridoxine HCl)', 'Vitamins'],
  ['vitamin-b12', 'Vitamin B12', 'Vitamins'],
  ['dicalcium-phosphate', 'Dicalcium Phosphate (DCP)', 'Mineral Salts'],
  ['tricalcium-phosphate', 'Tricalcium Phosphate (TCP)', 'Mineral Salts'],
  ['ferrous-sulphate', 'Ferrous Sulphate', 'Mineral Salts'],
  ['zinc-sulphate', 'Zinc Sulphate', 'Mineral Salts'],
  ['magnesium-oxide', 'Magnesium Oxide', 'Mineral Salts'],
  ['l-lysine-hcl', 'L-Lysine HCL', 'Amino Acids'],
  ['dl-methionine', 'DL-Methionine', 'Amino Acids'],
  ['l-threonine', 'L-Threonine', 'Amino Acids'],
  ['l-tryptophan', 'L-Tryptophan', 'Amino Acids'],
  ['chlortetracycline', 'Chlortetracycline', 'Antibiotics'],
  ['tylosin-phosphate', 'Tylosin Phosphate', 'Antibiotics'],
  ['zinc-glycinate', 'Zinc Glycinate', 'Chelated Minerals'],
  ['copper-glycinate', 'Copper Glycinate', 'Chelated Minerals'],
  ['iron-glycinate', 'Iron Glycinate', 'Chelated Minerals'],
  ['choline-chloride', 'Choline Chloride', 'Other Chemicals'],
  ['sodium-bicarbonate', 'Sodium Bicarbonate', 'Other Chemicals'],
  ['betaine-hcl', 'Betaine HCL', 'Other Chemicals']
] as const;

export const products = productNames.map(([slug, name, category], index) => ({
  slug,
  name,
  category,
  badge: index < 6 ? 'Featured' : index % 3 === 0 ? 'Global supply' : 'Available on RFQ',
  short: `${name} supplied with documentation-ready quality focus for B2B buyers in feed, pharmaceutical and chemical markets.`,
  details: `${name} is positioned for buyers who need dependable sourcing, consistent communication and export-ready support. Product specifications, grade, assay, packaging and availability can be shared based on inquiry requirements.`,
  applications: ['Animal feed and nutrition premixes', 'Pharmaceutical and nutraceutical formulations', 'Speciality chemical and industrial applications'],
  features: ['Quality-focused sourcing', 'Export-oriented documentation support', 'Flexible packaging placeholders', 'Fast RFQ and WhatsApp inquiry flow'],
  packaging: ['25 kg bag / drum placeholder', 'Custom packaging on request', 'COA / MSDS subject to availability']
}));

export const featuredProducts = products.slice(0, 8);
export function getProduct(slug:string){ return products.find(p => p.slug === slug); }
export function relatedProducts(category:string, slug:string){ return products.filter(p => p.category === category && p.slug !== slug).slice(0,4); }
