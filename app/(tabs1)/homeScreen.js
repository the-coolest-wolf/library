import React from 'react';
import {  StyleSheet,  Text,  ScrollView,  StatusBar,  Image,  TouchableOpacity} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { avalue } from '../settingsScreen';

const ScrollViews = () => (
<ScrollView>
<Link href="../publicScreen">Public Profile</Link>

<SafeAreaView style={styles.container}>
  <Link style={styles.linkStyle2} href="../settingsScreen">
    Settings
  </Link>
</SafeAreaView>

{/* <LinkButton style={styles.linkButtonTesting} page="" title="Public Profile"/> */ }

    <SafeAreaView>
      <Image
        style={styles.book}
        source={require('../../assets/WIntoTheWild.jpg')}
      />
      <Text style={styles.texts}>Currently Reading</Text>
      <Text style={styles.linkStyle3}>lorem ipsum</Text>
    </SafeAreaView>

    <SafeAreaView>
      <Image
        style={styles.book}
        source={require('../../assets/riyriaRevo1.jpg')}
      />
      <Text style={styles.texts}>Your Favorite Book</Text>
      <Text style={styles.linkStyle3}>lorem ipsum</Text>
    </SafeAreaView>

    <SafeAreaView>
      <Image
        style={styles.book}
        source={require('../../assets/windAndTruth.avif')}
      />
      <Text style={styles.texts}>Current Top Book Worldwide</Text>
      <Text style={styles.linkStyle3}>lorem ipsum</Text>
    </SafeAreaView>

    <SafeAreaView>
      <Image
        style={styles.book}
        source={require('../../assets/Zen_motorcycle.jpg')}
      />
      <Text style={styles.texts}>Recommendation For New Readers</Text>
      <Text style={styles.linkStyle3}>lorem ipsum</Text>
    </SafeAreaView>

    <SafeAreaView>
      <Image
        style={styles.book}
        source={require('../../assets/superPowereds1.jpg')}
      />
      <Text style={styles.texts}>Rising Star</Text>
      <Text style={styles.linkStyle3}>lorem ipsum</Text>
    </SafeAreaView>

    <SafeAreaView>
      <Image
        style={styles.authorStyle}
        source={require('../../assets/author2.webp')}
      />
      <Text style={styles.texts}>Your Favorite Author</Text>
      <Text style={styles.linkStyle3}>lorem ipsum</Text>
    </SafeAreaView>

    <SafeAreaView>
      <Image style={styles.book} source={require('../../assets/WOF1.jpg')} />
      <Text style={styles.texts}>Current Top Book Worldwide</Text>
      <Text style={styles.linkStyle3}>Edit</Text>
    </SafeAreaView>

    <SafeAreaView>
      <Image
        style={styles.book}
        source={require('../../assets/shadowOverAetheria.jpg')}
      />
      <Text style={styles.texts}>Rising Star</Text>
      <Text style={styles.linkStyle3}>Edit</Text>
    </SafeAreaView>
  </ScrollView >
);

export default ScrollViews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  awesomeScrollyView: { backgroundColor: avalue },
  linkStyle1: {
    fontSize: 20,
  },
  linkStyle2: {
    fontSize: 20,
    position: 'absolute',
    top: -15,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  book: {
    height: 500,
    width: 279.5,
    marginTop: 40,
    marginLeft: 40,
    borderColor: 'black',
    borderWidth: 5,
    marginBottom: -75,
  },
  texts: {
    top: -230,
    /* fontWeight expects a string like 'bold' or a number 100-900; keep as number only if supported */
    fontWeight: '100',
    alignSelf: 'flex-end',
    marginRight: 40,
    fontSize: 50,
  },
  linkStyle3: {
    top: -300,
    marginLeft: 100,
    alignSelf: 'flex-end',
  },
  authorStyle: {
    height: 270,
    width: 270,
    marginLeft: 40,
    marginTop: 75,
  },
});