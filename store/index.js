export const state = () => ({
  name: '',
  questions: []
})

export const mutations = {
  setName (state, name) {
    state.name = name
  },
  addQuestion (state, question) {
    state.questions.push(question)
  }
}
