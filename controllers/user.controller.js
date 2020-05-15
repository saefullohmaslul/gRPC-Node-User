const getNotes = require('../grpc/notes/client/get-notes.grpc')
const { resError, resSuccess } = require('../utils/response')

exports.userNotes = async (req, res, next) => {
  try {
    const { notes } = await getNotes()

    return resSuccess(res, notes, 'Success get all user notes')
  } catch (error) {
    return resError(res, 500, [{
      flag: 'INTERNAL_SERVER_ERROR',
      message: 'Failed get all note'
    }])
  }
}