import store from '@redux/store';

/**
 * Clase para recuperar datos repetitivos desde el store
 */
class DataFromStore {

    /**
     * Obtiene el access_token desde el store
     * 
     * @returns string
     */
    public static getAccessToken(){
        const state = store.getState();

        return state.login.login_data.access_token ?? '';
    }

}

export default DataFromStore;