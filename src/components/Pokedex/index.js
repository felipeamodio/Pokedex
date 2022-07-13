import {View, Text} from 'react-native';
import {
    Container, 
    PokeNames,
    PokeView
} from './styles';

export default function Pokedex({data}){
    return(
        <Container>
            <PokeView>
                <PokeNames>{data.name}</PokeNames>
            </PokeView>
        </Container>
    )
}