import axios from 'axios';
import { useEffect, useState } from 'react';
import OpenAI from 'openai-api';

const initialValues = {
    prompt: ''
}

const Main =  () => {
    const [apiKey, setApiKey] = useState('')
    const [formValues, setFormValues] = useState(initialValues)
    const [generated, setGenerated] = useState([])

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e, req, res) => {
        e.preventDefault();
        const openai = new OpenAI(apiKey);
        const gptResponse = await openai.complete({
              engine: 'text-curie-001',
              prompt: formValues.prompt,
              maxTokens: 50,
              temperature: 0.7,
              topP: 1,
              presencePenalty: 0,
              frequencyPenalty: 0.5,
              bestOf: 1,
              n: 1
          });
          console.log(gptResponse.data.choices[0].text)
            setGenerated([{
                prompt: formValues.prompt,
                response: gptResponse.data.choices[0].text
            } ,...generated])
          }
          

    useEffect(() => {
        axios.get('/api/apikey')
        .then(res => {
            setApiKey(res.data.apikey)
        })
        .catch(() => {
            console.log('error')
        })
    }, [])

    return(

        <div>
            Main
            <form onSubmit={handleSubmit}>
            <input 
                    type="text"
                    name="prompt"
                    placeholder="Enter Prompt"
                    value={formValues.prompt}
                    onChange={handleChange}
                />
            <button >Submit</button>
            </form>

        <section>
            {generated.map((res, index) => (
                <article key={index}>
                    <h2>{res.prompt.toUpperCase()}</h2>
                    <p>{res.response}</p>
                </article>
            ))}
        </section>

        </div>
    )
}

export default Main;