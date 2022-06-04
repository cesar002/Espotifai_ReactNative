import { View, Text } from 'react-native'
import { RecyclerListView, DataProvider,  LayoutProvider } from 'recyclerlistview';
import React from 'react'

const ListaResultadosBusqueda = () => {
    return (
        <RecyclerListView 
            dataProvider = {
                new DataProvider((r1, r2) => {
                    return r1 !== r2
                }).cloneWithRows([])
            }
            rowRenderer = {()=><View />}
            layoutProvider = { new LayoutProvider((i)=>{ return '' }, (type, dim) => {}) }
        />
    )
}

export default ListaResultadosBusqueda