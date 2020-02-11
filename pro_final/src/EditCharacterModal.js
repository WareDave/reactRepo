import React from 'react'
import { Form, Button, Header, Modal } from 'semantic-ui-react'

function EditCharacterModal(props) {
    console.log("props: ", props)
    return (
        <Modal open={props.open} 
        closeIcon onClose={props.closeModal}
        >
            <Header>Edit Character</Header>
            <Modal.Content>
                <Form
                    size='large'
                    onSubmit={props.updateBoard}
                >
                    <Form.Field>
                        <label>Class & Level</label>
                        <Form.Input
                            type="text"
                            name="classLevel"
                            value={props.CharacterToEdit.classLevel}
                            onChange={props.handleEditChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Background</label>
                        <Form.Input
                            type="text"
                            name="background"
                            value={props.CharacterToEdit.background}
                            onChange={props.handleEditChange}
                        />
                    </Form.Field>
                    <Form.Field>
                            <label>Image</label>
                            <Form.Input 
                                type="text"
                                name="image"
                                value={props.CharacterToEdit.image}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>Alighment</label>
                            <Form.Input 
                                type="text"
                                name="alighment"
                                value={props.CharacterToEdit.alighment}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>Experience</label>
                            <Form.Input 
                                type="text"
                                name="experience"
                                value={props.CharacterToEdit.experience}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>Strength</label>
                            <Form.Input 
                                type="text"
                                name="strength"
                                value={props.CharacterToEdit.strength}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>DEX</label>
                            <Form.Input 
                                type="text"
                                name="dex"
                                value={props.CharacterToEdit.dex}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>Constitution</label>
                            <Form.Input 
                                type="text"
                                name="const"
                                value={props.CharacterToEdit.const}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>Intelligence</label>
                            <Form.Input 
                                type="text"
                                name="intelligence"
                                value={props.CharacterToEdit.intelligence}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>Wisdom</label>
                            <Form.Input 
                                type="text"
                                name="wisdom"
                                value={props.CharacterToEdit.wisdom}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>Saving throws</label>
                            <Form.Input 
                                type="text"
                                name="saving"
                                value={props.CharacterToEdit.saving}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>Skills</label>
                            <Form.Input 
                                type="text"
                                name="skills"
                                value={props.CharacterToEdit.skills}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>Armor Class</label>
                            <Form.Input 
                                type="text"
                                name="armorclass"
                                value={props.CharacterToEdit.armorclass}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>Initiative</label>
                            <Form.Input 
                                type="text"
                                name="init"
                                value={props.CharacterToEdit.init}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>Speed</label>
                            <Form.Input 
                                type="text"
                                name="speed"
                                value={props.CharacterToEdit.speed}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>Current HP</label>
                            <Form.Input 
                                type="text"
                                name="currenthp"
                                value={props.CharacterToEdit.currenthp}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>Temp HP</label>
                            <Form.Input 
                                type="text"
                                name="temphp"
                                value={props.CharacterToEdit.temphp}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>Hit Dice</label>
                            <Form.Input 
                                type="text"
                                name="hdice"
                                value={props.CharacterToEdit.hdice}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>Death Saves</label>
                            <Form.Input 
                                type="text"
                                name="dsaves"
                                value={props.CharacterToEdit.dsaves}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>Attacks & Spells</label>
                            <Form.Input 
                                type="text"
                                name="atks_spells"
                                value={props.CharacterToEdit.atks_spells}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>Equipment</label>
                            <Form.Input 
                                type="text"
                                name="equipment"
                                value={props.CharacterToEdit.equipment}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>F & T</label>
                            <Form.Input 
                                type="text"
                                name="fandt"
                                value={props.CharacterToEdit.fandt}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    
                    <Button type="submit">Make It So</Button>
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default EditCharacterModal