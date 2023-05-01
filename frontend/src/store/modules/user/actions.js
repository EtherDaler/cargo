import {userApi} from "@/plugins/axios";


async function setUser({commit}) {
    let response = await userApi
        .get('/profile/?format=json')
        .then((response) => {
            const user = response.data[0]
            let role = ''
            if (user['admin']) {
                role = 'admin'
            } else if (user['manager']) {
                role = 'manager'
            } else if (user['partner']) {
                role = 'partner'
            } else if (user['staff']) {
                role = 'staff'
            } else if (user['delivery']) {
                role = 'delivery'
            } else {
                role = 'simple'
            }
            const userData = {
                'role': role,
                'phone': user['phone'],
                'email': user['email'],
                'first_name': user['first_name'],
                'last_name': user['last_name'],
                'address': user['adres'],
                'city': user['city'],
                'country': user['country'],
                'qr_code': user['qr_code'],
            }
            commit('setProfile', { userData })
            return response
        })
        .catch((err) => console.log(err))
    return response

}

function clear({ commit }) {
    commit('clearProfile')
}

export default {
    setUser,
    clear
}