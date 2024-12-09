import { StyleSheet, Text, View, TouchableOpacity, PixelRatio, TextInput } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';


import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function RelatorioOrientacao() {


  const [avaliacao, setAvaliacao] = React.useState("");
  //const [focoAvaliacao, setfocoAvaliacao] = React.useState('EN');  

  const avaliacoes = [
    {key:'1', value:'Péssima'},
    {key:'2', value:'Ruim'},
    {key:'3', value:'Regular'},
    {key:'4', value:'Muito Boa'},
    {key:'5', value:'Incrível'},
  ]

  const [carga, setCarga] = React.useState("");

  const cargas = [
    {key:'1', value:'1 hora'},
    {key:'2', value:'2 horas'},
    {key:'4', value:'4 horas'},
    {key:'8', value:'8 horas'},
    {key:'16', value:'16 horas'},
  ]

  const [form, setForm] = useState({ //Dados pra passar pra api do Rafa
    avaliacao: '',
    cargaHoraria: '',
    descricao: '',
  }); 

  
  return (
    <View style={styles.container}>
      
        <ScrollView>
            <View style={[{paddingTop: '10%'}]}>

                <View style={styles.linksHorizontais}>
                    <SelectList
                        setSelected={setAvaliacao}
                        data={avaliacoes}
                        placeholder="Avaliação"
                        search={false}
                        maxHeight={200}
                        arrowicon={<Feather name={'chevron-down'} color={'#374957'} size={PixelRatio.getFontScale()*20}/>}
                        boxStyles={styles.selectBox}
                        inputStyles={styles.selectLabel}
                        dropdownStyles={{zIndex: 1, position: 'absolute', top: '100%', width: '100%', backgroundColor: '#D9D9D9'}}
                    />
                    <SelectList
                        setSelected={setCarga}
                        data={cargas}
                        placeholder="Carga Horária"
                        search={false}
                        maxHeight={200}
                        arrowicon={<Feather name={'chevron-down'} color={'#374957'} size={PixelRatio.getFontScale()*20}/>}
                        boxStyles={styles.selectBox}
                        inputStyles={styles.selectLabel}
                        dropdownStyles={{zIndex: 1, position: 'absolute', top: '100%', width: '100%', backgroundColor: '#D9D9D9'}}
                    />
                </View>

                <View /*  CargaHoraria Observação */>
                    

                    <View style={styles.containerEdit}>
                        
                        <Text style={styles.labelEdit}>Carga Horária</Text>

                        <View style={{flexDirection:'row'}}>
                            <View style={styles.boxInput}> 
                                <TextInput
                                style={styles.labelInput}
                                autoCapitalize='none'
                                autoCorrect={false}
                                value={form.cargaHoraria}
                                onChangeText={cargaHoraria => setForm({...form, cargaHoraria})}
                                />
                            </View>

                            <Feather name = 'edit' color={'#374957'} size={PixelRatio.getFontScale()*24} style={{paddingLeft:PixelRatio.getFontScale() * 15, alignItems:'center', paddingTop: PixelRatio.getFontScale()*3}}/>

                        </View>
                        
                    </View>

                    <View style={styles.containerEdit}>

                        <View style={styles.boxInputLong}> 
                                    <TextInput
                                    style={styles.labelInputBox}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    placeholder='Faça alguma observação'
                                    value={form.descricao}
                                    onChangeText={descricao => setForm({...form, descricao})}
                                    />
                        </View>
                    </View>
                    


                </View>

            </View>

            <View style={styles.linhaHorizontal}></View>

            <View style={styles.containerOR}/*Orientador Responsável*/>

                <View style={styles.headerOR}>
                    <View>
                        <Text style={styles.title} >Orientador Responsável</Text>
                    </View>
                </View>

                <View style={styles.containerEdit}>                    
                    <Text style={styles.labelEdit}>Nome</Text>

                    <View style={styles.boxInputOR}> 
                        <Text style={styles.labelInput}>Fulano Fulano</Text>
                    </View>
                </View>
                <View style={styles.containerEdit}>                    
                    <Text style={styles.labelEdit}>Instituição</Text>

                    <View style={styles.boxInputOR}> 
                        <Text style={styles.labelInput}>UFSCar</Text>
                    </View>
                </View>
                <View style={styles.containerEdit}>                    
                    <Text style={styles.labelEdit}>Última avaliação</Text>

                    <View style={styles.boxInputOR}> 
                        <Text style={styles.labelInput}>30/10/2024</Text>
                    </View>
                </View>
            

            </View>

        </ScrollView>

        <View style={styles.linhaHorizontal}></View>

        <View style={{paddingBottom: '10%'}}/*Confirmar envio*/>
            <TouchableOpacity onPress={() => console.log("Confirmar Envio")} style={[styles.confirmaBox, {alignSelf:'center'}]}>
                <Text style={[styles.labelConfirma]}>Confirmar Envio</Text>
                <Feather name={'check'} color={'#374957'} size={PixelRatio.getFontScale()* 24} />
            </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 22,
    paddingBottom:10,
    fontWeight:'600',
  },
  label:{
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight:'400',
    color:'#2F2E2E',
  },

  // Linha Horizontal //

  linhaHorizontal:{
    height: 1.5,
    backgroundColor: '#CDD2D3',
    width:PixelRatio.getFontScale() * 340,
    alignSelf:'center',
    marginVertical: PixelRatio.getFontScale() * 25,
  },

  // Header //
  
  header: {
    flexDirection:'row',
    width: '100%',
    alignItems:'center',
    justifyContent: 'space-around',
    paddingTop: PixelRatio.getFontScale() * 25
  },

  // Descrição Relatório //

  linksHorizontais:{
    flexDirection:'row',
    width: '100%',
    alignItems:'center',
    justifyContent: 'space-around',
    paddingBottom: PixelRatio.getFontScale() * 15
  },

  containerEdit:{
    flexDirection:'row',
    width: '100%',
    alignItems:'center',
    justifyContent:'space-evenly',
    paddingVertical: 10
  },

  labelEdit:{
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight: '400',
    color: '#2F2E2E',
    textAlign: 'center',
    width: PixelRatio.getFontScale() * 120
    
  },

  boxInput: {
    backgroundColor: '#E6EAEB',
    borderColor: '#374957',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    width: PixelRatio.getFontScale() * 200,
    paddingHorizontal: 10,
  },

  boxInputLong:{
    backgroundColor: '#f8f8fa',
    borderColor: '#374957',
    flexDirection: 'row',
    alignSelf:'center',
    borderWidth: 0.5,
    width: '80%',
    height: 200,
  },
  
  labelInput: {
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight: '400',
    color: '#2F2E2E',
    textAlign: 'center',
    flex: 1,
  },

  // Orientador Responsavel //

  containerOR: {
    width: '100%',
  },

  headerOR:{
    paddingLeft: PixelRatio.getFontScale() * 25
  },
  boxInputOR: {
    
    borderColor: '#CDD2D3',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    width: PixelRatio.getFontScale() * 200,
    height: PixelRatio.getFontScale() * 30,
  },

  // Confirmar box //

  confirmaBox:{
    borderColor: '#CDD2D3',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    borderWidth: 1,
    width:PixelRatio.getFontScale()*220,
    height:PixelRatio.getFontScale()*55,
    borderRadius: 10
  },
  labelConfirma:{
    marginLeft: PixelRatio.getFontScale() * 5,
    fontSize: PixelRatio.getFontScale() * 20,
    fontWeight:'600',
    color:'#2F2E2E',
    textAlign:'center'
  },

  // Redirect box //

  redirectBox:{
    borderColor: '#CDD2D3',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    borderWidth: 1,
    width:PixelRatio.getFontScale()*165,
    height:PixelRatio.getFontScale()*50,
    borderRadius: 20
  },
  labelRedirect:{
    marginLeft: PixelRatio.getFontScale() * 5,
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight:'600',
    color:'#2F2E2E',
    textAlign:'center'
  },


  // Select Box //

  selectBox:{
    width:PixelRatio.getFontScale() * 150,
    backgroundColor:'#D9D9D9',
    alignItems:'center',
    height: PixelRatio.getFontScale() * 65
  },

  selectLabel:{
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight:'400',
    color:'#2F2E2E',
    textAlign:'center',
  },


  // Edit Box //

  editBox:{
    borderColor: '#CDD2D3',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    borderWidth: 1.5,
    width:PixelRatio.getFontScale()*165,
    height:PixelRatio.getFontScale()*50,
  },

  labelBoxEdit:{
    marginLeft: PixelRatio.getFontScale() * 5,
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight:'400',
    color:'#2F2E2E',
    textAlign:'center'
  },
  labelInputBox: {
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight: '400',
    color: '#2F2E2E',
    textAlign: 'justify',
    textAlignVertical:'top',
    padding:PixelRatio.getFontScale() * 10,    
  },
});
