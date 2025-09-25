import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const Spinner: React.FC = () => (
    <div role="status" aria-live="polite">
        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-slate-900"></div>
        <span className="sr-only">Carregando...</span>
    </div>
);

export const ImagePrompt: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleGenerateImage = async () => {
    if (!prompt.trim()) {
      setError('Por favor, insira uma descrição para a imagem.');
      return;
    }
    setLoading(true);
    setError('');
    setImageUrl('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: prompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: '1:1',
        },
      });

      const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
      const generatedImageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;
      setImageUrl(generatedImageUrl);
    } catch (err) {
      console.error(err);
      setError('Ocorreu um erro ao gerar a imagem. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="image-prompt" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Gere Imagens com um Simples Comando</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Descreva a imagem que você quer criar e deixe nossa IA fazer o resto.</p>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ex: Um astronauta surfando em uma onda cósmica, em um estilo de arte digital detalhado"
              className="w-full bg-slate-800 border-2 border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all resize-none"
              rows={3}
              disabled={loading}
              aria-label="Descrição da imagem"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleGenerateImage();
                }
              }}
            />
          </div>
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleGenerateImage}
              disabled={loading}
              className="px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 disabled:bg-slate-600 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center min-w-[160px] h-[48px]"
            >
              {loading ? <Spinner /> : 'Gerar Imagem'}
            </button>
          </div>
          {error && <p className="text-red-400 text-center mt-4" role="alert">{error}</p>}
        </div>

        <div className="mt-12 flex justify-center">
            {imageUrl && (
                <div className="bg-slate-800 p-4 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 w-full max-w-lg animate-fade-in">
                    <h3 className="text-xl font-bold text-white mb-4 text-center">Sua Imagem Gerada:</h3>
                    <img
                        src={imageUrl}
                        alt={prompt}
                        className="rounded-lg shadow-md w-full aspect-square object-cover"
                    />
                </div>
            )}
        </div>
      </div>
    </section>
  );
};
