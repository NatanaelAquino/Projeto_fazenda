import React, { useState } from "react";
import { API_KEY } from "@env";
import useLocation from "./useLocation"; 
import { Alert } from "react-native";

const UseChat = () => {
  const [responseText, setResponseText] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location, errorMsg } = useLocation();

  const callChatGPT = async (solo, plantacao) => {
    setLoading(true);
    setError(null);
  
    console.log("Localização atual: ", location); // Imprimindo a localização no console
  
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: `Me ajude a determinar o melhor horário de irrigação para a plantação de ${plantacao} em solo ${solo} com as coordenadas de localização ${JSON.stringify(
                  location
                )} me fale primeira a cidade que estou .`,
              },
            ],
            max_tokens: 100,
          }),
        }
      );
  
      const data = await response.json();
      setResponseText(data.choices[0].message.content);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  


  return { responseText, loading, error, callChatGPT };
};

export default UseChat;
