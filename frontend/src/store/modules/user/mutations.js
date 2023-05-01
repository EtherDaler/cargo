export default {
    setProfile(state, {userData}) {
        for (let key in userData) {
            state[key] = userData[key]
        }
        state.set = true
    },

    clearProfile(state) {
        state.set = false
        state.role = ''
        state.phone = ''
        state.email = ''
        state.first_name = ''
        state.second_name = ''
        state.address = ''
        state.city = ''
        state.country = ''
        state.qr_code = ''
    }
}