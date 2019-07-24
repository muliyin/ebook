const book = {
	state: {
		test1: 1
	},
	mutations: {
		'SET_TEST': (state, newTest) => {
			state.test1 = newTest
		}
	},
	actions: {
		setTest: ({commit, state}, newTest) => {
			commit('SET_TEST',newTest)
		}
	}
};

export default book