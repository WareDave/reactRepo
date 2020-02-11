import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'

function CharacterList(props) {

    const { characters } = props

    const CharacterList = characters.map((character) => {

        return (

            <Card key={character.id}>
                <Image src={character.image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header><i className="material-icons">Realm</i> {character.realm}</Card.Header><br/>
                    <Card.Header><i className="material-icons">info</i> {character.name}</Card.Header><br/>
                    <Card.Description><i className="material-icons">message</i> {character.classLevel}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.background}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.race}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.alighment}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.exp}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.strength}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.dex}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.const}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.intelligence}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.wisdom}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.charisma}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.inspiration}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.saving}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.skills}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.passive}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.armorclass}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.init}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.speed}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.currenthp}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.temphp}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.hdice}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.dsves}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.atks_spells}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.equipment}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i> {character.fandt}</Card.Description><br/>
                    <Card.Description><i className="material-icons">person</i> {character.loggedUser.username}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button onClick={() => props.deleteCharacter(character.id)}>Kill Character
                    </Button>
                    <Button onClick={() => props.editCharacter(character.id)}>Edit Character Sheet
                    </Button>
                </Card.Content>
            </Card>
        )
    })

    return (
        <Card.Group centered>
            { CharacterList }
        </Card.Group>
    )
}

export default CharacterList