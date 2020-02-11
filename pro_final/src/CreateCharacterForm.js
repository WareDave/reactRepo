import React, { Component } from 'react'
import { Form, Button, Header, Modal } from 'semantic-ui-react'

class CreateCharacter extends Component {
    constructor(){
        super();

        this.state = {
            realm: '',
            name: '',
            classLevel: '',
            background: '',
            race: '',
            alighment: '',
            exp: '',
            strength: '',
            dex: '',
            const: '',
            intelligence: '',
            wisdom: '',
            charisma: '',
            inspiration: '',
            saving: '',
            skills: '',
            passive: '',
            armorclass: '',
            init: '',
            speed: '',
            currenthp: '',
            temphp: '',
            hdice: '',
            dsaves: '',
            atks_spells: '',
            equipment: '',
            fandt: ''   
        }
    }

    handleChange = (e) => {
        this.setState({
          [e.currentTarget.name]: e.currentTarget.value
        })
    }

    clearForm = () => {
        this.setState({
            name: '',
            classLevel: '',
            background: '',
            race: '',
            alighment: '',
            exp: '',
            strength: '',
            dex: '',
            const: '',
            intelligence: '',
            wisdom: '',
            charisma: '',
            inspiration: '',
            saving: '',
            skills: '',
            passive: '',
            armorclass: '',
            init: '',
            speed: '',
            currenthp: '',
            temphp: '',
            hdice: '',
            dsaves: '',
            atks_spells: '',
            equipment: '',
            fandt: ''   
        })
    }

    render() {
        return(
            <Modal open={this.props.open} closeIcon onClose={this.props.closeModal}>
                <Header>Create Character</Header>
                <Modal.Content>
                    <Form 
                        size='large'
                        onSubmit={(e) => this.props.addCharacter(e, this.state)}
                    >
                        <Form.Field>
                            <label>Name</label>
                            <Form.Input
                                type="text"
                                name="name"
                                fluid icon="font"
                                iconPosition="left"
                                value={this.state.name}
                                onChange={this.handleChange}
                                />
                        </Form.Field>
                        <Form.Field>
                            <label>Class & Level</label>
                            <Form.Input 
                                type="text"
                                name="classLevel"
                                // fluid icon="file text"
                                // iconPosition="left"
                                value={this.state.body}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        {/* <Form.Field>
                            <label>Image</label>
                            <Form.Input 
                                type="text"
                                fluid icon="picture"
                                iconPosition="left"
                                name="image"
                                value={this.state.image}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field> */}
                        <Form.Field>
                            <label>Background</label>
                            <Form.Input 
                                type="text"
                                name="background"
                                value={this.state.background}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Race</label>
                            <Form.Input 
                                type="text"
                                name="race"
                                value={this.state.race}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Alighment</label>
                            <Form.Input 
                                type="text"
                                name="alighment"
                                value={this.state.alighment}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Exp:</label>
                            <Form.Input 
                                type="text"
                                name="exp"
                                value={this.state.exp}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Strength:</label>
                            <Form.Input 
                                type="text"
                                name="strength"
                                value={this.state.strength}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Dex:</label>
                            <Form.Input 
                                type="text"
                                name="dex"
                                value={this.state.dex}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Const:</label>
                            <Form.Input 
                                type="const"
                                name="exp"
                                value={this.state.const}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Intelligence:</label>
                            <Form.Input 
                                type="text"
                                name="intelligence"
                                value={this.state.intelligence}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Wisdom:</label>
                            <Form.Input 
                                type="text"
                                name="Wisdom"
                                value={this.state.wisdom}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Charisma:</label>
                            <Form.Input 
                                type="text"
                                name="charisma"
                                value={this.state.charisma}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Inspiration</label>
                            <Form.Input 
                                type="text"
                                name="Inspiration"
                                value={this.state.inspiration}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Saving</label>
                            <Form.Input 
                                type="text"
                                name="saving"
                                value={this.state.saving}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>SKills</label>
                            <Form.Input 
                                type="text"
                                name="skills"
                                value={this.state.skills}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Passive</label>
                            <Form.Input 
                                type="text"
                                name="passive"
                                value={this.state.passive}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Armor Class</label>
                            <Form.Input 
                                type="text"
                                name="armorclass"
                                value={this.state.armorclass}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Init</label>
                            <Form.Input 
                                type="text"
                                name="init"
                                value={this.state.init}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Speed</label>
                            <Form.Input 
                                type="text"
                                name="speed"
                                value={this.state.speed}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Current HP</label>
                            <Form.Input 
                                type="text"
                                name="init"
                                value={this.state.init}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Death Saves</label>
                            <Form.Input 
                                type="text"
                                name="dsaves"
                                value={this.state.dsaves}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Attacks & Spells</label>
                            <Form.Input 
                                type="text"
                                name="atks_spells"
                                value={this.state.atks_spells}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Equipment</label>
                            <Form.Input 
                                type="text"
                                name="Equipment"
                                value={this.state.equipment}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>F & T</label>
                            <Form.Input 
                                type="text"
                                name="fandt"
                                value={this.state.fandt}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        

                        <Button type='submit'>Submit</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
} 

export default CreateCharacter;