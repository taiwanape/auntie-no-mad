export const IMAGE_STYLE_RULE_VERSION = "auntie-reference-v9";
export const AUNTIE_REFERENCE_IMAGE = "assets/brand/auntie-style-reference.jpg";
export const AUNTIE_SCENE_REFERENCE_IMAGE = "assets/brand/auntie-scene-reference.png";
export const AUNTIE_MARKET_SCENE_REFERENCE_IMAGE = "assets/brand/auntie-market-scene-reference.png";
export const AUNTIE_REFERENCE_IMAGES = [
  AUNTIE_REFERENCE_IMAGE,
  AUNTIE_SCENE_REFERENCE_IMAGE,
  AUNTIE_MARKET_SCENE_REFERENCE_IMAGE
];

export const AUNTIE_STYLE_RULES = [
  "MULTI-REFERENCE LOCK: use the provided reference images together. The character reference locks Auntie's identity. The scene references lock the website cover style, richer prop density, table/room staging, layered foreground-midground-background composition, and polished editorial comic rendering. Do not use any single reference as a pose template.",
  "CHARACTER LOCK: the auntie must remain the same person as the reference image: middle-aged Taiwanese auntie, round fuller face, full curly dark-brown short hair with big swooping curls, black pixel sunglasses, gold hoop earrings, leopard-print long sleeves/top, black apron with one small pink heart, fuller body, confident practical attitude.",
  "NO CHARACTER DRIFT: no younger face, no thinner body, no different hairstyle, no straight hair, no tiny mascot version, no generic influencer, no different sunglasses, no different outfit, no missing leopard sleeves, no missing black apron, no simplified emoji-like face, and no chibi remake.",
  "REFERENCE POSE WARNING: some references contain a phone, laptop, weather props, money props, chart props, or cooking props, but those are not mandatory. Do not copy any reference pose or prop cluster unless the article topic directly needs it. Use references for identity, rendering style, and cover-scene richness, not as reusable layouts.",
  "STYLE LOCK: polished 16:9 landscape editorial comic cover for the Auntie No Mad website, not a logo, poster, ad, infographic, mascot badge, icon sheet, simple sticker pack, flat vector collage, UI mockup, or children's clip art.",
  "REFERENCE DETAIL FLOOR: keep the same level of visual richness as the reference: textured brown hair highlights, dimensional cheek shading, varied thick-to-thin black ink lines, cream paper warmth, layered props, halftone texture, hand-drawn imperfections, and clean white sticker-cut borders around major objects.",
  "NO FLAT TEMPLATE LOOK: avoid plain yellow walls with a few icons, repeated standing pose, copy-paste phone-in-hand pose, sparse warning-symbol layouts, overused warning triangles, generic chart walls, overly flat vector shapes, generic stock illustration, and empty background space.",
  "Use the approved website look: bright yellow halftone background, thick expressive black ink outlines, clean white sticker-cut borders, hot-pink accent icons, cream paper tones, playful Taiwan editorial comic energy, rich scene detail, layered props, and polished hand-drawn cartoon rendering.",
  "COMPOSITION LOCK: the auntie is the first-read anchor but must interact with the story, not just stand beside icons. Use a medium shot or three-quarter scene with hands, face, apron heart, and story-critical props fully inside frame. Keep generous margins; do not crop the head, face, sunglasses, hands, apron heart, or key objects.",
  "STORY SCENE LOCK: every article image needs a distinct mini-scene with foreground, midground, and background. Show the article topic through action, objects, environment, and expression: phones, blank message bubbles, household props, commute props, weather props, market-desk props, warning icons, abstract charts, blank cards, and expressive auntie reactions.",
  "ABSOLUTE TEXT BAN: no visible writing anywhere. No Chinese characters, English letters, numbers, stock tickers, company names, brand title, logo, watermark, signage, captions, labels, speech-bubble words, readable or fake text on papers, screens, phones, signs, badges, charts, cards, stickers, map pins, receipts, notebooks, or UI panels.",
  "SYMBOL TEXT BAN: no currency symbols, dollar signs, percent signs, plus/minus signs, punctuation-as-text, QR-code-like blocks, readable warning labels, chart axis labels, chart numbers, calendar dates, license-plate-like marks, or pseudo-writing strokes. Use blank icons, shapes, arrows without labels, colored dots, pictograms, empty check circles, abstract charts, and blank panels instead.",
  "QUALITY BAR: the image must feel like a finished website article cover: warm, funny, slightly dramatic, practical, Taiwan everyday-life editorial storytelling. Reject any result that feels like a rough meme, corporate slide, children's clip art, dark noir crime poster, bland stock illustration, simplified UI icon graphic, or a low-detail mascot template."
];

export function auntieStylePrompt(extraRules = []) {
  return [...AUNTIE_STYLE_RULES, ...extraRules].filter(Boolean).join(" ");
}

export function imageStyleMetadata() {
  return {
    version: IMAGE_STYLE_RULE_VERSION,
    referenceImage: AUNTIE_REFERENCE_IMAGE,
    referenceImages: AUNTIE_REFERENCE_IMAGES,
    requiredRules: AUNTIE_STYLE_RULES.length
  };
}
