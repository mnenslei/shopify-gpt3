import React from "react";
import styles from '../styles/Home.module.css'

const Instructions = () => {
    return(
        <div className={styles.instructions}>
            <div>
                <h2>Nice to meet you!</h2>
                <p>My name is <strong>Coco</strong> and I am an AI genie.</p>
                <p>Below you will find a text box. In this text box you may enter a prompt or ask me a question.</p>
                <p>{`For instance, you may ask me, what was the motif in Franz Kafka's,`} <em>Metamorphosis</em>?"</p>
                <p>{`Another example of what you may ask me is, how tall is Michael Jordan?`}</p>
                <p>Or ask me to write an essay about the best band in the world, Radiohead.</p>
            </div>
            <div>
                <h3>Go on, ask me something...</h3>
            </div>
        </div>
    )
}

export default Instructions;