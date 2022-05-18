import React from "react";
import styles from '../styles/Home.module.css'

const Instructions = () => {
    return(
        <div className={styles.instructions}>
            <div>
                <h2>Nice to meet you 👋</h2>
                <p>My name is <strong>Coco</strong> and I am an AI genie.</p>
                <p>In this text box below you may enter a prompt or ask me a question.</p>
                <p>{`For instance, you may ask, "what was the motif in Franz Kafka's,`} <em>Metamorphosis</em>{`?"`}</p>
                <p>If you are looking to become an online merchant, ask me how to start a shop on Shopify.</p>
                <p>I can even write you an essay about Radiohead.</p>
                <h3>Go ahead, give it a try!</h3>
            </div>
        </div>
    )
}

export default Instructions;