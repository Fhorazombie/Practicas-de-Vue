import axios from 'axios';
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

async function conectarOpenAI(mensaje) {

  const {data} = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'Eres un asistente que ayuda a los usuarios a encontrar información Death Stranding 2. Responde de manera clara y concisa, proporcionando información relevante y útil.'
      },
      {
        role: 'user',
        content: '¿Cuáles son los niveles?'
      }, 
      {
        role: 'assistant',
        content: 'los niveles son...'
      }, 
      {
        role: 'user',
        content: mensaje
      }
    ]  }, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
        }
    });

    return data.choices[0].message.content;
}

export default conectarOpenAI;