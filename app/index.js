
import { View, Text } from "react-native";
//import styles from "./styles";
import LinkButton from "../components/ButtonsLinked";
import ButtonsLinked from "../components/ButtonsLinked";

export default function App() {

    return (
        <View>
            <Text>TESTING 123</Text>
            <ButtonsLinked
                href="/" // Navigates to main index page
                title="Back to Home"
                imageUrl="https://raw.githubusercontent.com/tiago1820/pokemon-pi/main/client/src/images/icons/home.png?raw=true"
                style={{ alignItems: 'left' }}
            />
            
        </View>



    );
}