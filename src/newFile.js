import USER_DATA from './dummy-data.js';

export default (await import('vue')).defineComponent({
components: {
UserList,
ProjectsList,
},
setup() {
},
data() {
return {
selectedUser: null,
activeUsers: USER_DATA,
};
},
methods: {
selectUser(uid) {
this.selectedUser = this.activeUsers.find((usr) => usr.id === uid);
},
},
});
