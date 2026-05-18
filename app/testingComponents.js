import Book from '../components/Book'
import { View } from 'react-native'

export default function test(){
    const data1 = {
        cover: 'https://webusstatic.yo-star.com/arknights-us/ark-us-ato-h5/main/arkusatoh5/assets/bg-182d754c.jpg',
        title: 'Ato',
        authors: 'Hypergryph, YOSTAR',
        tags: 'Fantasy',
        description: 'This is a visual novel from the game Arknights',
    }
    const data2 = {
        cover: 'https://webusstatic.yo-star.com/arknights-us/ark-us-ato-h5/main/arkusatoh5/assets/bg-182d754c.jpg',
        title: 'Ato',
        authors: 'Hypergryph, YOSTAR',
        tags: 'Fantasy',
        description: 'This is a visual novel from the game Arknights',
    }

    return (
        <View >
            <Book info={{params: data1}}/>
            <Book info={{params: data2}}/>
        </View>
    )
}