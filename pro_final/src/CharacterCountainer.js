import React, { Component } from 'react'
import CreateCharacter from './CreateCharacterForm'
import CharacterList from './CharacterList'
import EditCharacterModal from './EditCharacterModal'
import { Grid, Button } from 'semantic-ui-react'
// import MessageContainer from '../MessageContainer'

class CharacterContainer extends Component {

    state = {
        characters: [],
        createModalOpen: false,
        editModalOpen: false,
        characterToEdit: {
            loggedUser: '',
            id: '',
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

    createCharacter = () => {
        this.setState({
            createModalOpen: true
        })
    }

    addCharacter = async (e, characterFromTheForm) => {
        e.preventDefault();

        try {
            console.log(characterFromTheForm)
            const createdCharacterResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/characters/`, {
                method: 'POST',
                body: JSON.stringify(characterFromTheForm),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            const parsedResponse = await createdCharacterResponse.json()

            this.setState({
                characters: [...this.state.characters, parsedResponse.data]
            })

            this.closeCreateModal()
        } catch (err) {
            console.log('error: ', err)
        }
    }

    closeCreateModal = () => {
        this.setState({
            createModalOpen: false
        }, 
    )}

    componentDidMount() {
        this.getCharacters()
    }

    getCharacters = async () => {
        try {
            const characters = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/characters/`, { credentials: 'include' })
            const parsedCharacters = await characters.json()

            this.setState({
                characters: parsedCharacters.data
            })
        } catch (err) {
            console.log(err);
        }
    } 
    
    editCharacter = (idOfCharacterEdit) => {
        const characterToEdit = this.state.characters.find(character => character.id === idOfCharacterEdit)

        this.setState({
            editModalOpen: true,
            characterToEdit: {
                ...characterToEdit
            }
        })
    }

    handleEditChange = (e) => {
        this.setState({
            characterToEdit: {
                ...this.state.characterToEdit,
                [e.target.name]: e.target.value
            }
        })
    }

    updateCharacter = async (e) => {
        e.preventDefault()

        try {
            const updateResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/characters/${this.state.characterToEdit.id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state.characterToEdit),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })

            const updateResponseParsed = await updateResponse.json()

            const newCharacterArrayWithUpdate = this.state.characters.map((Character) => {
                if (Character.id === updateResponseParsed.data.id) {
                    Character = updateResponseParsed.data
                }
                return character 
            })

            this.setState({
                characters: newCharacterArrayWithUpdate
            })

            this.closeEditModal()

        } catch (err) {
            console.error(err)
        }
    } 

    closeEditModal = () => {
        this.setState({
            editModalOpen: false
        })
    }

    deleteCharacter = async (id) => {
        const deleteCharacterResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/characters/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        })

        const deleteCharacterParsed = await deleteCharacterResponse.json()

        this.setState({
            characters: this.state.characters.filter((character) => Character.id !== id)
        })
    }

    render() {
        const { loggedIn } = this.props

        return (
            <div>
                { loggedIn ?
                    <Grid 
                        textAlign='center'
                        style={{ marginTop: '7em', height: '100%' }}
                    >
                        <Grid.Row>
                            <Button onClick={this.createCharacter}>Create New Character</Button>
                        </Grid.Row>
                            <Grid.Row>
                                <CharacterList
                                    Characters={this.state.characters}
                                    deleteCharacter={this.deleteCharacter}
                                    editCharacter={this.editCharacter}
                                />
                            </Grid.Row>
                            <CreateCharacter 
                                open={this.state.createModalOpen}
                                closeModal={this.closeCreateModal}
                                addCharacter={this.addCharacter}
                            />
                            <EditCharacterModal 
                                open={this.state.editModalOpen}
                                updateCharacter={this.updateCharacter}
                                characterToEdit={this.state.characterToEdit}
                                closeModal={this.closeEditModal}
                                handleEditChange={this.handleEditChange}
                            />
                    </Grid>
                :
                <Grid 
                    textAlign='center'
                    style={{ marginTop: '7em', height: '100%' }}
                    verticalAlign='top'
                    
                >
                    FUCK! You'r not loggedIn you can not make a Character.
                </Grid>
                }
            </div>
        )
    }
}

export default CharacterContainer;