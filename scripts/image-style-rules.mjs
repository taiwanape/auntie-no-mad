export const IMAGE_STYLE_RULE_VERSION = "auntie-style-v5";

export const AUNTIE_STYLE_RULES = [
  "STYLE LOCK: polished 16:9 landscape editorial comic illustration for the Auntie No Mad website, not a logo, poster, ad, infographic, mascot badge, icon sheet, or flat vector collage.",
  "Use the approved website look: bright yellow halftone background, thick black ink outlines, clean white sticker-cut borders around major objects, hot-pink accent icons, cream paper tones, playful Taiwan sticker/comic energy, rich scene detail, and polished cartoon rendering.",
  "The auntie is the anchor of every image and must be large at first read: middle-aged Taiwanese auntie, round fuller face, full curly dark-brown short hair with big swooping curls, black pixel sunglasses, gold hoop earrings, leopard-print long sleeves/top, black apron with one small pink heart, fuller body, confident practical attitude.",
  "Do not change the auntie's identity: no younger face, no thinner body, no different hairstyle, no straight hair, no tiny mascot version, no generic influencer, no different sunglasses, no different outfit, no missing leopard sleeves, no missing black apron.",
  "Keep the auntie and key props fully inside the frame. Do not crop the head, face, sunglasses, hands, apron heart, or story-critical objects. Avoid giant title text areas and empty logo-like layouts.",
  "Show the article topic through objects, scene, and action: phones, blank message bubbles, household props, commute props, weather props, market-desk props, warning icons, abstract charts, blank cards, and expressive auntie reactions.",
  "ABSOLUTE TEXT BAN: no visible writing anywhere. No Chinese characters, English letters, numbers, stock tickers, company names, brand title, logo, watermark, signage, captions, labels, speech-bubble words, readable or fake text on papers, screens, phones, signs, badges, charts, cards, stickers, map pins, receipts, or notebooks.",
  "Also avoid currency symbols, dollar signs, percent signs, punctuation-as-text, QR-code-like blocks, and readable warning labels. Use blank icons, shapes, arrows, colored dots, pictograms, empty check circles, abstract charts, and blank panels instead.",
  "The image must feel like a finished website article cover: warm, funny, slightly dramatic, practical, Taiwan everyday-life editorial storytelling. It should not feel like a rough meme, corporate slide, children's clip art, dark noir crime poster, or random stock illustration."
];

export function auntieStylePrompt(extraRules = []) {
  return [...AUNTIE_STYLE_RULES, ...extraRules].filter(Boolean).join(" ");
}

export function imageStyleMetadata() {
  return {
    version: IMAGE_STYLE_RULE_VERSION,
    requiredRules: AUNTIE_STYLE_RULES.length
  };
}
