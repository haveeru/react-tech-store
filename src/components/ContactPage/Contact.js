import React from 'react';
import Title from '../../components/Title';

const Contact = () => {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact us"/>
                    <form className="mt-5">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="firstName" 
                                placeholder="john smith" 
                                className="form-control" 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="email@email.com" 
                                className="form-control" 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="subject" 
                                placeholder="important!!!!" 
                                className="form-control" 
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="message" 
                                className="form-control" 
                                rows="10" 
                            >
                                Hello there buddy
                            </textarea>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;