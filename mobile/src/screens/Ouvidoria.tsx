import { StyleSheet, Text, View, TouchableOpacity, PixelRatio, TextInput } from 'react-native';
import React from 'react';
import { useState } from 'react';

import { SelectList } from 'react-native-dropdown-select-list';
import { Checkbox } from 'expo-checkbox';

import { Feather } from '@expo/vector-icons';

export default function Ouvidoria() {

  const [topico, setTopico] = React.useState("");
  const [focoTopico, setfocoTopico] = React.useState('EN');  

  const topicos = [
    {key:'1', value:'Orientações'},
    {key:'2', value:'Aulas Moodle'},
    {key:'3', value:'Horas Práticas'},
    {key:'4', value:'Questões Administrativas'},
    {key:'5', value:'Outros'}
  ]


  const [form, setForm] = useState({ //Dados pra passar pra api do Rafa
    resposta: '',
  }); 

  const [isAnonimo, setAnonimo] = useState(false);

  
  return (
    <View style={styles.container}>

        <View /* Header */> 
            <Text style={styles.label}>Este canal deve ser utilizado para comunicação direta com a coordenação do curso</Text>
        </View>

        <View style={styles.linhaHorizontal}/>

        <View  /* Topico */>
            <Text style={styles.title}>Qual o principal tópico da mensagem?</Text>
            <View style={styles.selectContainer}>
                <SelectList
                    setSelected={setTopico}
                    data={topicos}
                    placeholder="Escolha um tópico"
                    search={false}
                    maxHeight={180}
                    arrowicon={<Feather name={'chevron-down'} color={'#374957'} size={PixelRatio.getFontScale()*20}/>}
                    boxStyles={styles.selectBox}
                    inputStyles={styles.selectLabel}
                    dropdownStyles={{zIndex: 1, position: 'absolute', top: '100%', width: '100%', backgroundColor: '#D9D9D9'}}
                />
            </View>
            
        </View>

        <View style={styles.linhaHorizontal}/>
        
        <View  /* Resposta */> 
            <View style={styles.boxInput}> 
                <TextInput
                    style={styles.labelInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Digite sua mensagem'
                    value={form.resposta}
                    multiline={true}
                    onChangeText={resposta => setForm({...form, resposta})}
                />
            </View>
            <View style={styles.anonContainer}>
                <Checkbox value={isAnonimo} onValueChange={setAnonimo}/>
                <Text style={styles.labelAnon}>Enviar anonimamente</Text>
            </View>
        </View>

        <View style={styles.linhaHorizontal}/>

        <View /* Bottom */> 
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
    justifyContent: 'space-between',
    paddingVertical: 30
  },

  title: {
    fontSize: 20,
    fontWeight:'600',
    textAlign:'center'
  },
  label:{
    fontSize: 16,
    fontWeight:'400',
    color:'#2F2E2E',
    textAlign:'center',
    paddingHorizontal: PixelRatio.getFontScale() * 20
  },
  labelAnon:{
    fontSize: 14,
    fontWeight:'400',
    color:'#2F2E2E',
    textAlign:'center',
    paddingHorizontal: PixelRatio.getFontScale() * 10
  },

  ///////////////// LINHA HORIZONTAL /////////////////
  linhaHorizontal:{
    height: 1.5,
    backgroundColor: '#CDD2D3',
    width:PixelRatio.getFontScale() * 340,
    alignSelf:'center',
  },

  ///////////////// SELECT BOX /////////////////
  selectContainer:{
    paddingTop: PixelRatio.getFontScale() * 15,
    alignSelf:'center'
  },

  selectBox:{
    width:PixelRatio.getFontScale() * 260,
    backgroundColor:'#e5e6eb',
    alignItems:'center',
  },

  selectLabel:{
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight:'400',
    color:'#2F2E2E',
    textAlign:'center',
    paddingLeft:10
  },

///////////////// INPUT BOX /////////////////

  boxInput: {
    backgroundColor: '#f8f8fa',
    borderColor: '#374957',
    flexDirection: 'row',
    alignSelf:'center',
    borderWidth: 0.5,
    width: '80%',
    height: 300
  },
  
  labelInput: {
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight: '400',
    color: '#2F2E2E',
    textAlign: 'justify',
    textAlignVertical:'top',
    padding:PixelRatio.getFontScale() * 10,    
  },
  anonContainer:{
    flexDirection:'row',
    width:'80%',
    alignSelf:'center',
    paddingTop: PixelRatio.getFontScale() * 10,
  },

///////////////// CONFIRMA BOX /////////////////

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
  
});
