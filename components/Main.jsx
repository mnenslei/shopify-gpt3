import axios from 'axios';
import { useEffect, useState } from 'react';
import OpenAI from 'openai-api';
import styles from '../styles/Home.module.css'

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
              maxTokens: 180,
              temperature: 0.7,
              topP: 1,
              presencePenalty: 0,
              frequencyPenalty: 0.5,
              bestOf: 1,
              n: 1
          });
            setGenerated([{
                prompt: formValues.prompt,
                response: gptResponse.data.choices[0].text
            } ,...generated])
          }
          
        const handleRefresh = (e) => {
            e.preventDefault();
            setGenerated([{
                prompt: '',
                response: ''
            }])
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
            <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                <div className={styles.formspacing}>
                <input 
                        className={styles.input}
                        type="text"
                        name="prompt"
                        placeholder="Enter Prompt"
                        value={formValues.prompt}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.buttonspacing}>
                <button className={styles.formbutton}>Submit</button>
                <button onClick={handleRefresh} className={styles.refreshformbutton}>Refresh</button>
                </div>
                </form>
            </div>

        <section className={styles.response}>
            {generated.map((res, index) => (
                <article key={index}>
                    <h4>{res.prompt.toUpperCase()}</h4>
                    <p>{res.response}</p>
                </article>
            ))}
        </section>

        </div>
    )
}

export default Main;