import { StyleSheet, Text, View, TouchableOpacity, PixelRatio, ScrollView, TextInput } from 'react-native';
import React from 'react';

import { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { Checkbox } from 'expo-checkbox';


import { Feather } from '@expo/vector-icons';

export default function CursoFeedback() {

const [satisfacao, setSatisfacao] = React.useState("");
const [focoSatisfacao, setfocoSatisfacao] = React.useState('1');  

const satisfacoes = [
    {key:'1', value:'Péssima'},
    {key:'2', value:'Ruim'},
    {key:'3', value:'Regular'},
    {key:'4', value:'Muito boa'},
    {key:'5', value:'Incrível'}
]

const [professor, setProfessor] = React.useState("");
const [focoProfessor, setfocoProfessor] = React.useState('1');  

const professores = [
    {key:'1', value:'Péssima'},
    {key:'2', value:'Ruim'},
    {key:'3', value:'Regular'},
    {key:'4', value:'Muito boa'},
    {key:'5', value:'Incrível'}
]

const [didatico, setDidatico] = React.useState("");
const [focoDidatico, setfocoDidatico] = React.useState('1');  

const didaticos = [
    {key:'1', value:'Péssima'},
    {key:'2', value:'Ruim'},
    {key:'3', value:'Regular'},
    {key:'4', value:'Muito boa'},
    {key:'5', value:'Incrível'}
]

const [plataforma, setPlataforma] = React.useState("");
const [focoPlataforma, setfocoPlataforma] = React.useState('1');  

const plataformas = [
    {key:'1', value:'Péssima'},
    {key:'2', value:'Ruim'},
    {key:'3', value:'Regular'},
    {key:'4', value:'Muito boa'},
    {key:'5', value:'Incrível'}
]

const [form, setForm] = useState({ //Dados pra passar pra api do Rafa
    curso:'',
    professor:'',
    material:'',
    plataforma:'',
    comentario: '',
  }); 

const [isAnonimo, setAnonimo] = useState(false);

    return (
    <View style={styles.container}>

        <View style={styles.questionContainer}/* Header */>

            <View style={styles.containerDesc}>                    
                <Text style={styles.labelDesc}>Nome da turma</Text>

                <View style={styles.boxContainer}> 
                    <Text style={styles.labelInput}>Turma 2</Text>
                </View>
            </View>

            <View style={styles.containerDesc}>                    
                <Text style={styles.labelDesc}>Docente Ministrante</Text>

                <View style={styles.boxContainer}> 
                    <Text style={styles.labelInput}>Fulano Fulano</Text>
                </View>
            </View>

        </View>

        <View style={styles.linhaHorizontal}/>

        <ScrollView /* Questionario */>
            <View  style={styles.questionContainer} /* Satisfação */>
                <Text style={styles.title}>Qual sua satisfação com o curso?</Text>
                <View style={styles.selectContainer}>
                    <SelectList
                        setSelected={setSatisfacao}
                        data={satisfacoes}
                        placeholder="Escolha uma resposta"
                        search={false}
                        maxHeight={180}
                        arrowicon={<Feather name={'chevron-down'} color={'#374957'} size={PixelRatio.getFontScale()*20}/>}
                        boxStyles={styles.selectBox}
                        inputStyles={styles.selectLabel}
                        dropdownStyles={{zIndex: 1, position: 'absolute', top: '100%', width: '100%', backgroundColor: '#D9D9D9'}}
                    />
                </View>
            </View>
            
            <View style={styles.linhaHorizontalMini}/>

            <View  style={styles.questionContainer} /* Professor */>
                <Text style={styles.title}>Qual sua avaliação do professor?</Text>
                <View style={styles.selectContainer}>
                    <SelectList
                        setSelected={setProfessor}
                        data={professores}
                        placeholder="Escolha uma resposta"
                        search={false}
                        maxHeight={180}
                        arrowicon={<Feather name={'chevron-down'} color={'#374957'} size={PixelRatio.getFontScale()*20}/>}
                        boxStyles={styles.selectBox}
                        inputStyles={styles.selectLabel}
                        dropdownStyles={{zIndex: 1, position: 'absolute', top: '100%', width: '100%', backgroundColor: '#D9D9D9'}}
                    />
                </View>
            </View>

            <View style={styles.linhaHorizontalMini}/>

            <View  style={styles.questionContainer} /* MaterialDidatico */>
                <Text style={styles.title}>Qual sua avaliação do material didático?</Text>
                <View style={styles.selectContainer}>
                    <SelectList
                        setSelected={setDidatico}
                        data={didaticos}
                        placeholder="Escolha uma resposta"
                        search={false}
                        maxHeight={180}
                        arrowicon={<Feather name={'chevron-down'} color={'#374957'} size={PixelRatio.getFontScale()*20}/>}
                        boxStyles={styles.selectBox}
                        inputStyles={styles.selectLabel}
                        dropdownStyles={{zIndex: 1, position: 'absolute', top: '100%', width: '100%', backgroundColor: '#D9D9D9'}}
                    />
                </View>
            </View>

            <View style={styles.linhaHorizontalMini}/>

            <View  style={styles.questionContainer} /* Plataforma */>
                <Text style={styles.title}>Qual sua avaliação da plataforma utilizada?</Text>
                <View style={styles.selectContainer}>
                    <SelectList
                        setSelected={setPlataforma}
                        data={plataformas}
                        placeholder="Escolha uma resposta"
                        search={false}
                        maxHeight={180}
                        arrowicon={<Feather name={'chevron-down'} color={'#374957'} size={PixelRatio.getFontScale()*20}/>}
                        boxStyles={styles.selectBox}
                        inputStyles={styles.selectLabel}
                        dropdownStyles={{zIndex: 1, position: 'absolute', top: '100%', width: '100%', backgroundColor: '#D9D9D9'}}
                    />
                </View>
            </View>

            <View style={styles.linhaHorizontalMini}/>
            
            <View  style={styles.questionContainer}> 
                <View style={{paddingBottom: PixelRatio.getFontScale() * 15}}>
                    <Text style={styles.title}>Deseja comentar algo a mais?</Text>
                </View>
                <View style={styles.boxInput}> 
                    <TextInput
                        style={styles.labelInputBox}
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder='Digite sua mensagem'
                        value={form.comentario}
                        multiline={true}
                        onChangeText={comentario => setForm({...form, comentario})}
                    />
                </View>
                <View style={styles.anonContainer}>
                    <Checkbox value={isAnonimo} onValueChange={setAnonimo}/>
                    <Text style={styles.labelAnon}>Enviar anonimamente</Text>
                </View>
            </View>


        </ScrollView>
        
        <View style={styles.linhaHorizontal}/>

        <View style={{paddingTop: 15}} /* Bottom */> 
            <TouchableOpacity onPress={() => console.log("Confirmar Envio")} style={[styles.confirmaBox, {alignSelf:'center'}]}>
                <Text style={[styles.labelConfirma]}>Atualizar Feedback</Text>
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
    ///////////////// LINHA HORIZONTAL /////////////////
    linhaHorizontal:{
        height: 1.5,
        backgroundColor: '#CDD2D3',
        width:PixelRatio.getFontScale() * 340,
        alignSelf:'center',
    },
    linhaHorizontalMini:{
        height: 1,
        backgroundColor: '#CDD2D3',
        width:PixelRatio.getFontScale() * 300,
        alignSelf:'center',
    },
    ///////////////// HEADER /////////////////
    
    containerDesc:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        paddingVertical: 10,
        paddingHorizontal:20
    },
    labelDesc:{
        fontSize: PixelRatio.getFontScale() * 16,
        fontWeight: '400',
        color: '#2F2E2E',
        textAlign: 'center',
        width: PixelRatio.getFontScale() * 120
    },
    labelInput: {
        fontSize: PixelRatio.getFontScale() * 16,
        fontWeight: '400',
        color: '#2F2E2E',
        textAlign: 'center',
        flex: 1,
    },
    boxContainer: {
        borderColor: '#CDD2D3',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        width: '50%',
        height: PixelRatio.getFontScale() * 30,
    },

    ///////////////// SELECT BOX /////////////////
  questionContainer:{
    paddingVertical:PixelRatio.getFontScale() * 15,
  },
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
  
  labelInputBox: {
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
  labelAnon:{
    fontSize: 14,
    fontWeight:'400',
    color:'#2F2E2E',
    textAlign:'center',
    paddingHorizontal: PixelRatio.getFontScale() * 10
  },

    ///////////////// BOTTOM /////////////////

    confirmaBox:{
        borderColor: '#CDD2D3',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        borderWidth: 1,
        width:'60%',
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
