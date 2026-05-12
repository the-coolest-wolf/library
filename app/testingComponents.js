import Book from '../components/Book'
import { View } from 'react-native'

export default function test(){
    const data1 = {
        title: 'Ato',
        description: 'This is a visual novel from the game Arknights',
        cover: 'https://webusstatic.yo-star.com/arknights-us/ark-us-ato-h5/main/arkusatoh5/assets/bg-182d754c.jpg',
        tags: 'Fantasy'
    }
    const data2 = {
        title: 'Ato',
        description: 'This is a visual novel from the game Arknights',
        cover: 'https://webusstatic.yo-star.com/arknights-us/ark-us-ato-h5/main/arkusatoh5/assets/bg-182d754c.jpg',
        tags: 'Fantasy'
    }

    return (
        <View >
            <Book info={{params: data1}}/>
            <Book info={{params: data2}}/>
        </View>
    )
}