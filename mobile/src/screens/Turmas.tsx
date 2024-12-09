import { StyleSheet, Text, View, PixelRatio } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export default function Trumas() {
  return (

    <SafeAreaView style={{flex:1, backgroundColor:'#E6EAEB', paddingHorizontal:30}}>
      
      <View>
        <Text style={styles.title}>Turma atual</Text>

        <View style={{paddingBottom: PixelRatio.getFontScale()* 10}}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome da turma</Text>
            <View style={styles.inputBox}/>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Idioma</Text>
            <View style={styles.inputBox}/>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Proeficiência</Text>
            <View style={[styles.inputBox, {}]}/>
          </View>
        </View>
        
        <TouchableOpacity onPress={() => console.log("Ementa")} style={[styles.downloadBox, {alignSelf:'center'}]}>
          <Text style={[styles.labelDownload]}>Ementa</Text>
          <Feather name={'download-cloud'} color={'#374957'} size={PixelRatio.getFontScale()* 30} />
        </TouchableOpacity>
      </View>

      <View style={styles.linhaHorizontal}/>

      <View>
        <Text style={[styles.title]}>Histórico de turmas</Text>

        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome</Text>
            <View style={styles.inputBox}/>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Idioma</Text>
            <View style={styles.inputBox}/>
          </View>
        </View>

        <View style={{flexDirection:'row'}}>
          <View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Semestre</Text>
              <View style={styles.inputBoxMini}/>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nível</Text>
              <View style={styles.inputBoxMini}/>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nota final</Text>
              <View style={styles.inputBoxMini}/>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Proeficiência</Text>
              <View style={styles.inputBoxMini}/>
            </View>
          </View>
          
          <View style={{right: 90, paddingTop:15}}>
            <TouchableOpacity onPress={() => console.log("Ementa")} style={[styles.downloadBox, {alignSelf:'center'}]}>
              <Text style={[styles.labelDownload]}>Ementa</Text>
              <Feather name={'download-cloud'} color={'#374957'} size={PixelRatio.getFontScale()* 30} />
            </TouchableOpacity>
            <View style={{paddingBottom:10}}/>
            <TouchableOpacity onPress={() => console.log("Certificado")} style={[styles.downloadBox, {alignSelf:'center'}]}>
              <Text style={[styles.labelDownload]}>Certificado</Text>
              <Feather name={'download-cloud'} color={'#374957'} size={PixelRatio.getFontScale()* 30} />
            </TouchableOpacity>
          </View>

        </View>

      </View>

    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({


  /////////////// Fontes ///////////////
  title: {
    fontSize: 22,
    paddingBottom:10,
    fontWeight:'600',
    textAlign:'center'
  },
  label:{
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight:'400',
    color:'#2F2E2E',
  },
  linhaHorizontal:{
    height: 1.5,
    backgroundColor: '#CDD2D3',
    left:PixelRatio.getFontScale() * 20,
    width:PixelRatio.getFontScale() * 324,
    marginVertical: PixelRatio.getFontScale() * 15,
  },

  /////////////// Box Download ///////////////
  downloadBox:{
    borderColor: '#CDD2D3',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    borderWidth: 1.5,
    width:PixelRatio.getFontScale()*165,
    height:PixelRatio.getFontScale()*50,
  },
  labelDownload:{
    marginLeft: PixelRatio.getFontScale() * 5,
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight:'400',
    color:'#2F2E2E',
    textAlign:'center'
  },


/////////////// Input ///////////////
  inputContainer:{
    flexDirection:'row',
    justifyContent:'center',
    paddingRight: PixelRatio.getFontScale() * 200,
    textAlign:'center',
    paddingVertical: 5
  },
  inputBox:{
    borderColor: '#CDD2D3',
    borderWidth: 1,
    width:PixelRatio.getFontScale()*165,
    height:PixelRatio.getFontScale()*25,
    position:'absolute',
    right: PixelRatio.getFontScale() * 30,
    alignSelf:'center'

  },
  inputBoxMini:{
    borderColor: '#CDD2D3',
    borderWidth: 1,
    width:PixelRatio.getFontScale()*60,
    height:PixelRatio.getFontScale()*25,
    position:'absolute',
    left: PixelRatio.getFontScale() * 120,
    alignSelf:'center'

  },


});
