import React, {Component} from 'react'
import {
    Container, 
    Form, 
    Text, 
    FormButton, 
    FormContent, 
    FormH1, 
    FormInput, 
    FormLable, 
    ForWrap, 
    Icon
} from './BokaTidElements'

import axios from 'axios'

export default class Bokatid extends Component {
    state = {
        name: '',
        lastname: '',
        email: '',
        message: '',
        sent: false
    }

    // input handler
    handleName=(e)=>{
        this.setState({
            name: e.target.value
        })
    }
    handleLastname = (e) => {
        this.setState({
            lastname: e.target.value
        })
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    formSubmit=(e)=>{
        e.prevenDefault();
        let data = {
            name:this.state.name,
            lastname:this.state.lastname,
            email:this.state.email,
            message:this.state.message
        }
        axios.post('/api/forma', data)
        .then(res=>{
            this.setState({
                sent:true,
            }, this.resetForm())
        }).catch(()=>{
            console.log('message not sent');
        })

    }

    // for reseting initial data
    resetForm =()=>{
        this.setState({
            name: '',
            lastname: '',
            email: '',
            message: ''
        })
        setTimeout(() => {
        this.setState({
            sent:false,
        })
        
    }, 3000)
    }


    render(){
        return (
            <>
                <Container>
                    <ForWrap>
                        <Icon to="/">Alligration</Icon>
                        <FormContent>
                            <Form onSubmit={this.formSubmit}>
                                <FormH1>Boka tid genom att fylla i nedan!</FormH1>

                                <FormLable htmlFor="name">Namn</FormLable>
                                <FormInput 
                                type="text" 
                                name="name" 
                                className="name" 
                                placeholder="Ditt namn" 
                                value={this.state.name}
                                onChange={this.handleName}
                                required />

                                <FormLable htmlFor="lastname">Efternamn</FormLable>
                                <FormInput 
                                type="text" 
                                name="lastname" 
                                className="lastname" 
                                placeholder="Ditt efternamn" 
                                value={this.state.lastname}
                                onChange={this.handleLastname}
                                required />

                                <FormLable htmlFor="email">E-postadress</FormLable>
                                <FormInput 
                                type="email" 
                                name="email" 
                                className="email" 
                                placeholder="Ditt e-postadress" 
                                value={this.state.email}
                                onChange={this.handleEmail}
                                required />

                                <FormLable htmlFor="message"> Meddelande </FormLable>
                                <textarea 
                                name="message" 
                                id="message" 
                                cols="30" 
                                rows="5" 
                                placeholder="skriv önskad datum och tid"
                                value={this.state.message}
                                onChange={this.handleMessage}
                                ></textarea>

                                <Text className={this.state.sent ? 'msg msgAppear': 'msg'}> Meddelandet har skickats!</Text>
                                <FormButton className="btn" type="submit"> Skicka </FormButton>

                            </Form>

                        </FormContent>
                    </ForWrap>

                </Container>

            </>
        )

    }
    
}
