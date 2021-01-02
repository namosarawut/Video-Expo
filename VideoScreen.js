import React from 'react'
import { Video } from 'expo-av';
import { View ,SafeAreaView,ScrollView,Image} from 'react-native'
import { Header, Left, Body, Right, Title,  Card, CardItem, Thumbnail, Text, Button, Icon, } from 'native-base';


export default function HomeScreen() {
    return (
      <SafeAreaView style={{backgroundColor:'#FFEBEE'}}>
         <Header style={{backgroundColor:'#F44336'}}>
          <Left/>
          <Body>
            <Title>Vdieo</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
     <View
     style={{height:30}}
     />
      

       <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Card>
            <CardItem >
              <Left>
                <Thumbnail source={require('./assets/profile.jpg')} />
                <Body>
                  <Text>Namo Sarawut</Text>
                  <Text note>ไม่ใช่เวลาของเรา - นนท์ ธนนท์ cover namo</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
            <Video
            source={require('./assets/video/av1.mp4')}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay= {false}
            isLooping = {false}
            useNativeControls
            style={{ width: 160*2, height: 90*2 }}
         />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              
              
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        {/* ************************************************************************************************************************************************************************************************************* */}
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('./assets/profile.jpg')}  />
                <Body>
                  <Text>Namo Sarawut</Text>
                  <Text note>NAMO - ก่อนเช้า ( Official Lyrics Video )</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
            <Video
            source={require('./assets/video/av2.mp4')}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay= {false}
            isLooping = {false}
            useNativeControls
            style={{ width: 160*2, height: 90*2 }}
         />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
             
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>

{/* ************************************************************************************************************************************************************************************************************* */}
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('./assets/profile.jpg')}  />
                <Body>
                  <Text>Namo Sarawut</Text>
                  <Text note>Namo - ถึงแม้ว่า (lyrics)</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
            <Video
            source={require('./assets/video/av3.mp4')}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay= {false}
            isLooping = {false}
            useNativeControls
            style={{ width: 160*2, height: 90*2 }}
         />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
             
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
{/* ************************************************************************************************************************************************************************************************************* */}

          <Card>
            <CardItem>
              <Left>
                <Thumbnail  source={require('./assets/profile.jpg')}  />
                <Body>
                  <Text>Namo Sarawut</Text>
                  <Text note>ขอโทษที่ดูแลเธอไม่ไหว Namo I Demo</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
            <Video
            source={require('./assets/video/av4.mp4')}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay= {false}
            isLooping = {false}
            useNativeControls
            style={{ width: 160*2, height: 90*2 }}
         />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              
            
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>

{/* ************************************************************************************************************************************************************************************************************* */}

          <Card>
            <CardItem>
              <Left>
                <Thumbnail  source={require('./assets/profile.jpg')}  />
                <Body>
                  <Text>Namo Sarawut</Text>
                  <Text note>NAMO ดึงเธอกลับมาได้ไหม 【OFFICIAL AUDIO】</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
            <Video
            source={require('./assets/video/av5.mp4')}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay= {false}
            isLooping = {false}
            useNativeControls
            style={{ width: 160*2, height: 90*2 }}
         />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
             
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
