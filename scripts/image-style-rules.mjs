export const IMAGE_STYLE_RULE_VERSION = "auntie-reference-v13";
export const AUNTIE_REFERENCE_IMAGE = "assets/brand/auntie-style-reference.jpg";
export const AUNTIE_SCENE_REFERENCE_IMAGE = "assets/brand/auntie-scene-reference.png";
export const AUNTIE_MARKET_SCENE_REFERENCE_IMAGE = "assets/brand/auntie-market-scene-reference.png";
export const AUNTIE_LIFE_REFERENCE_IMAGES = [
  AUNTIE_SCENE_REFERENCE_IMAGE
];
export const AUNTIE_MARKET_REFERENCE_IMAGES = [
  AUNTIE_MARKET_SCENE_REFERENCE_IMAGE
];
export const AUNTIE_REFERENCE_IMAGES = [
  AUNTIE_REFERENCE_IMAGE,
  AUNTIE_SCENE_REFERENCE_IMAGE,
  AUNTIE_MARKET_SCENE_REFERENCE_IMAGE
];

export const AUNTIE_STYLE_RULES = [
  "SECTION REFERENCE LOCK: use only the full-scene reference chosen for the content section. The full-scene reference is the primary visual target and locks the finished website cover style, dense prop staging, layered foreground-midground-background composition, polished editorial comic rendering, and Auntie's identity. Do not use the separate square character reference for daily generation because it pushes the model toward flat mascot/icon layouts.",
  "FULL SCENE TEMPLATE LOCK: the image must feel as complete as the approved full article cover reference, with a real environment, foreground table or street objects, midground action, background context, and multiple topic-specific props. Do not output a single centered auntie standing beside a screen, chart panel, warning sign, or floating icon cluster.",
  "CHARACTER LOCK: the auntie must remain the same person as the reference image: middle-aged Taiwanese auntie, round fuller face, full curly dark-brown short hair with big swooping curls, black pixel sunglasses, gold hoop earrings, leopard-print long sleeves/top, black apron with one small pink heart, fuller body, confident practical attitude.",
  "NO CHARACTER DRIFT: no younger face, no thinner body, no different hairstyle, no straight hair, no tiny mascot version, no generic influencer, no different sunglasses, no different outfit, no missing leopard sleeves, no missing black apron, no simplified emoji-like face, and no chibi remake.",
  "REFERENCE POSE WARNING: the full-scene references contain phones, laptops, weather props, market props, and cooking props, but those are not mandatory. Do not copy any reference pose or prop cluster unless the article topic directly needs it. Use references for identity, rendering style, and cover-scene richness, not as reusable layouts.",
  "STYLE LOCK: polished 16:9 landscape editorial comic cover for the Auntie No Mad website, not a logo, poster, ad, infographic, mascot badge, icon sheet, simple sticker pack, flat vector collage, UI mockup, or children's clip art.",
  "REFERENCE DETAIL FLOOR: match the visual richness of the section scene reference: large foreground objects, dense table or room props, textured brown hair highlights, dimensional cheek shading, varied thick-to-thin black ink lines, cream paper warmth, layered props, halftone texture, hand-drawn imperfections, and clean white sticker-cut borders around major objects.",
  "NO FLAT TEMPLATE LOOK: avoid plain yellow walls with a few icons, repeated standing pose, auntie standing next to a laptop dashboard, copy-paste phone-in-hand pose, sparse warning-symbol layouts, big standalone exclamation signs, generic chart walls, sticker/icon wallpaper, overly flat vector shapes, generic stock illustration, and empty background space.",
  "Use the approved website look: bright yellow halftone background, thick expressive black ink outlines, clean white sticker-cut borders, hot-pink accent icons, cream paper tones, playful Taiwan editorial comic energy, rich scene detail, layered props, and polished hand-drawn cartoon rendering.",
  "COMPOSITION LOCK: the auntie is the first-read anchor but must interact with the story, not just stand beside icons. Use a medium shot or three-quarter scene with hands, face, apron heart, and story-critical props fully inside frame. Keep generous margins; do not crop the head, face, sunglasses, hands, apron heart, or key objects.",
  "STORY SCENE LOCK: every article image needs one continuous environment with a distinct mini-scene, foreground, midground, and background. Show the article topic through action, objects, environment, and expression. A few floating accent stickers are allowed, but the composition must not be a wall of icons. Use zero or one warning symbol; never use repeated warning triangles or warning marks as the main storytelling device.",
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
