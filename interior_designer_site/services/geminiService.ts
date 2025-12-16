
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const askInteriorConsultant = async (prompt: string, imageBase64?: string) => {
  const ai = getAI();
  const model = 'gemini-2.5-flash';

  const parts: any[] = [{ text: prompt }];
  
  if (imageBase64) {
    parts.push({
      inlineData: {
        mimeType: 'image/jpeg',
        data: imageBase64.split(',')[1] || imageBase64
      }
    });
  }

  const response = await ai.models.generateContent({
    model,
    contents: { parts },
    config: {
      systemInstruction: "You are an elite interior design consultant for Poliform, a world-class luxury contemporary furniture brand. Your tone is sophisticated, knowledgeable, and helpful. Provide design advice, color palette suggestions, and material recommendations. Keep responses concise but inspiring.",
    },
  });

  return response.text;
};

export const generateStylePalette = async (styleName: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: `Provide a color palette and material list for the interior style: ${styleName}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          colors: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                hex: { type: Type.STRING }
              }
            }
          },
          materials: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          summary: { type: Type.STRING }
        }
      }
    }
  });

  return JSON.parse(response.text || '{}');
};
