import { StyleSheet, Text, View , SafeAreaView, PixelRatio, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { Feather } from '@expo/vector-icons';

export default function Ofertas() {

  const [idioma, setIdioma] = React.useState("");
  const [focoIdioma, setfocoIdioma] = React.useState('EN');

  const idiomas = [
    {key:'EN', value:'Inglês'},
    {key:'ES', value:'Espanhol'},
    {key:'JP', value:'Japonês'},
    {key:'FR', value:'Francês'},
    {key:'IT', value:'Italiano'},
    {key:'AL', value:'Alemão'},
  ]

  const ofertasLista = [
    { id: '1', chave: 'EN', nome: 'Inglês 1', idioma: 'Inglês', ProefIni: 'A1', ProefFim:'A2', Tipo: 'Online', Professor: 'Fulano', Instituicao: 'UFSCAR'},
    { id: '2', chave: 'EN', nome: 'Inglês 2', idioma: 'Inglês', ProefIni: 'A1', ProefFim:'A2', Tipo: 'Online', Professor: 'Fulano', Instituicao: 'UFSCAR'},
    { id: '3', chave: 'EN', nome: 'Inglês 3', idioma: 'Inglês', ProefIni: 'A1', ProefFim:'A2', Tipo: 'Online', Professor: 'Fulano', Instituicao: 'UFSCAR'},
    { id: '4', chave: 'EN', nome: 'Inglês 4', idioma: 'Inglês', ProefIni: 'A1', ProefFim:'A2', Tipo: 'Online', Professor: 'Fulano', Instituicao: 'UFSCAR'},
    { id: '5', chave: 'EN', nome: 'Inglês 5', idioma: 'Inglês', ProefIni: 'A1', ProefFim:'A2', Tipo: 'Online', Professor: 'Fulano', Instituicao: 'UFSCAR'},
    { id: '6', chave: 'EN', nome: 'Inglês 6', idioma: 'Inglês', ProefIni: 'A1', ProefFim:'A2', Tipo: 'Online', Professor: 'Fulano', Instituicao: 'UFSCAR'},

    { id: '1', chave: 'ES', nome: 'Espanhol 1', idioma: 'Espanhol', ProefIni: 'A1', ProefFim:'A2', Tipo: 'Online', Professor: 'Fulano', Instituicao: 'UFSCAR'},
    { id: '2', chave: 'ES', nome: 'Espanhol 2', idioma: 'Espanhol', ProefIni: 'A1', ProefFim:'A2', Tipo: 'Online', Professor: 'Fulano', Instituicao: 'UFSCAR'},

    { id: '1', chave: 'JP', nome: 'Japonês 1', idioma: 'Japonês', ProefIni: 'A1', ProefFim:'A2', Tipo: 'Online', Professor: 'Fulano', Instituicao: 'UFSCAR'},
    { id: '2', chave: 'JP', nome: 'Japonês 2', idioma: 'Japonês', ProefIni: 'A1', ProefFim:'A2', Tipo: 'Online', Professor: 'Fulano', Instituicao: 'UFSCAR'},
    { id: '3', chave: 'JP', nome: 'Japonês 3', idioma: 'Japonês', ProefIni: 'A1', ProefFim:'A2', Tipo: 'Online', Professor: 'Fulano', Instituicao: 'UFSCAR'},
  ];

  const filteredData = ofertasLista.filter(item => item.chave === focoIdioma);

  const renderOferta = ({ item }) => (
    <View>
      <View style={styles.ofertaItem}>
        <Text style={styles.label}>Nome: {item.nome}</Text>
        <Text style={styles.label}>Idioma: {item.idioma}</Text>
        
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Proeficiência: </Text>
          <Text style={styles.label}>{item.ProefIni}</Text>
          <Feather name={'arrow-right'} color={'#374957'} size={PixelRatio.getFontScale()* 18} style={{alignSelf:'center'}} />
          <Text style={styles.label}>{item.ProefFim}</Text>
        </View>

        <Text style={styles.label}>Tipo: {item.Tipo}</Text>
        <Text style={styles.label}>Professor: {item.Professor}</Text>
        <Text style={styles.label}>Instituição: {item.Instituicao}</Text>
      </View>

      <View style={styles.rowContainer}>
        
        <TouchableOpacity onPress={() => console.log("Ementa")} style={[styles.downloadBox, {alignSelf:'center'}]}>
          <Text style={[styles.labelDownload]}>Ementa</Text>
          <Feather name={'download-cloud'} color={'#374957'} size={PixelRatio.getFontScale()* 30} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => console.log("Inscrever")} style={[styles.downloadBox, {alignSelf:'center'}]}>
          <Text style={[styles.labelDownload]}>Inscrever</Text>
          <Feather name={'plus-circle'} color={'#374957'} size={PixelRatio.getFontScale()* 30} />
        </TouchableOpacity>

      </View>

      <View style={styles.linhaHorizontal}/>
    </View>
  );


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.titleOferta}>Oferta XX/XX</Text>
        </View>
        <View>
          <SelectList
            setSelected={setfocoIdioma}
            data={idiomas}
            defaultOption={{key:'EN', value:'Inglês'}}
            search={false}
            maxHeight={180}
            arrowicon={<Feather name={'chevron-down'} color={'#374957'} size={PixelRatio.getFontScale()*20}/>}
            boxStyles={{backgroundColor:'#D9D9D9'}}
            inputStyles={styles.selectLabel}
            dropdownStyles={{zIndex:1, position: 'absolute', top: '100%', width: '100%', backgroundColor:'#D9D9D9'}}
          />
        </View>
      </View>

      <View style={styles.linhaHorizontal}/>

      <FlatList
        data={filteredData}
        renderItem={renderOferta}
        keyExtractor={(item, index) => item.idioma + '-' + item.id + '-' + index}
        contentContainerStyle={styles.lista}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  /////////////// Fontes ///////////////
  container: {
    paddingLeft: PixelRatio.getFontScale() * 24,
    paddingTop: PixelRatio.getFontScale() * 18,
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight:'600',
  },
  label:{
    fontSize: PixelRatio.getFontScale() * 18,
    fontWeight:'400',
    color:'#2F2E2E',
    textAlign:'center',
    paddingVertical: PixelRatio.getFontScale() * 4,
  },
  selectLabel:{
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight:'400',
    color:'#2F2E2E',
    textAlign:'center',
  },
  titleOferta: {
    fontSize: 20,
    fontWeight: 'bold',
    alignContent:'center',
    justifyContent:'center',
    paddingTop: PixelRatio.getFontScale() * 10
  },
  linhaHorizontal:{
    height: 1.5,
    backgroundColor: '#CDD2D3',
    left:PixelRatio.getFontScale() * 20,
    width:PixelRatio.getFontScale() * 324,
    marginVertical: PixelRatio.getFontScale() * 15,
  },


  /////////////// Header ///////////////

  headerContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    
  },


  /////////////// Lista ///////////////
  lista: {
    paddingBottom: 20,
  },
  ofertaItem:{
    flexDirection:'column',
    justifyContent:'center',
    textAlign:'center',
  },
  rowContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly'
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

  preset:{},
});
