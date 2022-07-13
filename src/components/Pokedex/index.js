import {
    Container, 
    PokeNames,
    PokeView,
    Button
} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function Pokedex({data}){
    const navigation = useNavigation();

    return(
        <Container>
            <PokeView>
                <Button activeOpacity={0.7} onPress={() => navigation.navigate('Detail')}>
                    <PokeNames>{data.name}</PokeNames>
                </Button>
            </PokeView>
        </Container>
    )
}