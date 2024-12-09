import { StyleSheet, Text, View, TouchableOpacity, PixelRatio, FlatList } from 'react-native';
import React from 'react';

import { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { Checkbox } from 'expo-checkbox';


import { Feather } from '@expo/vector-icons';

export default function CursoHistoricos() {

    const [componente, setComponente] = React.useState("");
    const [focoComponente, setfocoComponente] = React.useState('EN');

    const componentes = [
        {key:'NC', value:'Núcleo Comum'},
        {key:'CCI', value:'Componente Curricular do Idioma'},
        {key:'CCTI', value:'Componente Curricular para Todos os Idiomas'},
        {key:'CCPE', value:'Componente Curricular Português para Estrangeiros'},
    ];

    const cursos = [
        { id: '1', key:'NC', nomeTurma:'Nucleo Comum 1', totalHoras: 40, docente:'Fulano Comum', status:'APROVADO'},
        { id: '2', key:'NC', nomeTurma:'Nucleo Comum 2', totalHoras: 40, docente:'Fulano Comum 2', status:'APROVADO'},
        { id: '3', key:'NC', nomeTurma:'Nucleo Comum 3', totalHoras: 40, docente:'Fulano Comum 3', status:'APROVADO'},
        { id: '4', key:'NC', nomeTurma:'Nucleo Comum 4', totalHoras: 40, docente:'Fulano Comum 4', status:'APROVADO'},
        { id: '5', key:'NC', nomeTurma:'Nucleo Comum 5', totalHoras: 40, docente:'Fulano Comum 5', status:'REPROVADO'},

        { id: '1', key:'CCI', nomeTurma:'do Idioma 1', totalHoras: 40, docente:'Fulano Idioma', status:'APROVADO'},
        { id: '2', key:'CCI', nomeTurma:'do Idioma 2', totalHoras: 40, docente:'Fulano Idioma', status:'APROVADO'},

        { id: '1', key:'CCTI', nomeTurma:'para Todos os Idiomas 1', totalHoras: 40, docente:'Fulano para todos', status:'APROVADO'},
        { id: '2', key:'CCTI', nomeTurma:'para Todos os Idiomas 2', totalHoras: 40, docente:'Fulano para todos 2', status:'APROVADO'},
        { id: '3', key:'CCTI', nomeTurma:'para Todos os Idiomas 3', totalHoras: 40, docente:'Fulano para todos 3', status:'RECUPERAÇÃO'},

        { id: '1', key:'CCPE', nomeTurma:'Português p Estrangeiros 1', totalHoras: 40, docente:'Fulano Estrangeiros', status:'APROVADO'},
        { id: '2', key:'CCPE', nomeTurma:'Português p Estrangeiros 2', totalHoras: 40, docente:'Fulano Estrangeiros 2', status:'APROVADO'},
        { id: '3', key:'CCPE', nomeTurma:'Português p Estrangeiros 3', totalHoras: 40, docente:'Fulano Estrangeiros 3', status:'RECUPERAÇÃO'},
    ];

    const filteredData = cursos.filter(item => item.key === focoComponente);


    const renderCursos = ({ item }) => (

        <View style={styles.questionContainer}/* Relatorio */>

            <View style={styles.containerDesc} /* Nome Turma */>                    
                <Text style={styles.labelDesc}>Nome da turma</Text>

                <View style={styles.boxContainer}> 
                    <Text style={styles.labelInput}>{item.nomeTurma}</Text>
                </View>
            </View>

            <View style={styles.containerDesc} /* Total Horas */>                    
                <Text style={styles.labelDesc}>Total de horas</Text>

                <View style={styles.boxContainer}> 
                    <Text style={styles.labelInput}>{item.totalHoras}</Text>
                </View>
            </View>

            <View style={styles.containerDesc} /* Docente */>                    
                <Text style={styles.labelDesc}>Docente</Text>

                <View style={styles.boxContainer}> 
                    <Text style={styles.labelInput}>{item.docente}</Text>
                </View>
            </View>

            <View style={styles.containerDesc} /* Status */>                    
                <Text style={styles.labelDesc}>Status</Text>

                <View style={styles.boxContainer}> 
                    <Text style={styles.labelInput}>{item.status}</Text>
                </View>
            </View>

            <View style={styles.redirectContainer} /* Status e Editar Entrega */ >
                <View>
                    <TouchableOpacity onPress={() => console.log("Histórico")} style={[styles.redirectBox, {alignSelf:'center'}]}>
                        <Text style={[styles.labelRedirect]}>Ementa</Text>
                        <Feather name={'download-cloud'} color={'#374957'} size={PixelRatio.getFontScale()* 24} />
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={() => console.log("Histórico")} style={[styles.redirectBox, {alignSelf:'center'}]}>
                        <Text style={[styles.labelRedirect]}>Moodle</Text>
                        <Feather name={'link'} color={'#374957'} size={PixelRatio.getFontScale()* 24} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.linhaHorizontalMini}/>

        </View>
    );

    return (
    <View style={styles.container}>

        <View style={styles.header}>
            <View style={styles.headerSize}>
                <SelectList
                    setSelected={setfocoComponente}
                    data={componentes}
                    defaultOption={{key:'NC', value:'Núcleo Comum'}}
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
            renderItem={renderCursos}
            keyExtractor={(item, index) => item.key + '-' + item.value + '-' + index}
            contentContainerStyle={styles.lista}
        />

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        paddingVertical: PixelRatio.getFontScale() * 30,
    },
    header:{
        paddingBottom: PixelRatio.getFontScale() * 15,
        paddingHorizontal: '10%'
    },
    headerSize:{
        width: '60%',
        alignSelf:'flex-end',
        
    },
    title: {
        fontSize: 20,
        fontWeight:'600',
        textAlign:'center'
    },
    lista: {
        padding: 10,
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
        marginVertical: PixelRatio.getFontScale() * 10
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
        width: '60%',
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

    ///////////////// FEEDBACK /////////////////
    
    redirectContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingVertical: PixelRatio.getFontScale()* 10

    },
    redirectBox:{
        borderColor: '#CDD2D3',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        borderWidth: 1,
        width:'70%',
        height: PixelRatio.getFontScale()* 50,
        borderRadius: 20
    },
    labelRedirect:{
        marginLeft: PixelRatio.getFontScale() * 5,
        fontSize: PixelRatio.getFontScale() * 16,
        fontWeight:'600',
        color:'#2F2E2E',
        textAlign:'center'
    },

});
