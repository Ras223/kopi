import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Header} from 'react-native/Libraries/NewAppScreen';
import HeaderBar from '../components/HeaderBar';

export default function Profile1() {
  const [name, setName] = useState('Rizky Aulia');
  const [phoneNumber, setPhoneNumber] = useState('08123456789');

  return (
    <View testID="profile" style={styles.container}>
      <HeaderBar title="Profile" />
      <View style={styles.content}>
        <View style={styles.photoContainer}>
          <Image
            source={{
              uri: 'https://xsgames.co/randomusers/avatar.php?g=female',
            }}
            style={styles.photo}
          />
        </View>
        <View style={styles.textContainer}>
          <View style={{flexDirection: 'row', paddingBottom: 10}}>
            <Text style={styles.boxLabel}>Name</Text>
            <View style={styles.box}>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.boxLabel}>Phone Number</Text>
            <View style={styles.box}>
              <TextInput
                style={styles.input}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0C0F14',
    flex: 1,
  },
  header: {
    paddingTop: 50,
    backgroundColor: '#f8f8f8',
    paddingLeft: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoContainer: {
    marginTop: -50,
    marginBottom: 50,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textContainer: {
    alignItems: 'center',
  },
  box: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    padding: 10,
  },
  boxLabel: {
    color: 'white',
    fontSize: 14,
    paddingRight: 10,
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    color: 'white',
    fontSize: 16,
  },
});
