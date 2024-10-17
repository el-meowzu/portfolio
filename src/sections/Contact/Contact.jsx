import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h2 className='sectionTitle'>Contact</h2>
        <form action="https://formspree.io/f/xwpkkyne" method="post">
            <div className='formGroup'>
                <label htmlFor="name" ></label>
                <input 
                    type="text" 
                    name='name' 
                    id='name' 
                    placeholder='Name' 
                    required 
                />
            </div>
            <div className='formGroup'>
                <label htmlFor="email" ></label>
                <input 
                    type="email" 
                    name='email' 
                    id='email' 
                    placeholder='Email' 
                    required 
                />
            </div>
            <div className='formGroup'>
                <label htmlFor="message" ></label>
                <textarea
                    name='message' 
                    id='message' 
                    placeholder='Message' 
                    required> 
                </textarea> 
            </div>
            <input type="submit" className='hover btn' value="Submit" />
        </form>
    </section>
  )
}

export default Contact